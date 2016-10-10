import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DietPortions } from '../pages/diet-portions/diet-portions';
import { RemainingPortions } from '../pages/remaining-portions/remaining-portions';
import { PortionsTable } from '../Components/PortionsTable/portions-table';
import { IsNullPipe } from '../Pipes/is-null.pipe';
import { VegetablesPipe } from '../Pipes/vegetables.pipe';

@NgModule({
  declarations: [
    MyApp,
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
  ],
  providers: []
})
export class AppModule {}
