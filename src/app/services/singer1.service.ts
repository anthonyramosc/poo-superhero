import { Injectable } from '@angular/core';
import { Singer } from '../models/singer.model';

@Injectable({
  providedIn: 'root'
})
export class Singer1Service {
  private singer: Singer;

  constructor() { 
    this.singer = new Singer(
      'Me gusta cantar',
      'Patrick',
      19,
      'Traba',
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
