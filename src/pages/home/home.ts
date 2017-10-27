import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HospedagemPage } from '../hospedagem/hospedagem';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public abrirHospedagens() {
    this.navCtrl.push('HospedagemPage');
  }

  public abrirLogin() {
    this.navCtrl.push('LoginPage');
  }

}
