import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { FriendAddComponent } from './friend/friend-add/friend-add.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    FriendAddComponent,
    FriendListComponent,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
