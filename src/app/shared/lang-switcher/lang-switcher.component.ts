import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'lang-switcher',
  templateUrl: './lang-switcher.component.html'
})
export class LangSwitcherComponent {

  public supportedLanguages: Array<ILang> =
  [
    { code: 'nl', title: 'Nederlands' },
    { code: 'en', title: 'English' }
  ];

  public currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
  }

  changeLang(event: any) {
    this.translate.use(event.target.value);
  }
}

interface ILang {
  code: string;
  title: string;
}
