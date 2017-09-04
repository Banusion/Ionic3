import { Component } from '@angular/core'
import { NavController} from 'ionic-angular';
import { IonicPage } from "ionic-angular"
import { API } from "../../providers/homeserveApi"
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [API]
})
export class ContactPage {

  public claims: any;
  public keys: any;
  public errorMessage: string;
  public filter: string;

  constructor(public navCtrl: NavController, public api: API, public modalCtrl : ModalController) {
    this.loadClaims('')
  }

  public openModal( res ) {
    var data = { message : res };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
  }

  public loadClaims( filter: string ){
    this.api.load('claims/' + filter)
      .then(dataClaims => {
        this.claims = dataClaims;
        this.keys = Object.keys(this.claims);
        console.log('clé:' + this.keys)
      })
  }

  items = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ];

  public itemSelected(item: any) {
    if (item.data === null)
      this.filter = ''
    else
      this.filter = '?statusGroup=' + item.data;
    console.log("Selected Item", item);
  }

  public filterAPI(item: string) {
    console.log('filter:', item)
    this.loadClaims(item)
  }
}
