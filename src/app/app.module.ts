import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { TableCellWrapperComponent } from './table-cell-wrapper/table-cell-wrapper.component';
import { ServiceClassComponent } from './service-class/service-class.component';
import {AdDirective} from './table-cell-wrapper/ad.directive';
import {ExpandedDeviceRowComponent} from './expanded-device-row/expanded-device-row.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableCellWrapperComponent,
    ServiceClassComponent,
    ExpandedDeviceRowComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  entryComponents: [
    ServiceClassComponent,
    ExpandedDeviceRowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
