import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: any;
  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getData()
    .subscribe(p => {
     this.data = p;
     console.log(p);
    });
  }

}
