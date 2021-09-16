import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './models/user';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(user: Users[], search: string): Users[] {
    if (!user || !search) {
    return user;
  }
  return user.filter(usuario => 
    usuario.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  }
}
