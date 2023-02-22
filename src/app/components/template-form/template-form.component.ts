import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hobbies } from 'src/app/model/user.model';
import { userModel } from 'src/app/model/user.model';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  hobbyList=Hobbies;

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams['id'];
    if (this.servicesService.isUserExist(this.userId!)){
      this.user = this.servicesService.getData(this.userId!)!;
    }

    this.route.queryParams.subscribe(qp=> {
      this.userId = qp['id'];
      if (this.servicesService.isUserExist(qp['id'])){
        this.user = this.servicesService.getData(qp['id'])!;
      }
    });
  }
  constructor(private router:Router,private route:ActivatedRoute, private servicesService:ServicesService){
    // userId = route.snapshot.queryParams['id'];
    console.log(localStorage.getItem('data'));
    // if(servicesService.getData("data") != -1){
    //   this.user = JSON.parse( localStorage.getItem('data') ?? "{}");
    // }
  }

  userId : string | undefined;
  user : userModel  = {
    id:"",
    fname:"",
    mname:"",
    lname:"",
    age:0,
    gender:"",
    hobby:{},
    company:""
  };
 onSubmit(){

 }

 
 onSubmission(){
  //  localStorage.setItem('data',JSON.stringify(this.user));
   
  //  this.router.navigate(['/reactive-form'])

  this.user.id = this.userId!;
    this.servicesService.setData(this.userId,this.user);
    this.router.navigate(['/reactive-form'],{queryParamsHandling: 'preserve'})
 }
}
