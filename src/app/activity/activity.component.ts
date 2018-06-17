import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activity: any;
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getActivity();
  }
  getActivity() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.data.getData()
      .subscribe(p => {
        p.result.records.forEach(e => {
          if (e.Ticketinfo.length === 0) {
            e.Ticketinfo = '未提供';
          }
        });
        this.activity = p.result.records[id - 1];
        console.log(this.activity);
      });
  }

}
