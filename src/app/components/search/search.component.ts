import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchData: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  search = new FormControl('');

  showSearcResult(){
  }
  onSubmit(){
    console.log();
    this.api.getSearchResult(this.search.value).subscribe((data: any) => {
      this.searchData = data.Search;
      console.log(this.searchData);

    })
  }

}
