import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expanded-device-row',
  templateUrl: './expanded-device-row.component.html',
  styleUrls: ['./expanded-device-row.component.scss']
})
export class ExpandedDeviceRowComponent implements OnInit {
  @Input() content: any;

  constructor() { }

  ngOnInit(): void {}
}
