import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import { Scores } from '../../app/Scores';
import arrScore from '../../app/arrayScore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  goToBaord(home,away)
  {

    if(home==away)
    {
      const confirm = this.alertCtrl.create({
        title: 'Check The Teams',
        message: home+' Team name cannot be the same as '+away+' Team name',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.setRoot(HomePage);
            }
          }
        ]
      });
      confirm.present();

    }
    else{

      const confirm = this.alertCtrl.create({
        title: 'Check The Teams',
        message: 'Are these the correct detaile of the teams  '+home+' and '+away+'?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              let obj = new Scores(home,away);
              arrScore.push(obj)
              console.log(arrScore)
              this.navCtrl.setRoot(ScorePage);
            }
          },
          {
            text: 'No',
            handler: () => {
              this.navCtrl.setRoot(HomePage);
            }
          }
        ]
      });
      confirm.present();

    }
      
    }  
  }

