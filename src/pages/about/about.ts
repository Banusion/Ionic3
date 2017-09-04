import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { IonicPage } from 'ionic-angular'
import { PeopleServiceProvider } from '../../providers/people-service';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [PeopleServiceProvider]
})
export class AboutPage {

  public people: any;

  constructor(public navCtrl: NavController,public peopleService: PeopleServiceProvider) {
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
      .then(data => {
        this.people = data;
      });
  }
}
