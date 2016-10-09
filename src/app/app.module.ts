import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { DietPortions } from '../pages/diet-portions/diet-portions';
import { RemainingPortions } from '../pages/remaining-portions/remaining-portions';
import { PortionsTable } from '../Components/PortionsTable/portions-table';
import { IsNullPipe } from '../Pipes/is-null.pipe';
import { VegetablesPipe } from '../Pipes/vegetables.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DietPortions,
    RemainingPortions,
    PortionsTable,
    IsNullPipe,
    VegetablesPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RemainingPortions,
    DietPortions,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
