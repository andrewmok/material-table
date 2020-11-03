import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ServiceClassComponent} from './service-class/service-class.component';
import * as _ from 'lodash';
import {ExpandedDeviceRowComponent} from './expanded-device-row/expanded-device-row.component';

const TABLE_DATA = [
  {host: 'Apple II Computer', address: '192.168.1.17', segment: 'Home Segment', connection: '1000 Mbit/s', speedLimit: '1000 Mbit/s'},
  {host: 'Playstation 4', address: '192.168.1.19', segment: 'Home Segment', connection: '300 Mbit/s', serviceClassNumber: 1, speedLimit: '100 Mbit/s'},
  {host: 'Xbox 360', address: '192.168.1.50', segment: 'Home Segment', connection: '450 Mbit/s', serviceClassNumber: 2},
  {host: 'Atari 2600', address: '10.10.1.18', segment: 'Guest Segment', connection: '160 Kbit/s', serviceClassNumber: 3, speedLimit: '100 Mbit/s'},
  {host: 'Nintendo Entertainment System', address: '10.10.1.98', segment: 'Guest Segment', connection: '700 Mbit/s', serviceClassNumber: 4, speedLimit: '150 Kbit/s'},
  {host: 'Commodore 64', address: '192.168.1.67', segment: 'Home Segment', connection: '10 Kbit/s', serviceClassNumber: 5},
  {host: 'Commodore Amiga', address: '192.168.1.78', segment: 'Home Segment', connection: '60 Mbit/s', serviceClassNumber: 6, speedLimit: '650 Mbit/s'},
  {host: 'ZX Spectrum', address: '10.10.1.60', segment: 'Guest Segment', connection: '500 Kbit/s'},
  {host: 'VIC 20', address: '192.168.1.10', segment: 'Home Segment', connection: '10 Kbit/s', serviceClassNumber: 1},
  {host: 'Sega Dreamcast', address: '192.168.1.61', segment: 'Home Segment', connection: '100 Mbit/s'},
  {host: 'Nintendo Switch', address: '192.168.1.99', segment: 'Home Segment', connection: '1000 Mbit/s', serviceClassNumber: 5},
];

const speedSort = (data: Array<any>, direction: string) => {
  return data.sort((a, b) => {
    const [speedA, valueA] = a.connection.split(' ');
    const [speedB, valueB] = b.connection.split(' ');

    if (direction === 'asc') {
      if (valueB === valueA) {
        return speedA - speedB;
      }

      return valueA < valueB ? -1 : 1;
    }

    if (valueB === valueA) {
      return speedB - speedA;
    }

    return valueA > valueB ? -1 : 1;
  });
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public expandedComponent = ExpandedDeviceRowComponent;
  public titleSource = [
    {columnDef: 'host', title: 'Host', isSortable: true},
    {columnDef: 'address', title: 'Address', isSortable: true},
    {columnDef: 'segment', title: 'Segment'},
    {columnDef: 'connection', title: 'Connection', isSortable: true, customSortFunction: speedSort},
    {columnDef: 'serviceClass', title: 'Service class', isComponent: true}
  ];
  public dataSource = null;

  ngOnInit(): void {
    const dataSource = _.map(TABLE_DATA, row => ({
      ...row,
      serviceClass: {component: ServiceClassComponent, content: {classNumber: row.serviceClassNumber, limit: row.speedLimit}}
    }));

    this.dataSource = new MatTableDataSource(dataSource);
  }
}
