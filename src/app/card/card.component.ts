import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  link:string = 'www.tazkty.com/473847'
  constructor(){}
onCopy():void{
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Copied to Clipoard",
    showConfirmButton: false,
    timer: 1500
  });
}
}
