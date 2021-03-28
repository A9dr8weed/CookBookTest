import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceDataService } from '../../shared/service-data.service';

@Component({
  selector: 'app-show-ingredient',
  templateUrl: './show-ingredient.component.html',
  styleUrls: ['./show-ingredient.component.css']
})
export class ShowIngredientComponent implements OnInit {

  IngredientList: any = [];

  ModalTitle: string;
  ActivateAddEditIngComp: boolean = false;
  ing: any;

  IngredientIdFilter: string = "";
  TitleFilter: string = "";
  IngredientListWithoutFilter: any = [];

  constructor(private _service: ServiceDataService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.refreshIngredientList();
  }

  refreshIngredientList() {
    this._service.getIngredientList().subscribe(data => {
      this.IngredientList = data;

      this.IngredientListWithoutFilter = data;
    });
  }

  filterFunction() {
    var IngredientIdFilter = this.IngredientIdFilter;
    var TitleFilter = this.TitleFilter;

    this.IngredientList = this.IngredientListWithoutFilter.filter(function (el) {
      return el.ingredientId.toString().toLowerCase().includes(
        IngredientIdFilter.toString().trim().toLowerCase()
      ) &&
      el.title.toString().toLowerCase().includes(
        TitleFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop, asc) {
    this.IngredientList = this.IngredientListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      };
    })
  }

  sortByAlphabetical() {
    this.IngredientList = this.IngredientListWithoutFilter.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      };
      if (a.title > b.title) {
        return 1;
      };
    })
  }

  addClick() {
    this.ing = {
      ingredientId: 0,
      title: ""
    }

    this.ModalTitle = "Add Ingredient";
    this.ActivateAddEditIngComp = true;
  }

  closeClick() {
    this.ActivateAddEditIngComp = false;
    this.refreshIngredientList();
  }

  editClick(item) {
    this.ing = item;
    this.ModalTitle = "Edit Ingredient";
    this.ActivateAddEditIngComp = true;
  }

  deleteClick(item) {
    if (confirm("Are you sure?")) {
      this._service.deleteIngredient(item.ingredientId).subscribe(data => {
        this.refreshIngredientList();

        this._toastr.error("Deleted successfully", "Ingredient Detail Register");
      },
        err => {
          console.log(err);
        }
      );
    }
  }
}
