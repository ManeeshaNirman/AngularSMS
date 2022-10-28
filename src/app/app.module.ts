import { APP_INITIALIZER, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { LkrFormatterPipe } from './shared/lkr-formatter.pipe';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateStudentsGuard } from './students/create-students.guard';
import {initializeKeycloak} from './auth/app.init';
import { AuthGuard } from './auth/keycloack.guard';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    LkrFormatterPipe,
    ProgressBarComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    RouterModule.forRoot([

      {path:'students',component:StudentsComponent},
      {path:'students/:id',component:StudentsComponent,canActivate:[AuthGuard]},  //,canActivate:[CreateStudentsGuard]
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      
      

    ])
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

// fav8Q~U~MrJLEJ2.0lJf40osmTcbnGUqsO8Nddy