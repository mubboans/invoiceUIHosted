import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-history-page-download',
  templateUrl: './history-page-download.component.html',
  styleUrls: ['./history-page-download.component.scss']
})
export class HistoryPageDownloadComponent implements OnInit {
  historyData:any[];
  todayDate =new Date();
  
  length:number
  constructor(public invoiceService : InvoiceService,private messageService: MessageService) { }

  ngOnInit(): void {
 
    this.getData();
  }
  downloadFile(fileUri: string) {
    window.open(fileUri, '_blank');
  }
  deleteArchieve(data){
    this.invoiceService.deleteInvoiceArchieve(data._id).subscribe((x:any)=>{
      if (x.succes){
          this.messageService.add({severity:'error', summary: 'Deleted Successfull', detail: 'Deleted', life: 3000});
       this.getData();
    }
    } )
  }
  getDisableStats(status:string){
    if(status == 'Pending'){
      return true
    }
    else{
      return false;
    }
  }
getData(btn?:any){

  this.invoiceService.getInvoiceHistoryArchieve().subscribe((x:any)=>{
    if (x){
      if(btn =='refresh'){
        this.messageService.add({severity:'info', summary: 'Already up-to-date', detail: 'Success', life: 3000});
      }
      this.historyData = x.data;
  }
    
  })
}
}
