import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {Router} from '@angular/router';
import {Posts} from '../../posts.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Posts[] = [];    
  
  constructor(private api: ApiService, private router: Router) { }

 
  ngOnInit(): void {
    this.api.getAllPost().subscribe(data=>
      {
        this.posts=data;
        //console.log(data);
      });
  }

  editPost(id:any){
    this.router.navigate(['editPost',id]);
  } 
  newPost(){
    this.router.navigate(['newPost']);
  }

}
