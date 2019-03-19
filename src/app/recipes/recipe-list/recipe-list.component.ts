import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe','Simply a test',
    'https://www.leithcars.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Ford/2017/Mustang/images/2017-Ford-Mustang-01.jpg')
    ,new Recipe('A test recipe','Simply a test',
    'https://www.leithcars.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Ford/2017/Mustang/images/2017-Ford-Mustang-01.jpg')
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
