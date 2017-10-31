import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HospedagemService } from '../../providers/hospedagem/hospedagem';
import { EditahospPage } from '../editahosp/editahosp';
import { FormularioPage } from '../formulario/formulario';
import { NativeStorage } from '@ionic-native/native-storage';


/**
 * Generated class for the Hospedagem page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hospedagem',
  templateUrl: 'hospedagem.html',
})
export class HospedagemPage {
  public hospedagens: any [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public hospService: HospedagemService, 
              public toastCtrl:ToastController,
              public alertCtrl: AlertController,
              public nativeStorage: NativeStorage,
              ){
  }

  showAlert(hosp, nome) {
    let confirm = this.alertCtrl.create({
      title: 'Excluir',
      message: 'Deseja realmente apagar ' + nome + "?",
      buttons: [
        {
          text: 'sim',
          handler: data => {
            this.excluirHospedagem(hosp);           
          }
        },
        {
          text: 'Não',
          handler: () => {       
          }
        }
      ]
    });
    confirm.present();
  }

  showToast() {
    const toast = this.toastCtrl.create({
      message: 'Hospedagem Excluida com Sucesso!!',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }



  public getHospAll() {
    
    this.hospService.getAllHospedagem()
    .subscribe(
      (hospedagens) => {
        this.hospedagens = hospedagens.lista;
      },
      (erros) => {
        console.log('Error', erros);
      }
    )
  }

  public editarHosp(hosp) {
    this.navCtrl.push("EditahospPage", hosp);  
  }

  public excluirHospedagem(hosp) {
    this.hospService.removeHospedagem(hosp)
    .subscribe(
      (hospedagem:any) => {
            hospedagem;
            this.showToast();
            this.getHospAll();
      },
      (erros) => {
        console.log('Erros', erros);
      });   
  }

  public showStorage() {
    this.nativeStorage.getItem('token')
    .then(
      data => alert(data),
      error => console.error(error)
    );
  }
  
  ionViewDidLoad() {
    
    this.getHospAll();
    console.log('ionViewDidLoad Hospedagem');
  }

  private cadastraHospedagem(nome, descricao, endereco, email){
    this.navCtrl.push('FormularioPage');
  }

  

}
