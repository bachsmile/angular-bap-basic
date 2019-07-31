import { ProductService } from './../../service/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/class/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {
  profileForm: FormGroup;
  infoUser:FormGroup;
  compares = false;
  alert=false;
  @Input() user:Array<any>;
  @Input() prod:Array<any>;
value=[];
  get infoUserControl(): FormGroup {
    return this.profileForm.get("infoUser") as FormGroup;
  }
  get inforPasswordControl(): FormGroup {
    return this.profileForm.get("infoPassword") as FormGroup;
  }
  get inforUsernameControl(): FormGroup {
    return this.profileForm.get("infoUsername") as FormGroup;
  }
  get firstNameControl(): FormControl {
    return this.infoUserControl.get("firstName") as FormControl;
  }
  get lastNameControl(): FormControl {
    return this.infoUserControl.get("lastName") as FormControl;
  }
  get emailNameControl(): FormControl {
    return this.infoUserControl.get("email") as FormControl;
  }
  get telephoneControl(): FormControl {
    return this.infoUserControl.get("telephone") as FormControl;
  }
  //infoUsername
  get usernameControl(): FormControl {
    return this.inforUsernameControl.get("username") as FormControl;
  }
  //infoPassword
  get passwordControl(): FormControl {
    return this.inforPasswordControl.get("password") as FormControl;
  }
  get passwordConfirmControl(): FormControl {
    return this.inforPasswordControl.get("passwordConfirm") as FormControl;
  }
  constructor(private fb: FormBuilder, private loginservice:LoginService, private producrservice:ProductService) { }

  ngOnInit() {
    document.getElementById('loadx').style.display='none';
    this.modal();
  }
  onSubmit(){
    console.log(this.infoUser.value);
  }
  onSubmit2(){}
  compare(event: KeyboardEvent) {
    this.compares =
      this.passwordConfirmControl.value === this.passwordControl.value
        ? true
        : false;
    console.log(this.compares);
  }
  modal() {
    this.profileForm = this.fb.group({
      infoUser: this.fb.group({
        firstName: ["", [Validators.required, Validators.minLength(8)]],
        lastName: ["", [Validators.required, Validators.minLength(8)]],
        email: [
          "",
          [Validators.required, Validators.minLength(8), Validators.email]
        ],
        telephone: ["", [Validators.required, Validators.minLength(8)]]
      }),
      infoPassword: this.fb.group({
        password: ["", [Validators.required, Validators.minLength(8)]],
        passwordConfirm: ["", [Validators.required, Validators.minLength(8)]]
      }),
      infoUsername: this.fb.group({
        username: ["", [Validators.required, Validators.minLength(8)]],
      }),
      subscribe: "yes"
    });
  }
  update(){
    console.log(JSON.stringify(this.user[0]));
    this.loginservice.updateIF(JSON.stringify(this.user[0])).subscribe(res=>{
      console.log(res);
    })
    document.getElementById('loadx').style.display='block';
    setTimeout(function(){
      document.getElementById('loadx').style.display='none';
    }, 1000);
  }
  update2(){
    console.log(JSON.stringify(this.prod[0]));
    this.producrservice.updateIF(JSON.stringify(this.prod[0])).subscribe(res=>{
      console.log(res);
    })
    document.getElementById('loadx').style.display='block';
    setTimeout(function(){
      document.getElementById('loadx').style.display='none';
    }, 1000);
  }
  reset(){

  }
}
