import { Injectable } from '@angular/core';
import { Singer } from '../models/singer.model';

@Injectable({
  providedIn: 'root'
})
export class SingerService {
  private singer: Singer;

  constructor() {
    this.singer = new Singer(
      'Soy exelente cantando',
      'Patricia',
      19,
      'Female',
      '21-2Street'
    );
   }

   getSinger(): Singer{
    return this.singer;
   }

   findDied(): string{
    return this.singer.findDied();
  }

    testimonyS(): string{
    return this.singer.testimonyS();
  }

}
