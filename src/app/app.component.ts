import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

const TABLE_DATA = [
  {host: 'Apple II Computer', address: '192.168.1.17', segment: 'Home Segment', connection: '1000 Mbit/s', serviceClass: '-'},
  {host: 'Playstation 4', address: '192.168.1.19', segment: 'Home Segment', connection: '300 Mbit/s', serviceClass: '-'},
  {host: 'Xbox 360', address: '192.168.1.50', segment: 'Home Segment', connection: '450 Mbit/s', serviceClass: '-'},
  {host: 'Atari 2600', address: '10.10.1.18', segment: 'Guest Segment', connection: '160 Kbit/s', serviceClass: '-'},
  {host: 'Nintendo Entertainment System', address: '10.10.1.98', segment: 'Guest Segment', connection: '700 Mbit/s', serviceClass: '-'},
  {host: 'Commodore 64', address: '192.168.1.67', segment: 'Home Segment', connection: '10 Kbit/s', serviceClass: '-'},
  {host: 'Commodore Amiga', address: '192.168.1.78', segment: 'Home Segment', connection: '60 Mbit/s', serviceClass: '-'},
  {host: 'ZX Spectrum', address: '10.10.1.60', segment: 'Guest Segment', connection: '500 Kbit/s', serviceClass: '-'},
  {host: 'VIC 20', address: '192.168.1.10', segment: 'Home Segment', connection: '10 Kbit/s', serviceClass: '-'},
  {host: 'Sega Dreamcast', address: '192.168.1.61', segment: 'Home Segment', connection: '100 Mbit/s', serviceClass: '-'},
  {host: 'Nintendo Switch', address: '192.168.1.99', segment: 'Home Segment', connection: '1000 Mbit/s', serviceClass: '-'},
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
  public titleSource = [
    {columnDef: 'host', title: 'Host', isSortable: true},
    {columnDef: 'address', title: 'Address', isSortable: true},
    {columnDef: 'segment', title: 'Segment'},
    {columnDef: 'connection', title: 'Connection', isSortable: true, customSortFunction: speedSort},
    {columnDef: 'serviceClass', title: 'Service class'}
  ];
  public dataSource = new MatTableDataSource(TABLE_DATA);

  ngOnInit(): void {
  }
}
