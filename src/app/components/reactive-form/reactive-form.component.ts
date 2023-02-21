import { Component,OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  datas: any;

  ngOnInit(): void {
    
    this.datas=JSON.parse(localStorage.getItem('') ?? "{}");
    console.log(this.datas);
  }

  
onLoadApi() {
  // JSON.parse( localStorage.getItem('data') ?? "{}")
//  this.registrationForm.setValue({
//   userName : 'vivek',
//   passWord : 'vivek',
//   confirmPassword:'vivek',
//   address : (
//     {
//       city:'vivek',
//       state:'vivek',
//       country:'vivek'
//     }
//   )
//  })
}

constructor(private fb:FormBuilder,private router:Router){}
data:any;
  saveFormDataToLocalStorage(){
    const user =
    JSON.parse( localStorage.getItem('data') ?? "{}")
    ;
    console.log(user);
    this.registrationForm.setValue(user);
  }
  registrationForm : any=this.fb.group(
     {
      fname : [''],
      mname : [''],
      lname : [''],
      text : [''],
      age:[''],
      gender : [''],
      hobby:[''],
      company:['']
    },)

    onSubmission(){
      localStorage.setItem('data',JSON.stringify(this.registrationForm.value));
      this.router.navigate(['/home'])
    }
    onSubmit(){
      localStorage.setItem('data',JSON.stringify(this.registrationForm.value))
    }
}
