import {
  Component, OnInit, ViewChild, ElementRef,
  EventEmitter, Output
} from '@angular/core';
import { Friend } from '../friend.model';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {
  inputInfo: Friend = new Friend('', '', '');

  @ViewChild('inputContact') inputContact: ElementRef;
  @Output() friendAdded = new EventEmitter<Friend>();

  constructor() { }

  ngOnInit() {
  }

  onAddFriend(inputEmail: HTMLInputElement) {
    console.log('Add Friend', this.inputInfo);
    console.log('inputEmail', inputEmail.value);
    console.log('inputContact', this.inputContact.nativeElement.value);

    this.friendAdded.emit(new Friend(
      this.inputInfo.name,
      inputEmail.value,
      this.inputContact.nativeElement.value
    ));
  }

}
