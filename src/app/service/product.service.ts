import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  loginSub: Subject<String>= new Subject();
  watcher: Observable<any>=this.loginSub.asObservable();
  constructor(private apiService:ApiService) { }
  update(){
    this.loginSub.next();
  }
  getProd():Observable<any>{
    return this.apiService.get('sanpham/read.php');
  }
  create(data):Observable<any>{
    return this.apiService.post('sanpham/create.php',data);
  }
  delete(id){
    return this.apiService.post('sanpham/delete.php',id);
  }
  updateIF(data){
    return  this.apiService.post('sanpham/update.php',data);
  }
}
