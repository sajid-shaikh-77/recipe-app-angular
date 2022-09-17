import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSab: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSab = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user, '!user');
      console.log(!!user, '!!user');
    });
  }
  onSaveData() {
    this.dataStorageService.storedRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  ngOnDestroy(): void {
    this.userSab.unsubscribe();
  }
}
