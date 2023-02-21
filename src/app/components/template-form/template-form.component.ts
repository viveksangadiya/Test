import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  constructor(private router:Router,private route:ActivatedRoute){
    
    // userId = route.snapshot.queryParams['id'];
    console.log(localStorage.getItem('data'));
    this.userModel = JSON.parse( localStorage.getItem('data') ?? "{}");
  }
  userModel={
    fname:"",
    mname:"",
    lname:"",
    text: "",
    age:"",
    gender:"",
    hobby:"",
    company:""
  }
 onSubmit(){

 }

 
 onSubmission(){
   localStorage.setItem('data',JSON.stringify(this.userModel));
   
   this.router.navigate(['/reactive-form'])
 }
}
