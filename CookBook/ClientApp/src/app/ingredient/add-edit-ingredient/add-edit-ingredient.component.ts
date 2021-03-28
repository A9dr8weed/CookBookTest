import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceDataService } from '../../shared/service-data.service';

@Component({
  selector: 'app-add-edit-ingredient',
  templateUrl: './add-edit-ingredient.component.html',
  styleUrls: ['./add-edit-ingredient.component.css']
})
export class AddEditIngredientComponent implements OnInit {

  @Input() ing: any;
  IngredientId: string;
  Title: string;

  constructor(private _service: ServiceDataService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.IngredientId = this.ing.ingredientId;
    this.Title = this.ing.title;
  }

  addIngredient() {
    var val = {
      IngredientId: this.IngredientId,
      Title: this.Title
    };

    this._service.addIngredient(val).subscribe(res => {
      this._toastr.success("Added successfully", "Ingredient Detail Register");
    });
  }

  updateIngredient() {
    var val = {
      ingredientId: this.IngredientId,
      title: this.Title
    };

    this._service.updateIngredient(val).subscribe(res => {
      this._toastr.info("Update successfully", "Ingredient Detail Register");
    });
  }
}
