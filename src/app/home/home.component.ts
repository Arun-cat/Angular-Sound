import { Component, OnInit } from '@angular/core';
import { SoundService } from '../services/sound/sound.service';
import { sounds } from '../shared/model/sound';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  //OnInit is for initialization and required to create a Page instance.
  sounds:sounds[]=[];
  constructor(private ss:SoundService, private router:ActivatedRoute) { }     //activatedrouter is for get live url

  ngOnInit(): void {
    this.router.params.subscribe(params =>{           
      //params stores the value which is currently present in activatedroute & subscribe is for if changes in observal it will run the given code in it
      if(params['searchitem'])
      this.sounds = this.ss.getAll().filter(sound => sound.name.toLowerCase().includes(params['searchitem'].toLowerCase()));
      else if(params['tag'])
      this.sounds = this.ss.getAllSoundByTag(params['tag'])
      else
      this.sounds =this.ss.getAll();
    })
  }
}