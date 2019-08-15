import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { data } from './pokemon.data';
import { Criteria } from './filter/criteria.model';
import { BgType } from './filter/type.model';
import { bgTypes } from './filter/type.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listPokemons: Pokemon[];
  types: BgType[];
  bgt: String;

  ngOnInit(): void {
    this.listPokemons = data;
    this.types = bgTypes;
  }

  backgroundType(criteria: Criteria): string {
    this.types = bgTypes.filter((bgType: BgType) => this.isType(criteria, bgType));
    
    return this.types[0].img;
  }

  isType(criteria: Criteria, bgType: BgType): boolean {
    const thisType = !criteria || criteria.type === bgType.type;
    return thisType;
  }

  filterList(criteria: Criteria) {
    this.listPokemons = data.filter((pokemon: Pokemon) => this.futurData(criteria, pokemon));
    this.bgt = this.backgroundType(criteria);
    console.log(this.bgt);
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