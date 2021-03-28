import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceDataService } from '../../shared/service-data.service';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.css']
})
export class AddEditRecipeComponent implements OnInit {

  @Input() rec: any;
  RecipeId: string;
  Title: string;
  Ingredient: string;
  CreatedOn: Date;

  IngredientsList: any = [];

  constructor(private _service: ServiceDataService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.loadIngredientList();
  }

  loadIngredientList() {
    this._service.getAllIngredientNames().subscribe((data: any) => {
      this.IngredientsList = data;

      this.RecipeId = this.rec.recipeId;
      this.Title = this.rec.title;
      this.Ingredient = this.rec.ingredient;
      this.CreatedOn = this.rec.createdOn;
    });
  }

  addRecipe() {
    var val = {
      recipeId: this.RecipeId,
      Title: this.Title,
      CreatedOn: this.CreatedOn,
      Ingredient: this.Ingredient
    };

    this._service.addRecipe(val).subscribe(res => {
      this._toastr.success("Added successfully", "Recipe Detail Register");
    });
  }

  updateRecipe() {
    var val = {
      recipeId: this.RecipeId,
      title: this.Title,
      createdOn: this.CreatedOn,
      ingredient: this.Ingredient
    };

    this._service.updateRecipe(val).subscribe(res => {
      this._toastr.info("Update successfully", "Recipe Detail Register");
    });
  }
}
