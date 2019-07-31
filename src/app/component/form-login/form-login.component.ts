import { LoginService } from './../../service/login.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  user: User = new User() ;
  @Output() voteSize = new EventEmitter();
  counter: number = 0;
  constructor(private loginservice: LoginService,
              private router: Router
    ) { }

  ngOnInit() {

  }
  voted(event){
    this.counter ++;
    this.voteSize.emit(this.counter);
    console.log(this.counter);
  }
  onSubmit() {
    this.loginservice.login(JSON.stringify(this.user)).subscribe(
      data => {
        console.log('đăng nhập thành công');
        console.log(data.success);
        if(data.success==='true'){
          console.log(data.username);
          window.localStorage.setItem('token', data.token);
          window.sessionStorage.setItem('user',data.username);
          //window.sessionStorage.setItem('user',this.user.username.toString());
          if(data.username=='admin'){
            this.router.navigate(['/admin']);
          }
          else{
            this.router.navigate(['/home']);
          }
        }
          else{
            console.log('đăng nhập thất bại');
            console.log(data);
          }
      },
      errors => {
        console.log('đăng nhập thất bại');
      }
    );
  }

}
