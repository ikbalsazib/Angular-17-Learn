import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  removeUrlQuery(url: string): string {
    if (url) {
      return url.replace(/\?.*/, '');
    }
    return '';
  }
}
