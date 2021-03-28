import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceDataService } from './shared/service-data.service';
import { RecipeComponent } from './recipe/recipe.component';
import { ShowRecipeComponent } from './recipe/show-recipe/show-recipe.component';
import { AddEditRecipeComponent } from './recipe/add-edit-recipe/add-edit-recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShowIngredientComponent } from './ingredient/show-ingredient/show-ingredient.component';
import { AddEditIngredientComponent } from './ingredient/add-edit-ingredient/add-edit-ingredient.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ShowRecipeComponent,
    AddEditRecipeComponent,
    IngredientComponent,
    ShowIngredientComponent,
    AddEditIngredientComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
    { path: '', redirectTo: '/ingredient', pathMatch: 'full' },
    { path: 'recipe', component: RecipeComponent },
    { path: 'ingredient', component: IngredientComponent }
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [ServiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
