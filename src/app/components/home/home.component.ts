import { Component, OnInit,  inject } from '@angular/core';
import { HousingLocation } from 'src/app/housinglocation';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private houseService : HousingService) { }


  ngOnInit(): void {
    this.getAllHousing()
  }

  housingLocationList: HousingLocation[] = []
  filteredLocationList: HousingLocation[] = [];

  getAllHousing () : void {
   this.housingLocationList = this.houseService.getAllHousingLocations();
   this.filteredLocationList = this.housingLocationList;
  }

  filterResults (text : string) {
    if(!text)
    { 
      this.filteredLocationList = this.housingLocationList
      return;
    }
  
      this.filteredLocationList = this.housingLocationList.filter (x => x.city.toLowerCase().includes(text.toLowerCase()))    
  }

}


