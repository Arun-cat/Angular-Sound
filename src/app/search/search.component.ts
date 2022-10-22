import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchitem:string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {  //initialization
    //params stores the value which is currently present in activatedroute & subscribe is for if changes in observal it will run the given code in it
    this.route.params.subscribe(params =>{
      if(params['searchitem'])
      this.searchitem = params['searchitem'];
    })
  }
  search(): void{            //method created to nav via url
    if(this.searchitem)
    this.router.navigateByUrl('/search/'+this.searchitem)
  }

}
