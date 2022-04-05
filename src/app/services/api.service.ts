import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Posts} from '../modules/user/posts.interface'
import {Post} from '../modules/user/post.interface'
import {HttpClient} from '@angular/common/http'
import {Response} from '../modules/user/response.interface'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getAllPost():Observable<Posts[]>{
    let direction = this.url;
    return this.http.get<Posts[]>(direction);
   }
  getSinglePost(id:any):Observable<Post>{
    let direction = this.url +"/"+id;
    return this.http.get<Post>(direction);
  }
  putPost(form:Post):Observable<Response>{
    let direction = this.url+"/"+form.id;
    return this.http.put<Response>(direction,form);
  }
}
