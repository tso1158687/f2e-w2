import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Activity } from '../model/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: Activity;
  filterKeyword: any;
  constructor(
    private service: DataService,
  ) { }

  ngOnInit() {
    this.service.getData()
      .subscribe(p => {
        // console.log(p);
        this.filterKeyword = this.service.getFilterKeyword();
        console.log(this.filterKeyword);
        p.result.records.forEach(e => {
          if (e.Ticketinfo.length === 0) {
            e.Ticketinfo = '未提供';
          }
        });
        this.data = p.result.records;
        console.log(this.data);
      });

  }

}
