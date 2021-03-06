import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LocalStorageService } from 'src/app/config/local-storage.service';
import { LogoutComponent } from 'src/app/modules/authentication.module';
import { UserAuthenticateModel } from 'src/app/modules/authentication.module/models/user.authenticate.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: UserAuthenticateModel;
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.currentUser = this.localStorageService.getCurrentUser();
  }
  
}
