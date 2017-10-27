import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hospService: HospedagemService,
              private nativeStorage: NativeStorage) {
  }

  login(username, password) {
    this.hospService.pegarToken(username, password)
      .subscribe(
        (data) => {
          data;
          console.log(data);
          this.nativeStorage.setItem('tokens', {token: data })
          .then(
            () => console.log('Token registrado'),
            error => console.error('Error ao registrar', error)
          );
        }
      )
      this.navCtrl.push("HospedagemPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
