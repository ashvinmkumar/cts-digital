import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-petowners',
  templateUrl: './petowners.component.html',
  styleUrls: ['./petowners.component.scss']
})
export class PetownersComponent implements OnInit {
  constructor(private peopleService: PeopleService) {}
  uniqueGender: any[] = [];
  animalList: any[] = [];

  /* 
  filter criteria. options cat | dog | fish
  can be read from a config file instead of hardcoding here
  change value to dog / fish for filtering dogs / fish
  */
  filter = 'cat';

  ngOnInit() {
    // service call to fetch the json data
    this.peopleService.getPeople().subscribe(list => {
      // get the unique gender from the data
      this.uniqueGender = [...new Set(list.map(item => item.gender))];
      // create the animalList
      this.animalList = this.uniqueGender
        .map(gender =>
          list
            // filter the values which do not have pets
            .filter(person => person.pets !== null)
            // filter for the gender type
            .filter(item => item.gender === gender)
            .map(person => {
              // iterate through the pets of each person
              return person.pets.filter(pet => {
                // filter the pets for type 'Cat'
                if (pet.type.toLowerCase() === this.filter) {
                  // massage the data to add gender for filtering by gender
                  pet.ownerGender = gender;
                  // return the pet names
                  return pet.name;
                }
              });
            })
        )
        // flatten the results array
        .flat(2)
        // sort the pets in ascending order
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    });
  }
}
