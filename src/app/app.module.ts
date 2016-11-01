import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DietPortions } from '../pages/diet-portions/diet-portions';
import { Options } from '../pages/options/options';
import { Intro } from '../pages/intro/intro';
import { RemainingPortions } from '../pages/remaining-portions/remaining-portions';
import { PortionsTable } from '../Components/PortionsTable/portions-table';
import { IsNullPipe } from '../Pipes/is-null.pipe';
import { VegetablesPipe } from '../Pipes/vegetables.pipe';
import { PortionsTableService } from '../Services/portions-table.service'; 


@NgModule({
  declarations: [
    MyApp,
    DietPortions,
    Intro,
    RemainingPortions,
    PortionsTable,
    IsNullPipe,
    VegetablesPipe,
    Options
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Intro,
    RemainingPortions,
    DietPortions,
    Options,
  ],
  providers: [PortionsTableService]
})
export class AppModule {}
