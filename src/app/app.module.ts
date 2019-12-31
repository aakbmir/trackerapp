// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
//import { ExcelService } from './services/excel.service';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

//routes
import { appRoutes } from './routes';
import { UserService } from './services/user.service';
import { AccountService } from './services/account.service';
import { ConfirmationDialogService } from './services/confirmationdialog.service';
//other
import { DataTableModule } from "angular-6-datatable";
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatExpansionModule } from '@angular/material/expansion';
import { DataTableComponent } from './data-table/data-table.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    FooterComponent,
    NavbarComponent,
    AccountSummaryComponent,
    RegisterComponent,
    SignUpComponent,
    DataTableComponent,
    ViewAccountComponent,
    AdminViewComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    DataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule.forRoot()

  ],
  providers: [
    AuthGuard,
    UserService,
    AccountService,
    ConfirmationDialogService
  ],
  
  entryComponents: [ DialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
