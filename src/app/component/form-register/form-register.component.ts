import { ProductService } from 'src/app/service/product.service';
import { Product } from './../../class/product';
import { LoginService } from './../../service/login.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/class/user';
import { HttpClient } from '@angular/common/http';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  @Output() sent= new EventEmitter();
  counter=false;
  profileForm: FormGroup;
  infoUser:FormGroup;
  compares = false;
  alert=false;
  submitted=false;
  user: User= new User();
  prod:Product= new Product();
value=[];
//load file
error: string;
userId: number = 1;
form: FormGroup;
  uploadResponse = { status: '', message: '', filePath: '' };
  success;
  /////
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
  constructor(private fb: FormBuilder, private loginservice:LoginService, private productservice:ProductService,
    private formBuilder: FormBuilder,
    private upload: UploadService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.modal();
    this.form = this.formBuilder.group({
      avatar: [""]
    });
  }
  onSubmit(){
    //uploadimg
    const formData = new FormData();
     formData.append('user_profile', this.form.get('avatar').value);
     this.upload.upload(formData, this.userId).subscribe(
       res =>{this.uploadResponse = res;
        if(this.uploadResponse.message=='100'){
          this.success='Success';
        }
       console.log(this.uploadResponse.message)} ,
       err => {this.error = err}
     );
  }
  onSubmit1(){
    this.submitted = true;
  }
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
  register1() {
    console.log(JSON.stringify(this.prod));
   this.productservice.create(JSON.stringify(this.prod)).subscribe(res=>{
     console.log(res);
     if(res.message==='Success'){
      alert("Chúc mừng bạn đa đăng kỳ thành công");
        this.counter=true;
      this.sent.emit(this.counter);
     }
   })


  }
  register() {
    this.user.firstname=this.profileForm.value.infoUser.firstName;
    this.user.lastname=this.profileForm.value.infoUser.lastName;
    this.user.email=this.profileForm.value.infoUser.email;
    this.user.telephone=this.profileForm.value.infoUser.telephone;
    this.user.username=this.profileForm.value.infoUsername.username;
    this.user.password=this.profileForm.value.infoPassword.password;
    this.user.Subscribe=this.profileForm.value.subscribe;
   this.loginservice.create(JSON.stringify(this.user)).subscribe(res=>{
     console.log(res);
     if(res.message==='Success'){
      alert("Chúc mừng bạn đa đăng kỳ thành công");
      document.getElementById('myModal').style.display="none";
        this.counter=true;
      this.sent.emit(this.counter);
     }
   })
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }
}
