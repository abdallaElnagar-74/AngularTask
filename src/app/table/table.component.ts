import { Component } from '@angular/core';
import { clients } from '../core/interfaces/passengers';
import { FileSaverService } from 'ngx-filesaver';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  name:string = ''
  checked:boolean = true
  ticket:clients[]=[
    {
      id : 1,
     name:'أحمد محمود',
     ticketNumber:'C-101',
     price:20,
     cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
     noOfPersons:1,
     noOfSelling:"مره واحدة",
     ticket:'',
     phone:'01062417381',
     photo:'./assets/man.svg'
    },
    {
      id : 2,
      name:'محمود فاروق',
      ticketNumber:'C-102',
      price:10,
      cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      noOfPersons:2,
      noOfSelling:"مرتين",
      ticket:'',
      phone:'01118280221',
      photo:'./assets/man2.svg'
    },
    {
      id : 3,
     name:'محمد الغريب',
     ticketNumber:'C-103',
     price:30,
     cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
     noOfPersons:1,
     noOfSelling:"مرتين",
     ticket:'',
     phone:'01254789637',
     photo:'./assets/man.svg'
    },
    {
      id : 4,
     name:'محمد توفيق',
     ticketNumber:'C-104',
     price:60,
     cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
     noOfPersons:3,
     noOfSelling:"مره واحدة",
     ticket:'',
     phone:'01115783664',
     photo:'./assets/man2.svg'
    },
    {
      id : 5,
     name:'محمدامين',
     ticketNumber:'C-105',
     price:25,
     cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
     noOfPersons:3,
     noOfSelling:"مره واحدة",
     ticket:'',
     phone:'01115783664',
     photo:'./assets/man2.svg'
    },
    {
      id : 6,
     name:'محمد ايهاب',
     ticketNumber:'C-106',
     price:36,
     cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
     noOfPersons:3,
     noOfSelling:"ثلاث مرات",
     ticket:'',
     phone:'01115783664',
     photo:'./assets/man.svg'
    },
    {
      id : 7,
     name:'احمد توفيق',
     ticketNumber:'C-107',
     price:60,
     cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
     noOfPersons:3,
     noOfSelling:"مرتين",
     ticket:'',
     phone:'01115783664',
     photo:'./assets/man2.svg'
    },
  ]
  p: number = 1;
  constructor(private _FileSaverService:FileSaverService){}
  pageChanged(e:any){
    this.p =e
  }
  downloadImage() {
    const imageUrl = './assets/ticket.pdf'; // Image URL in your project (or any URL)
    const fileName = 'ticket.pdf'; // File name for downloaded image

    // Fetch the image file as a Blob
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Use ngx-filesaver to trigger the download
        this._FileSaverService.save(blob, fileName);
      })
      .catch(error => console.error('Error downloading the image', error));
  }
}
