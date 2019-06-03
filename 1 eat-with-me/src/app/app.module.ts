import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentComponent } from './comment/comment.component';
import { MessageComponent } from './message/message.component';
import { ProfilComponent } from './profil/profil.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommentComponent,
    MessageComponent,
    ProfilComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
