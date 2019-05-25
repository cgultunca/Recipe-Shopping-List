import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Recipe test desc', 'https://cdn.pixabay.com/photo/2016/06/16/01/41/egg-1460404_1280.jpg'),
    new Recipe('Test Recipe2', 'Recipe test desc2', 'https://cdn.pixabay.com/photo/2016/06/16/01/41/egg-1460404_1280.jpg')

  ]

  constructor() { }

  ngOnInit() {
  }

}
