import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-class',
  templateUrl: './service-class.component.html',
  styleUrls: ['./service-class.component.scss']
})
export class ServiceClassComponent implements OnInit {
  @Input() content: any;

  public readonly SERVICE_CLASS_SYMBOLS = {
    1: '&#9312;',
    2: '&#9313;',
    3: '&#9314;',
    4: '&#9315;',
    5: '&#9316;',
    6: '&#9317;'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
