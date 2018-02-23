import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataAccessService} from '../shared/data-access.service';
import {AuthService} from '../auth/auth.service';

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
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataAccessService.getRecipes();
  }
}
