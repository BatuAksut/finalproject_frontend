import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { VatAddedPipe } from "../../pipes/vat-added.pipe";
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    VatAddedPipe,
    FilterPipePipe,
    ToastrModule // Modülün konfigürasyonunu burada yapıyoruz
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  // Düzeltme: styleUrl yerine styleUrls kullanılmalı
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
  ) {}

  products: Product[] = [];
  dataLoaded = false;
  filterText = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(product: Product) {
    this.toastrService.toastrConfig.positionClass="toast-bottom-right"
    this.toastrService.success("Sepete eklendi",product.productName)
    this.cartService.addToCart(product)
  }
}
