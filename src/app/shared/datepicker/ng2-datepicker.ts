import { NgModule, Component, ViewContainerRef, forwardRef, OnInit, Input, Output, ElementRef, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

interface CalendarDate {
  day: number;
  month: number;
  year: number;
  enabled: boolean;
  today: boolean;
  selected: boolean;
}

export const CALENDAR_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'flow-datepicker',
  templateUrl: './ng2-datepicker.component.html',
  styleUrls: ['./ng2-datepicker.component.scss'],
  providers: [CALENDAR_VALUE_ACCESSOR]
})
export class DatePickerComponent implements ControlValueAccessor, OnInit {
  @Input() class: string;
  @Input() expanded: boolean;
  @Input() opened: boolean;
  @Input() format: string;
  @Input() viewFormat: string;
  @Input() firstWeekdaySunday: boolean;
  @Input() dateToday: boolean;
  @Input() changeTime: boolean;
  @Output() clickOutside = new EventEmitter();

  protected yearsActive: boolean = false;
  protected monthsActive: boolean = false;
  protected daysActive: boolean = true;

  protected date: any = moment();
  protected el: Element;
  protected viewDate: string = null;
  protected viewTime: string = null;
  protected calculatedAge: string = '-';
  protected days: CalendarDate[] = [];
  protected years: Array<any> = [];
  protected currentYear = new Date().getFullYear();
  protected calculatedCurrentYear = new Date().getFullYear();
  protected paginatedYears: Array<any> = [];
  protected page: number = 0;
  protected selectedYears: string = '';
  protected prevYearAllowed: boolean = true;
  protected nextYearAllowed: boolean = true;
  protected prevMonthAllowed: boolean = true;
  protected nextMonthAllowed: boolean = true;
  protected prevYearsAllowed: boolean = true;
  protected nextYearsAllowed: boolean = true;
  protected isTimeValid: boolean = false;
  protected isDateValid: boolean = false;
  protected regexpTime = new RegExp('([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}');
  protected regexpDate1 = new RegExp('(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}');
  protected regexpDate2 = new RegExp('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])');

  protected onTouchedCallback: () => void = () => { };
  protected onChangeCallback: (_: any) => void = () => { };

  constructor(viewContainerRef: ViewContainerRef, private _eref: ElementRef) {
    this.el = viewContainerRef.element.nativeElement;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._eref.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.clickOutside.emit(null);
    }
  }

  get value(): any {
    return this.date;
  }

  set value(value: any) {
    if (value) {
      let date = (value instanceof moment) ? value : moment(value, this.format);
      this.viewDate = date.format(this.viewFormat);
      if (this.changeTime) {
        this.viewTime = date.format('HH:mm:ss');
      }
    } else {
      this.viewDate = '';
    }
    this.onChangeCallback(value);
  }

  ngOnInit() {
    this.class = `ui-kit-calendar-container ${this.class}`;
    this.opened = this.opened || false;
    this.format = this.format || 'YYYY-MM-DD';
    this.viewFormat = this.viewFormat || 'YYYY-MM-DD';
    this.firstWeekdaySunday = this.firstWeekdaySunday || false;
    this.dateToday = this.dateToday || false;
    this.changeTime = this.changeTime || false;
    setTimeout(() => {
      if (this.dateToday) {
        let value = moment();
        this.value = value;
        this.onChangeCallback(value.format(this.format));
      }
      this.generateYears();
      this.updateViewDate(this.viewDate);
    });
  }

  public generateYears() {
    this.years = [];

    let start = this.calculatedCurrentYear - 20;
    let calculatedYear = this.calculatedCurrentYear;
    let maxYear = new Date().getFullYear() - 1890;
    for (start; start <= calculatedYear && (this.currentYear - maxYear) <= calculatedYear; calculatedYear--) {
        this.years.push(calculatedYear);
    }

    this.selectedYears = this.years[0] + ' - ' + this.years[this.years.length - 1];
    this.prevYearsAllowed = this.years[0] !== new Date().getFullYear();
    this.nextYearsAllowed = this.years[this.years.length - 1] !== (this.currentYear - maxYear);
  }

  updateViewTime(viewTime = '') {
    if (this.changeTime) {
      if (viewTime) {
        let regexp = new RegExp('([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}');
        if (regexp.test(viewTime) && this.viewDate) {
          let tempTime = viewTime.split(':');
          this.date.hours(tempTime[0]);
          this.date.minutes(tempTime[1]);
          this.date.seconds(tempTime[2]);
          this.viewTime = this.date.format('HH:mm:ss');
          this.value = this.date;
        }
      } else {
        this.viewTime = null;
      }
    }

    this.isTimeValid = this.viewDate && this.regexpTime.test(viewTime);
  }

  updateViewDate(viewDate = '') {
    let regexp1 = new RegExp('(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}'); // datum is DD-MM-YYYY formaat.
    let regexp2 = new RegExp('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])'); // Datum is YYYY-MM-DD formaat

    if (viewDate && (regexp1.test(viewDate) || regexp2.test(viewDate))) {
      if (regexp1.test(viewDate)) {
        let tempDate = viewDate.split('-');

        this.date.year(Number(tempDate[2])); this.date.month(Number(tempDate[1]) - 1); this.date.date(Number(tempDate[0]));
        this.date.hours(Number(0)); this.date.minutes(Number(0)); this.date.seconds(Number(0));

      } else if (regexp2.test(viewDate)) {
        if (this.changeTime && this.date) {
          let t = 'T';
          if (viewDate.indexOf(t) !== -1) {
            let tempD = viewDate.split('T');
            tempD[1] = tempD[1].substring(0, 8);
            let tempDate = tempD[0].split('-');
            let tempTime = tempD[1].split(':');
            this.date.year(Number(tempDate[0])); this.date.month(Number(tempDate[1]) - 1); this.date.date(Number(tempDate[2]));
            this.date.hours(Number(tempTime[0])); this.date.minutes(Number(tempTime[1])); this.date.seconds(Number(tempTime[2]));
          } else {
            let tempDate = viewDate.split('-');
            this.date.year(Number(tempDate[0])); this.date.month(Number(tempDate[1]) - 1); this.date.date(Number(tempDate[2]));
            this.date.hours(Number(0)); this.date.minutes(Number(0)); this.date.seconds(Number(0));
          }
        } else {
          let tempDateStrip = viewDate.substring(0, 10);
          let tempDate = tempDateStrip.split('-');
          this.date.year(Number(tempDate[0])); this.date.month(Number(tempDate[1]) - 1); this.date.date(Number(tempDate[2]));
          this.date.hours(Number(0)); this.date.minutes(Number(0)); this.date.seconds(Number(0));
        }
      }

      this.viewDate = this.date.format(this.viewFormat);
      this.isDateValid = this.viewDate && (this.regexpDate1.test(this.viewDate) || this.regexpDate2.test(this.viewDate));
      this.value = this.date.format(this.format);
      if (this.changeTime) {
        this.viewTime = this.date.format('HH:mm:ss');
        this.isTimeValid = (this.viewDate && this.regexpTime.test(this.viewTime));
      }
    } else {
      if (this.changeTime) {
        this.value = moment();
      }
      this.date = moment();
      this.viewDate = null;
      this.viewTime = null;
      this.value = '';
      this.isDateValid = this.viewDate && (this.regexpDate1.test(this.viewDate) || this.regexpDate2.test(this.viewDate));
      this.isTimeValid = (this.viewDate && this.regexpTime.test(this.viewTime));
    }

    this.generateCalendar();
    this.checkDate();
  }

  public checkYear(year: number): number {
    let tempDate = (year > new Date().getFullYear()) ? new Date().getFullYear() : year;
    let yearDate = tempDate < 1890 ? 1890 : tempDate;

    return yearDate;
  }

  checkDate() {
    let currentDate = moment(this.date);
    let currentYear = currentDate.year();
    let currentMonth = currentDate.month();

    this.prevYearAllowed = (currentYear > 1890);
    this.nextYearAllowed = (currentYear <  new Date().getFullYear());

    this.prevMonthAllowed = (this.prevYearAllowed || currentMonth > 0);
    this.nextMonthAllowed = (this.nextYearAllowed || currentMonth < 11);
  }

  generateCalendar() {
    let date = moment(this.date);
    let month = date.month();
    let year = date.year();
    let n: number = 1;
    let firstWeekDay: number = (this.firstWeekdaySunday) ? date.date(2).day() : date.date(1).day();
    let leapYear: boolean = (year % 4 === 0 && year % 400 === 0);

    if (firstWeekDay !== 1) {
      n -= (firstWeekDay + 6) % 7;
    }

    this.days = [];
    let selectedDate = moment(this.value, this.viewFormat);
    for (let i = n; i <= (leapYear ? date.endOf('month').date() + 1 : date.endOf('month').date()); i += 1) {
      let currentDate = moment(`${i}.${month + 1}.${year}`, 'DD.MM.YYYY');
      let today = (moment().isSame(currentDate, 'day') && moment().isSame(currentDate, 'month')) ? true : false;
      let selected = (selectedDate.isSame(currentDate, 'day')) ? true : false;

      if (i > 0) {
        this.days.push({
          day: i,
          month: month + 1,
          year: year,
          enabled: true,
          today: today,
          selected: selected
        });
      } else {
        this.days.push({
          day: null,
          month: null,
          year: null,
          enabled: false,
          today: false,
          selected: false
        });
      }
    }
  }

  openYear() {
    this.daysActive = false;
    this.yearsActive = true;
  }

  selectYear(e: MouseEvent, i: number) {
    e.preventDefault();
    let date = moment(this.date);
    let difference = (date.year() - this.years[i]).toString();
    let diff = difference.replace('-', '');
    (this.years[i] > date.year()) ? this.date.add(diff, 'year') : this.date.subtract(diff, 'year');

    this.value = this.date.format(this.format);
    this.viewDate = this.date.format(this.viewFormat);
    if (this.changeTime) {
      this.viewTime = this.date.format('HH:mm:ss');
    }
    this.yearsActive = false;
    this.daysActive = true;
    this.checkDate();
    this.generateCalendar();
  }

  selectDate(e: MouseEvent, i: number) {
    e.preventDefault();
    let date: CalendarDate = this.days[i];

    if (date.day) {
      let selectedDate = moment(`${date.day}.${date.month}.${date.year}`, 'DD.MM.YYYY');
      this.value = selectedDate.format(this.format);
      this.viewDate = selectedDate.format(this.viewFormat);
      this.isDateValid = this.viewDate && (this.regexpDate1.test(this.viewDate) || this.regexpDate2.test(this.viewDate));
      if (this.changeTime) {
        this.viewTime = selectedDate.format('HH:mm:ss');
        this.isTimeValid = (this.viewDate && this.regexpTime.test(this.viewTime));
      }
      this.close();
      this.generateCalendar();
    }
  }

  prevMonth() {
    this.date = this.date.subtract(1, 'month');
    this.value = this.date;
    this.viewDate = this.date.format(this.viewFormat);
    if (this.changeTime) {
      this.viewTime = this.date.format('HH:mm:ss');
    }
    this.yearsActive = false;
    this.daysActive = true;
    this.updateViewDate(this.viewDate);
  }

  nextMonth() {
    this.date = this.date.add(1, 'month');
    this.value = this.date;
    this.viewDate = this.date.format(this.viewFormat);
    if (this.changeTime) {
      this.viewTime = this.date.format('HH:mm:ss');
    }
    this.yearsActive = false;
    this.daysActive = true;
    this.updateViewDate(this.viewDate);
  }

  prevYear() {
    this.date = this.date.subtract(1, 'year');
    this.value = this.date;
    this.viewDate = this.date.format(this.viewFormat);
    if (this.changeTime) {
      this.viewTime = this.date.format('HH:mm:ss');
    }
    this.yearsActive = false;
    this.daysActive = true;
    this.updateViewDate(this.viewDate);
  }

  nextYear() {
    this.date = this.date.add(1, 'year');
    this.value = this.date;
    this.viewDate = this.date.format(this.viewFormat);
    if (this.changeTime) {
      this.viewTime = this.date.format('HH:mm:ss');
    }
    this.yearsActive = false;
    this.daysActive = true;
    this.updateViewDate(this.viewDate);
  }

  prevFewYears() {
    this.calculatedCurrentYear += 20;
    this.generateYears();
  }

  nextFewYears() {
    this.calculatedCurrentYear -= 20;
    this.generateYears();
  }

  writeValue(value: any) {
    this.viewDate = value;
    this.isDateValid = this.viewDate && (this.regexpDate1.test(this.viewDate) || this.regexpDate2.test(this.viewDate));
    if (value) {
      this.date = moment(value);
      if (this.changeTime && value.length >= 17) {
        let tempD = value.split('T');
        let tempTime = tempD[1].split(':');
        this.viewTime = tempTime[0] + ':' + tempTime[1] + ':' + tempTime[2];
        this.isTimeValid = (this.viewDate && this.regexpTime.test(this.viewTime));
      }
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  toggle() {
    this.opened = !this.opened;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent]
})
export class DatePickerModule { }
