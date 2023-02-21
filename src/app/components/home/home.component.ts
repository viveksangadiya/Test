import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {Validators} from '@angular/forms'
import { Router,ParamMap,ActivatedRoute} from '@angular/router';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 constructor(private router:Router,private route:ActivatedRoute){}

//  val:number;
   ngOnInit(): void {
      
   }
  data:any;
  userNumber:any=new FormGroup(
    {
      number: new FormControl('',[Validators.required])
    }
  )
   onSubmit(val:any){
    this.router.navigate(['template-form/',val]);
   }
   
   onClick(val:any){
    // const id=this.userNumber.form.get('number').value;
    const id=this.userNumber.value['number'];
    console.log("id",id);
    this.router.navigate(['template-form/'],{queryParams:{id:id}});



    let res= localStorage.setItem('data',JSON.stringify(this.userNumber.value));

      console.log(res);
   }
}
