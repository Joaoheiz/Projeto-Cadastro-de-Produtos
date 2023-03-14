import { HeaderService } from './../../components/template/header/header.service';
 import { Component } from '@angular/core';
 import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos', 
      icon: 'storefront', 
      routeURL: '/products'
    }
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
