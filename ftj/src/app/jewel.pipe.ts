import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'jewel'
})

export class JewelPipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        return value + " " + value.length;
    }
}
