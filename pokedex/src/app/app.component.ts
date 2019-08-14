import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { data } from './pokemon.data';
import { Criteria } from './filter/criteria.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listPokemons: Pokemon[];

  ngOnInit(): void {
    this.listPokemons = data;
  }

  filterList(criteria: Criteria) {
    this.listPokemons = data.filter((pokemon: Pokemon) => this.futurData(criteria, pokemon));
    console.log(criteria);
  }

  futurData(criteria: Criteria, pokemon: Pokemon): boolean {
    
    const pokemonId = parseInt(pokemon.id, 10);
    const criteriaId = parseInt(criteria.id, 10);

    const isOkById = !criteria.id || pokemonId === criteriaId;
    const isOkByName = !criteria.name || pokemon.name.toLowerCase().indexOf(criteria.name.toLowerCase()) !== -1;
    const isOkByType = !criteria.type || pokemon.type.indexOf(criteria.type) !== -1;

    return isOkById && isOkByName && isOkByType;
  }
}