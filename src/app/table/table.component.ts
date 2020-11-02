import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

interface ColumnHeaderData {
  columnDef: string; // column ID
  title: string; // title to display
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() titleSource: Array<ColumnHeaderData>;

  public displayedColumns: Array<string>;
  public columnsToDisplay: Array<string>;

  constructor() { }


  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    console.log(this.dataSource);

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.displayedColumns = this.titleSource.map((column) => column.columnDef);
    this.columnsToDisplay = this.displayedColumns.slice();
  }
}

