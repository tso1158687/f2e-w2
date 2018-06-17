import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Activity} from '../model/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: Activity;
  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getData()
    .subscribe(p => {
      // console.log(p);
     this.data = p.result.records;
     console.log(this.data);
    });
  }

}
