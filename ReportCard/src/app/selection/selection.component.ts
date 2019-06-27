import { Component, OnInit } from '@angular/core';
import {IYear} from '../IYear';
// import {IReport} from '../IReport';
import { ReportService } from '../report.service';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  selectedyear: any = "Year";
  selectedbatch: any ="Batch";
  selectedtest: any ="Test";
  hello: any = "year and batch";
  batchlist: string[];
  testlist: string[];
  returnlist: string[];
  private years:IYear[];
  // private report=IReport[];
  // returndata: any={ 'year': this.selectedyear, 'batch': this.selectedbatch, 'test': this.selectedtest};

  


  

  constructor(private reportservice:ReportService ) { }

  ngOnInit() {
    this.reportservice.getList().subscribe(data => {this.years=data;
    console.log(this.years)});

    //  this.reportservice.getReport( this.returndata).subscribe(data => {this.report=data;
    //    console.log(this.report)});

   

  }

  selectOption(id: number) {
    //getted from binding
    console.log(this.selectedyear);

    if(this.selectedyear == 2019){
      this.batchlist = ['MSAU1', 'MSAU2'];
    }
    if(this.selectedyear == 2018){
      this.batchlist =['MSAU1', 'MSAU2'];
    }

    if(this.selectedbatch == "MSAU1"){
      this.testlist = ['week1','week2'];
    }
    if(this.selectedbatch == "MSAU2"){
      this.testlist = ['week1','week2'];
    }
   
   
  }
}
