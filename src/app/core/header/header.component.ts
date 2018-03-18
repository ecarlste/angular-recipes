import { HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DataAccessService } from '../../shared/data-access.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataAccessService: DataAccessService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataAccessService.storeRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataAccessService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
