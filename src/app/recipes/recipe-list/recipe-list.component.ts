import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[]= [
		new Recipe('A test Recipe', 'this is simple recipe',"https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg"),
		new Recipe('A test Recipe', 'this is simple recipe',"https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg")
];
  constructor() { }

  ngOnInit(): void {	
  }

}
