import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from "./components/navi/navi.component";
import { ProductComponent } from "./components/product/product.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CategoryComponent, NaviComponent, ProductComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string= "Northwind";
  user:string="Batuhan Aksüt";
  
}


