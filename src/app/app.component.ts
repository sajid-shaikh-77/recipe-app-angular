import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LogginService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private logginServices: LogginService
  ) {}
  ngOnInit(): void {
    this.authService.autoLogin();
    this.logginServices.printLog('Hellow');
  }
}
