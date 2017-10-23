import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HospedagemService } from '../../providers/hospedagem/hospedagem';
import { HomePage } from '../home/home';
import { HospedagemPage } from '../hospedagem/hospedagem';

/**
 * Generated class for the Editahosp page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editahosp',
  templateUrl: 'editahosp.html',
})
export class EditahospPage {


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public hospService: HospedagemService,
              public toastCtrl: ToastController,
              ) {

  }

  showToast() {
    const toast = this.toastCtrl.create({
      message: 'Hospedagem Editada com Sucesso!!',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  public editarHospedagem(hosp, nome, descricao, endereco, email) {

    hosp = this.navParams.data;

    this.hospService.editaHospedagem(hosp, nome, descricao, endereco, email)
    .subscribe(
      (hospedagem:any) => { 
        hospedagem;
        this.showToast();
        
      },
      (erros) => {
        console.log('Erros', erros);
      })

    this.navCtrl.pop();
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Editahosp');
  }

}
