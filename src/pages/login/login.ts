import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HospedagemService } from '../../providers/hospedagem/hospedagem';
import { HospedagemPage } from '../hospedagem/hospedagem';
import { NativeStorage } from '@ionic-native/native-storage';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public autenticado = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hospService: HospedagemService,
              private nativeStorage: NativeStorage,
              private alertCtrl: AlertController,
              ) {
  }

  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Falha no Login',
      subTitle: 'Usuário não encontrado!!',
      buttons: ['Ok']
    });
    alert.present();
  }

  

  login(username, password){
    this.hospService.pegarToken(username, password)
      .subscribe(
        (data) => {
          console.log(data);
          this.navCtrl.push("HospedagemPage");         
        },
        (error) => {
          this.presentAlert();
          
        });  
  }  
  

  /*showStorage(username): Promise<any>{
    this.nativeStorage.getItem(username)
    .then((data)=>{
      
      alert(data.token);

      this.nativeStorage.setItem(username, {
        token: password,
      })
      .then(
        () => 
        this.presentAlert()
      )       
    })
    return null;
  }*/

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LoginPage');
  }

}
