import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataAccessService} from '../shared/data-access.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataAccessService: DataAccessService) {}

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
