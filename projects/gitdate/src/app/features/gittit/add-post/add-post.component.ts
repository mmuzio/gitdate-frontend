import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SubgittitModel } from '../subgittit/subgittit.response';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { SubgittitService } from '../subgittit/subgittit.service';
import { throwError } from 'rxjs';
import { AddPostPayload } from './add-post.payload';

@Component({
  selector: 'ngrxtmp-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  postPayload: AddPostPayload;
  subgittits: Array<SubgittitModel>;

  constructor(
    private router: Router,
    private postService: PostService,
    private subgittitService: SubgittitService
  ) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subgittitName: ''
    };
  }

  ngOnInit() {
    this.addPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subgittitName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subgittitService.getAllSubgittits().subscribe(
      data => {
        this.subgittits = data;
      },
      error => {
        throwError(error);
      }
    );
  }

  addPost() {
    this.postPayload.postName = this.addPostForm.get('postName').value;
    this.postPayload.subgittitName = this.addPostForm.get(
      'subgittitName'
    ).value;
    this.postPayload.url = this.addPostForm.get('url').value;
    this.postPayload.description = this.addPostForm.get('description').value;

    this.postService.addPost(this.postPayload).subscribe(
      data => {
        this.router.navigateByUrl('/');
      },
      error => {
        throwError(error);
      }
    );
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}
