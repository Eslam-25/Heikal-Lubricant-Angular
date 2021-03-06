import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterial } from 'src/app/angular.material.module';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { RouterModule } from '@angular/router';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { SnackBarServie } from './components/snack-bar/snack-bar.service';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { HttpCleintService } from './services/http.client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from './services/http.interceptor';
import { LogoutIconComponent } from './components/logout-icon/logout-icon.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuListComponent,
    SnackBarComponent,
    DeleteDialogComponent,
    LogoutIconComponent
  ],
  imports: [
    CommonModule,
    AngularMaterial,
    RouterModule,
  ],
  entryComponents: [
    SnackBarComponent,
    DeleteDialogComponent
  ],
  providers:[
    SnackBarServie,
    HttpCleintService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}
  ],
  exports: [
    LayoutComponent
  ]
})
export class SharedModule { }
