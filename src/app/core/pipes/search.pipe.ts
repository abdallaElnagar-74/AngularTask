import { Pipe, PipeTransform } from '@angular/core';
import { clients } from '../interfaces/passengers';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(clients:clients[],term:string): clients[] {
    return clients.filter((item)=>item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
