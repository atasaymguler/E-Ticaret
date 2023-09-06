import { Component } from '@angular/core';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { Form, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService,ProductService]
})
export class ProductAddForms1Component {

  constructor(private categoryService: CategoryService, private productService: ProductService, private alertifyService : AlertifyService) {
    this.categories = []
  }
  model: Product = new Product();

  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })

  }

  add(form: NgForm) {

    this.productService.addProduct(this.model).subscribe(data =>{
      this.alertifyService.success(data.name + " Başarıyla Eklendi.")
    })


    // this.productService.addProduct(form.value).subscribe(data => {
    //   this.alertifyService.success(data.name+ " Başarıyla Eklendi")
    //  })

  }

}