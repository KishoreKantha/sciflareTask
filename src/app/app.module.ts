//dependency modules
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


//Primeng modules imports start
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
//Primeng modules imports end

//Components import section
import { AppComponent } from './app.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { ViewUsersComponent } from './component/view-users/view-users.component';
import { accesskeyInterceptor } from './interceptor/accesskey.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    //primeNg assets start
    ButtonModule,
    ToastModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    BadgeModule,
    ConfirmPopupModule,
    DialogModule,
    InputGroupAddonModule,
    InputGroupModule
    //primeNg assets end
  ],
  providers: [MessageService, ConfirmationService, provideHttpClient(withInterceptors(
    [accesskeyInterceptor]
  ))],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
