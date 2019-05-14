import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessagesRoutingModule } from "./messages-routing.module";
import { MessageListComponent } from "./message-list/message-list.component";
import { MessageNewComponent } from "./message-new/message-new.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MessagesModule {}
