import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'matchescategory' })
export class MatchesCategoryPipe implements PipeTransform {
    transform(items: Array<any>, category: string): Array<any> {
        return items.filter(item => item.category === category);
    }
}
