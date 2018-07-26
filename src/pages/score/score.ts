import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import arrScore from '../../app/arrayScore';

import {Away} from '../../app/Away';
import {Home} from '../../app/Home';
import arrAway from '../../app/AwayArray';
import arrHome from '../../app/HomeArray';
/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  score=arrScore;
  

  team;
  homescore=0;
  awayscore=0;
  trypoint=5;
  penalty=3;
  conve=2;
  index;
  data;
  ind;

  scorebox(number){
    this.team=number;
 
   }

addNumber(number)
{

  if(this.team==1){
    if(number==5)
    {
      this.homescore+=this.trypoint;
      this.data = new Home(this.trypoint);
       arrHome.push(this.data);
       console.log(arrHome);
     
    }
    else if(number==3)
    {
      this.homescore+=this.penalty;
      this.data = new Home(this.penalty);
       arrHome.push(this.data);
       console.log(arrHome);
    }
    else if(number==2)
    {
      this.homescore+=this.conve;
      this.data = new Home(this.conve);
       arrHome.push(this.data);
       console.log(arrHome);
    }
   
  }
  else if(this.team==2){
    if(number==5)
    {
      this.awayscore+=this.trypoint;
       this.data = new Away(this.trypoint);
      arrAway.push(this.data);
      console.log(this.data);
      
    }
    else if(number==3)
    {
      this.awayscore+=this.penalty;
      this.data = new Away(this.penalty);
      arrAway.push(this.data);
      console.log(arrAway);
    }
    else if(number==2)
    {
      this.awayscore+=this.conve;
      this.data = new Away(this.conve);
      arrAway.push(this.data);
      console.log(arrAway);
    }
  }
}

descreseNumber(number)
{
  if(this.team == 1){
    if(number==5)
    {
     for(var i=0;i<arrHome.length;i++)
     {
       if(arrHome[i].points == 5)
       {
          this.ind =i;
          arrHome.splice(this.ind,1);
          this.homescore-=this.trypoint;
          break;
       }

     }
      console.log(this.ind);

      if(this.homescore < 0){
        this.homescore = 0;
      }
    }
    else if(number==3)
    {
         for(var b=0;b<arrHome.length;b++)
     {
       if(arrHome[b].points == 3)
       {
          this.ind =b;
          arrHome.splice(this.ind,1);
          this.homescore-=this.penalty;
          break;
       }
     }
      
      console.log(this.ind);
      if(this.homescore < 0){
        this.homescore = 0;
      }
    }
    else if(number==2)
    {
      for(var c=0;c<arrHome.length;c++)
      {
        if(arrHome[c].points == 2)
        {
           this.ind =c;
           arrHome.splice(this.ind,1);
           this.homescore-=this.conve;
           break;

        }
      }
       
       console.log(this.ind);
      if(this.homescore < 0){
        this.homescore = 0;
      }
    }
   
  }
  else
  {

    if(number==5)
    {
      for(var x=0;x<arrAway.length;x++)
      {
        if(arrAway[x].points == 5)
        {
           this.ind =x;
           arrAway.splice(this.ind,1);
           this.awayscore-=this.trypoint;
           break;

        }
      }
      console.log(arrAway);
      if(this.awayscore < 0){
        this.awayscore = 0;
      }
    }
    else if(number==3)
    {
      for(var a=0;a<arrAway.length;a++)
      {
        if(arrAway[a].points == 3)
        {
        this.ind =a;
        arrAway.splice(this.ind,1);
        this.awayscore-=this.penalty;
        }
      }
      console.log(arrAway);
      if(this.awayscore < 0){
        this.awayscore = 0;
      }
    }
    else if(number==2)
    {
      
      
      for(var e=0;e<arrAway.length;e++)
      {
        if(arrAway[e].points == 2)
        {
          this.ind =e;
          arrAway.splice(this.ind,1);
          this.awayscore-=this.conve;
        }
      }
      console.log(arrAway);
      if(this.awayscore < 0){
        this.awayscore = 0;
      }
    }
  }
}

 reset()
 {
  this.homescore=0;
  this.awayscore=0;

  this.score.splice(0,1);
  arrAway.splice(0);
  arrHome.splice(0);
  if(this.homescore==0 && this.awayscore==0)
  {
      this.navCtrl.setRoot(HomePage);
  }
 }

 }

