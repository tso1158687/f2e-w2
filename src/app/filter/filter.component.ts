import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  districts: any;
  constructor() {}

  ngOnInit() {
    this.districts = [
      '桃源區',
      '那瑪夏區',
      '茂林區',
      '六龜區',
      '甲仙區',
      '杉林區',
      '美濃區',
      '旗山區',
      '內門區',
      '田寮區',
      '阿蓮區',
      '路竹區',
      '湖內區',
      '茄萣區',
      '永安區',
      '岡山區',
      '燕巢區',
      '彌陀區',
      '橋頭區',
      '梓官區',
      '楠梓區',
      '大社區',
      '大樹區',
      '仁武區',
      '左營區',
      '旗山區',
      '鳥松區',
      '三民區',
      '新興區',
      '前金區',
      '鹽埕區',
      '苓雅區',
      '鳳山區',
      '前鎮區',
      '旗津區',
      '大寮區',
      '小港區',
      '林園區'
    ];
  }
  applyFilter(dist) {
    console.log(dist);
  }
}
