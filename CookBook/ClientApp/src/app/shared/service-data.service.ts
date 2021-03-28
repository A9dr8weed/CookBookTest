import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  readonly APIUrl = "https://localhost:5001/api";

  constructor(private _http: HttpClient) { }

  // Методи для роботи з таблицею Ingredient
  getIngredientList(): Observable<any[]> {
    return this._http.get<any>(this.APIUrl + '/ingredient');
  }

  addIngredient(val: any) {
    return this._http.post(this.APIUrl + '/ingredient', val);
  }

  updateIngredient(val: any) {
    return this._http.put(this.APIUrl + '/ingredient', val);
  }

  deleteIngredient(val: any) {
    return this._http.delete(this.APIUrl + '/ingredient/' + val);
  }

  // Методи для роботи з таблицею Recipe
  getRecipeList(): Observable<any[]> {
    return this._http.get<any>(this.APIUrl + '/recipe');
  }

  addRecipe(val: any) {
    return this._http.post(this.APIUrl + '/recipe', val);
  }

  updateRecipe(val: any) {
    return this._http.put(this.APIUrl + '/recipe', val);
  }

  deleteRecipe(val: any) {
    return this._http.delete(this.APIUrl + '/recipe/' + val);
  }

  getAllIngredientNames(): Observable<any[]> {
    return this._http.get<any[]>(this.APIUrl + '/recipe/GetAllIngredientNames');
  }
}
