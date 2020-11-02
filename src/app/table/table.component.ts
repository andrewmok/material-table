import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as _ from 'lodash';

interface ColumnHeaderData {
  columnDef: string; // column ID
  title: string; // title to display
  isSortable?: boolean;
  customSortFunction?: (data: Array<any>, direction: 'asc') => Array<any>;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() titleSource: Array<ColumnHeaderData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: Array<string>;
  public columnsToDisplay: Array<string>;

  constructor() { }


  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortData = (data: any, sort: MatSort) => {
      const active = sort.active;
      const direction = sort.direction;
      const columnSource = _.find(this.titleSource, {columnDef: active});
      const customSortFunction = _.get(columnSource, 'customSortFunction', null);

      if (customSortFunction && direction) {
        return customSortFunction(data, direction);
      }

      return data;
    };
  }

  ngOnInit(): void {
    this.displayedColumns = this.titleSource.map((column) => column.columnDef);
    this.columnsToDisplay = this.displayedColumns.slice();
  }
}

