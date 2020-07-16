import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserDetails={email:"",password:""};
  constructor(private productService : ProductService, private router:Router ) { }
  loginUser()
  {
    this.productService.loginUser(this.loginUserDetails)
    .subscribe(
      res=>{
        localStorage.setItem('token',res["token"])
        alert("Login Successful")
        this.router.navigate(['/'])
      },
      err=>{console.log(err)
      alert("Invaid username or password")
      }
    )
  }
  ngOnInit(): void {
  }

}
