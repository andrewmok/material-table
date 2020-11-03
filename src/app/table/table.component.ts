import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as _ from 'lodash';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface ColumnHeaderData {
  columnDef: string; // column ID
  title: string; // title to display
  isSortable?: boolean;
  customSortFunction?: (data: Array<any>, direction: 'asc') => Array<any>;
  isComponent?: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() titleSource: Array<ColumnHeaderData>;
  @Input() isExpandable: boolean;
  @Input() expandedComponent: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: Array<string>;
  public columnsToDisplay: Array<string>;
  public activeElement = null;
  public expandedData = null;

  constructor() { }


  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public expandRow(row): void {
    this.activeElement = this.activeElement === row ? null : row;
    this.expandedData = {component: this.expandedComponent, content: row};
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const defaultSort = this.dataSource.sortData;

    this.dataSource.sortData = (data: any, sort: MatSort) => {
      const active = sort.active;
      const direction = sort.direction;
      const columnSource = _.find(this.titleSource, {columnDef: active});
      const customSortFunction = _.get(columnSource, 'customSortFunction', null);

      if (direction) {
        return customSortFunction ? customSortFunction(data, direction) : defaultSort(data, sort);
      }

      return data;
    };
  }

  ngOnInit(): void {
    this.displayedColumns = this.titleSource.map((column) => column.columnDef);
    this.columnsToDisplay = this.displayedColumns.slice();
  }
}

