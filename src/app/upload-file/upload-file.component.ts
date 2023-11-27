import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  selectedFile:any
  percentage:any

  constructor(private base:BaseService){

  }

  selectFile(event:any){
    // console.log(event.target.files)
    this.selectedFile=event.target.files[0]
    this.percentage=0
  }

  uploadFile(){
    this.base.uploadFile(this.selectedFile)
    .subscribe(
      (p)=>{
        this.percentage=Math.floor(Number(p))
        console.log(this.percentage+"%")
      })
      this.selectedFile=undefined
    // console.log(this.selectedFile)
  }
}
