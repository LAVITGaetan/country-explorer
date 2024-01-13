import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryApiService } from 'src/app/services/country-api.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private apiService: CountryApiService) { }
  countries: any
  renderedCountries: any
  filteredCountries: any
  regions = ['africa', 'asia', 'america', 'europe', 'oceania']

  searchTag = new FormControl('')
  ngOnInit() {
    this.apiService.getAllCountries().subscribe(data => {
      this.countries = data
      this.renderedCountries = data
    })
  }

  changeRegion(region: string) {
    this.apiService.getCountriesByRegion(region).subscribe(data => {
      this.countries = data
      this.renderedCountries = data
      this.searchTag.setValue('')
    })
  }

  searchByName() {
    let text = this.searchTag.value || ''
    this.renderedCountries = this.countries.filter(
      (countries: any) => countries?.name.common.toLowerCase().includes(text.toLowerCase())
    );
  }

}
