import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Hobbies, userModel } from 'src/app/model/user.model';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  datas: any;
  hobbyList = Hobbies;
  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams['id'];

    this.route.queryParams.subscribe(qp => {
      this.userId = qp['id'];
    });

  }
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private servicesService: ServicesService) { }
  data: any;
  loadFormDataToLocalStorage() {
    this.user =
      JSON.parse(localStorage.getItem(this.userId?.toString() ?? "") ?? "{}");
    // console.log(user);

    this.hobbyList.forEach(h => {
      if (this.user.hobby[h] == undefined) {
        this.user.hobby[h] = false
      }
    })

    let tmp: userModel = this.user;
    this.deleteId(tmp);
    this.registrationForm.setValue(tmp);
    // this.registrationForm.setValue(Object.keys(this.user).reduce((obj:any,key) => {
    //   if(key != 'id'){
    //     obj[key] = (this.user as any)[key];
    //   }
    //   return obj;
    // },{}));

  }

  deleteId(tmp: userModel) {
    delete tmp.id;
  }

  userId: string | undefined;
  user: userModel = {
    id: "",
    fname: "",
    mname: "",
    lname: "",
    age: 0,
    gender: "",
    hobby: {},
    company: ""
  };
  registrationForm: any = new FormGroup(
    {
      'fname': new FormControl('', [Validators.required]),
      'mname': new FormControl('', [Validators.required]),
      'lname': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'hobby': new FormGroup(this.hobbyList.reduce((acc: any, crr) => {
        acc[crr] = new FormControl(false);
        return acc;
      }, [])),
      'company': new FormControl('')
    },)

  onSubmit() {
    // localStorage.setItem('data', JSON.stringify(this.registrationForm.value))
    this.user = this.registrationForm.value;
    this.user.id = this.userId!;
    this.servicesService.setData(this.userId, this.user);
    this.router.navigate(['']);
    this.router.navigate(['/home'])
  }
  onSubmitForm() {
    this.user = this.registrationForm.value;
    this.user.id = this.userId!;
    this.servicesService.setData(this.userId, this.user);
    this.router.navigate(['']);
  }
}
