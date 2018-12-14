import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
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

  @ViewChild('username') userid;
  @ViewChild('password') pwd;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // signIn(){
  //   if(this.userid.value == 'admin' && this.pwd.value == '1234'){
  //     console.log("Login successful!!");
  //     let alert  = this.alertCtrl.create({
  //       title: 'Info!',
  //       subTitle: "Login successful",
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }
  // }

  alert(message){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.userid.value, this.pwd.value).then(data=>{
      this.alert("Login successful!!");
    }).catch(error=>{
      this.alert(error.message);
    })
  }

}
