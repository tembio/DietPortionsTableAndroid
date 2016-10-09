import { Component } from '@angular/core';

import { DietPortions } from '../diet-portions/diet-portions';
import { RemainingPortions } from '../remaining-portions/remaining-portions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RemainingPortions;
  tab2Root: any = DietPortions;

  constructor() {

  }
}
