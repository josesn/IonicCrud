import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HospedagemService } from '../../providers/hospedagem/hospedagem';

/**
 * Generated class for the Formulario page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public hospService: HospedagemService) {
  }

  public criaHospedagem(nome, descricao, endereco, email) {
    this.hospService.adicionaHospedagem(nome, descricao, endereco, email)
            .subscribe(
              (hospedagem:any) => {
                hospedagem;
              },
              (erros) => {
                console.log('Error', erros);
              }
            )
            this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formulario');
  }

}
