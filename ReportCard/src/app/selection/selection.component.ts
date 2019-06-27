import { Component, OnInit } from '@angular/core';
import {IYear} from '../IYear';
import { ReportService } from '../report.service';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  private years:IYear[];
  constructor(private reportservice:ReportService ) { }

  ngOnInit() {
    this.reportservice.getList().subscribe(data => {this.years=data;
    console.log(this.years)});
  }

}
