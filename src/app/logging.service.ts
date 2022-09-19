import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogginService {
  lastlog: string;
  constructor() {}

  printLog(message: string) {
    console.log(message);

    console.log(this.lastlog);
    this.lastlog = message;
  }
}
