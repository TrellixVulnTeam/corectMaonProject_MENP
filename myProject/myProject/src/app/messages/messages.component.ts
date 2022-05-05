import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Messages } from "../classes/Messages";
import { User } from "../classes/Users";
import { MessagesService } from "../services/messages.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  messagesTo: Messages[];
  messagesFrom: Messages[];
  user: User;
  constructor(private messageService: MessagesService) {
    // this.user = <IUser>this.tokenStorage.getUser().user;
  }

  ngOnInit(): void {
    this.user = <User>JSON.parse(localStorage.getItem('user'));
    this.getAll();
  }
  openDialog(message?: Message) {

  }
  delete(mesageId) {
    Swal.fire({
      title: 'האם את/ה בטוח/ה?',
      text: "האם את/ה בטוח/ה שאת/ה רוצה למחוק את ההודעה הנוכחית?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    
      confirmButtonText: 'כן',
      cancelButtonText: 'לא',
    }).then((result) => {
      if (result.isConfirmed) {
        this.messageService.delete(mesageId).subscribe((x) => {
          this.messageService.getMessagesByFrom(this.user.userId).subscribe((x) => {
            this.messagesFrom = x;
          });

        });
      }
    })


  }
  getAll() {
    this.messageService.getMessagesByTo(this.user.userId).subscribe((x) => {
      this.messagesTo = x;
    });
    this.messageService.getMessagesByFrom(this.user.userId).subscribe((x) => {
      this.messagesFrom = x;
    });
  }
}
