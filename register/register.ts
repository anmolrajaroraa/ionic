import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') userid;
  @ViewChild('password') pwd;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.userid.value, this.pwd.value).then(data=>{
      this.alert("Registeration successful!!");
    }).catch(error=>{
      this.alert(error.message);
    })
  }

}
