import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { API } from '../../providers/homeserveApi'

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  providers: [API]
})
export class ModalPage {

  public deployment: any;
  public keys: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public api: API) {
    this.loadDeployment()
  }

  ionViewDidLoad() {

  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  public loadDeployment(){
    this.api.load('deployments/' + this.navParams.get('message'))
      .then(dataDeployment => {
        this.deployment = dataDeployment;
        console.log(this.deployment)
        this.keys = Object.keys(this.deployment);
      })
  }

}
