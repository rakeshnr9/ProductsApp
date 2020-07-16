import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
title:String = "Edit Product";
p_id="";
  constructor(private _route:ActivatedRoute, private productService: ProductService,private router: Router) { }
  editItem = new ProductModel(null,null,null,null,null,null,null,null);
  ngOnInit() : void {
    this._route.params.subscribe(params =>{
      this.p_id = params['p_id'];
    });
    this.productService.editProduct(this.p_id).subscribe((data)=>{
      this.editItem=JSON.parse(JSON.stringify(data));
      //console.log(data);
      // console.log(this.editItem);                 
    });
  }
UpdateProduct(){
  this.productService.updateProduct(this.editItem);
  console.log("called");
    // console.log(this.productItem);
    alert("Updated Successfully");
    this.router.navigate(['/']);
}
}