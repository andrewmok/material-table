import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

const TABLE_DATA = [
  {id: 1, name: 'Jonh Doe', type: 1, address: 'Vice city, Little Havana st, h. 5', email: 'john@mail.com', phone: '555-3456'},
  {id: 2, name: 'Claude Speed', type: 2, address: 'Liberty City, Vicita Gardens dr., h. 7', email: 'claude@mail.com', phone: '555-5678'},
  {id: 3, name: 'Carl Jonhson', type: 1, address: 'Los Santos, Groove st., h. 3', email: 'cj@mail.com', phone: '555-7777'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public titleSource = [
    {columnDef: 'id', title: 'Person id'},
    {columnDef: 'name', title: 'Name'},
    {columnDef: 'type', title: 'Type'},
    {columnDef: 'address', title: 'Address'},
    {columnDef: 'email', title: 'Email'},
    {columnDef: 'phone', title: 'Phone'}
  ];
  public dataSource = new MatTableDataSource(TABLE_DATA);

  ngOnInit(): void {
  }
}
