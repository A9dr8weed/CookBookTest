import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../shared/service-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private _service: ServiceDataService) { }

  ngOnInit() {
  }
}
