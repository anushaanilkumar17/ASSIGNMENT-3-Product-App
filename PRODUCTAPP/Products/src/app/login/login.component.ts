import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import {CredentialModel} from '../signup/credential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredential=<any>{}
  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log('Successfully Logged In');
    console.log(this.userCredential);
    this.usersService.login(this.userCredential)
    .subscribe((credential)=>{
      if(credential===null)
      {
        console.log("Incorrect Email Id & Password!!");
        this.router.navigate(['/login']);
      }
      else
      {
          console.log("Correct Email Id & Password!!");
        this.router.navigate(['/']);
      }
    })
  }
}

