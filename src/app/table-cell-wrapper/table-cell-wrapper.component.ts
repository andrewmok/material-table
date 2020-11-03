import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from './ad.directive';

@Component({
  selector: 'app-table-cell-wrapper',
  templateUrl: './table-cell-wrapper.component.html',
  styleUrls: ['./table-cell-wrapper.component.scss']
})
export class TableCellWrapperComponent implements AfterViewInit {

  @ViewChild(AdDirective) adHost: AdDirective;
  @Input() data;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  updateComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as any;

    setTimeout(() => { instance.content = this.data.content; });
  }

  ngAfterViewInit(): void {
    this.updateComponent();
  }
}
