import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
cartItems:CartItem[]=[];
constructor(private cartService:CartService,private toastrService:ToastrService){}

ngOnInit():void{
  this.getCart();
}

getCart(){
  this.cartItems=this.cartService.list();
}
removeFromCart(product:Product){
  this.cartService.removeFromCart(product);
  this.toastrService.error(product.productName+" sepetten silindi","Silindi")
}
}
