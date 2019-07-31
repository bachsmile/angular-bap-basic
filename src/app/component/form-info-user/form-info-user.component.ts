import { User } from './../../class/user';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-info-user',
  templateUrl: './form-info-user.component.html',
  styleUrls: ['./form-info-user.component.scss']
})
export class FormInfoUserComponent implements OnInit {
  arr_info:User= new User();
  Authorities;
  constructor(private loginservice:LoginService) { }

  ngOnInit() {
    let user={
      username:window.sessionStorage.getItem('user')
    };
    // console.log(JSON.stringify(user));
    this.loginservice.getInfoUser(JSON.stringify(user)).subscribe(res=>{
      this.arr_info.firstname=res.data[0].Firstname;
      this.arr_info.lastname=res.data[0].Lastname;
      this.arr_info.email=res.data[0].Email;
      this.arr_info.telephone=res.data[0].Phone;
      this.arr_info.username=res.data[0].Username;
      this.arr_info.Subscribe=res.data[0].Subcrice;
      this.arr_info.password=res.data[0].Password;
      this.Authorities=res.data[0].Authorities;
      console.log(res.data[0]);
      console.log(this.arr_info);
    })
  }
  onSubmit(){}
}
