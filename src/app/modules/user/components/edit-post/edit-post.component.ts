import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Post} from '../../post.interface';
import {Response} from '../../response.interface';
import {ApiService} from '../../../../services/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor( private router: Router, private activeRouter: ActivatedRoute, private apiService: ApiService) { }

  dataPost: Post | undefined;
  editForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    id: new FormControl(''),
  });
  ngOnInit(): void {
    let postId = this.activeRouter.snapshot.paramMap.get('id');
    //console.log(postId);
    this.apiService.getSinglePost(postId).subscribe(data =>{
      this.dataPost = data;
      //console.log(this.dataPost);
      this.editForm.setValue({
        'title' : this.dataPost.title,
        'body' : this.dataPost.body,
        'id' : this.dataPost.id
       })
      //  console.log(this.editForm.value);
    });
  }
  postForm(form:Post){
    this.apiService.putPost(form).subscribe(data=>{
      let a:Response = data;
      console.log(a.response);
    });
  }
}
