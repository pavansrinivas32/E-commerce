import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: any;
  count: any = 1;
  incr: any;
  decr: any;
  login: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id::::::::::::' + id);
    this.login = JSON.stringify(localStorage.getItem('log'));
    console.log("k::::"+this.login);
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;
    });
  }

  inc() {
    let co = this.count;
    console.log('before::::::' + co);
    this.count = ++co;
    console.log('after:::::' + this.count);
  }

  dec() {
    let co = this.count;
    console.log('before::::::' + co);
    this.count = --co;
    console.log('after:::::' + this.count);
  }

  addToCart(product: any): void {
    const logdata = this.login
    console.log("log:::"+logdata);
    if (
      this.login === false ||
      this.login === null ||
      this.login === undefined ||
      this.login === ''
    ) {
      console.log(":::"+this.login);
      this.routes.navigate(['/login']);
      return;
    } else {
      const datastr = product;
      // console.log(object);
      let input = {
        id: datastr.id,
        description: datastr.description,
        image: datastr.image,
        name: datastr.name,
        price: datastr.price,
        count: this.count,
      };
      localStorage.setItem('cart', JSON.stringify(input));
      this.routes.navigate(['/cart']);
    }

    // this.cartService.addToCart(product);
    // alert('Product added to cart!');
  }
}
