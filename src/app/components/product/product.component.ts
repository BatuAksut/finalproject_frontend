import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { response } from 'express';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent{
  constructor(private productService:ProductService){
  
  }
 
  products:Product[]=[];
  dataLoaded=false;
  ngOnInit():void{
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded=true;
    });
  }
}
