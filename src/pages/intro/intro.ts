import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemainingPortions } from '../remaining-portions/remaining-portions';

@Component({
  selector: 'intro',
  templateUrl: 'intro.html'
})
export class Intro {

  constructor(public navCtrl: NavController) {}

  slides = [
    {
      title: "¡Bienvenido!",
      description: 'Esta aplicación te ayudará a llevar la cuenta de porciones diarias de la Dieta Sostenble.<br/>Hay dos tipos de tablas: <span class="diario">tabla diario</span> y <span class="dieta">tabla dieta</span>',
      image: "assets/DosTablas.png",
      doubleWidthImage: true
    },
    {
      title: "Tabla Dieta",
      description: 'La primera vez que inicies la aplicación, copia en esta tabla las porciones de tu dieta. Cada día la <span class="diario">tabla de diario</span> se inicializará con lo que pongas aquí. ',
      image: "assets/TablaDieta.png",
    },
    {
      title: "Tabla Diario",
      description: 'Al principio de cada día esta tabla tendrá todas las porciones que hayas puesto en la <span class="dieta">tabla de dieta</span>,  deberás restar porciones conforme comes.<br>Al final del día debería quedar vacía.',
      image: "assets/TablaDiario.png",
    },
    {
      title: "Añadir y quitar porciones",
      description: "Para añadir una porción en la tabla haz una <b>pulsación larga</b> en la posición donde quieras añadir una porción.<br/> Si quieres quitar porciones, haz una <b>pulsación corta</b>.",
    }
  ];

  goToDiet() {
    this.navCtrl.setRoot(RemainingPortions);
  }
}
