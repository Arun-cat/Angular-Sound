import { Component, OnInit } from '@angular/core';
import { SoundService } from '../services/sound/sound.service';
import { Tag } from '../shared/model/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[]=[];

  constructor(private ss:SoundService) { }

  ngOnInit(): void {
    this.tags = this.ss.getAllTag();
  }

}
