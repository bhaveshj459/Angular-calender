import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();
  constructor() {}

  ngAfterContentInit(): void {
    const active = this.tabs.filter((tab) => tab.active);
    if (!active || active.length == 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => (tab.active = false));
    tab.active = true;
    return false;
  }

  selectClass(tab: TabComponent) {
    if (tab.active) {
      return 'hover:text-white text-white bg-indigo-400';
    } else {
      return 'hover:text-indigo-400';
    }
  }
}
