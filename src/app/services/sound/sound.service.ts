import { Injectable } from '@angular/core';    
import { sounds } from 'src/app/shared/model/sound';
import { Tag } from 'src/app/shared/model/Tag';
@Injectable({                              // needed to use dependencies(services)
  providedIn: 'root'
})
export class SoundService {

  constructor() { }
  
  getAllTag():Tag[]{               //method for tags
    return[
      { name: 'All',count:8},      // name and count are declared in shared\model\tag.ts
      { name: 'best',count:4},
      { name: 'average',count:5},
      { name: 'ok ok',count:2},
    ];
  }
  
  getAllSoundByTag(tag:string) :sounds[]{
    return tag == "All" ?
      this.getAll() :this.getAll().filter(sound => sound.tags?.includes(tag));      // filter is for subset of an array
  }

  getAll():sounds[]{               //method for values 
    return[
      {
        id:1,                      //values of the variables declared in the shared\model\sound.ts
        price:400,
        name: 'Sony rock1',
        like:false,
        iu :'/assets/a-1.jpg',
        available:40,
        runtime:60,
        drivers:2, 
        tags: ['sony','honey','average','all'],
      },
      {
        id:2,
        price:300,
        name: 'Apple Shocks',
        like:true,
        iu :'/assets/a-2.jpg',
        available:35,
        runtime:75,
        drivers:3, 
        tags: ['apple','appleheadphones','best','all'],
      },
      {
        id:3,
        price:350,
        name: 'leaf dances',
        like:false,
        iu:'/assets/a-3.jpg',
        available:15,
        runtime:45,
        drivers:1, 
        tags: ['leaf','leafheadphones','best'],
      },
      {
        id:4,
        price:457,
        name: 'skullcandy sleeps',
        like: false,
        iu:'/assets/a-4.jpg',
        available:25,
        runtime:45,
        drivers:2, 
        tags: ['skullcandy','skullcandyheadphones','average','ok ok'],
      },
      {
        id:5,
        price:660,
        name: 'Jbl shouts',
        like:false,
        iu:'/assets/a-5.jpg',
        available:55,
        runtime:60,
        drivers:3, 
        tags: ['jbl','jblheadphones','average'],
      },
      {
        id:6,
        price:299,
        name: 'Mivi cracks',
        like:false,
        iu:'/assets/a-6.jpg',
        available:2,
        runtime:35,
        drivers:1, 
        tags: ['mivi','miviheadphones','average','ok ok'],
      },
      {
        id:7,
        price:299,
        name: 'Boat',
        like:true,
        iu:'/assets/a-7.jpg',
        available:50,
        runtime:35,
        drivers:1, 
        tags: ['boat','boatheadphones','best'],
      },
      {
        id:9,
        price:500,
        name: 'Noise shuts',
        like:false,
        iu:'/assets/a-9.jpg',
        available:25,
        runtime:45,
        drivers:1, 
        tags: ['noise','noiseheadphones','best','average'],
      }
    ]
  }
}
