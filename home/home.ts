import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') userid;
  @ViewChild('password') pwd;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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

  openLogin(){
    this.navCtrl.push(LoginPage);
  }
  openRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
