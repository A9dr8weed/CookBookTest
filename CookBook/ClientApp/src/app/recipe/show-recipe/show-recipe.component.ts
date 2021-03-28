import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceDataService } from '../../shared/service-data.service';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit {

  RecipeList: any = [];
  RecipeListWithoutFilter: any = [];

  ModalTitle: string;
  ActivateAddEditRecComp: boolean = false;
  rec: any;

  constructor(private _service: ServiceDataService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.refreshRecipeList();
  }

  refreshRecipeList() {
    this._service.getRecipeList().subscribe(data => {
      this.RecipeList = data;

      this.RecipeListWithoutFilter = data;
    });
  }

  sortByAlphabetical() {
    this.RecipeList = this.RecipeListWithoutFilter.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      };
      if (a.title > b.title) {
        return 1;
      };
    })
  }

  addClick() {
    this.rec = {
      recipeId: 0,
      title: "",
      ingredients: "",
      createdOn: ""
    }

    this.ModalTitle = "Add Recipe";
    this.ActivateAddEditRecComp = true;
  }

  closeClick() {
    this.ActivateAddEditRecComp = false;
    this.refreshRecipeList();
  }

  editClick(item) {
    this.rec = item;
    this.ModalTitle = "Edit Recipe";
    this.ActivateAddEditRecComp = true;
  }

  deleteClick(item) {
    if (confirm("Are you sure?")) {
      this._service.deleteRecipe(item.recipeId).subscribe(data => {
        this._toastr.error("Deleted successfully", "Recipe Detail Register");
        this.refreshRecipeList();
      });
    }
  }
}
