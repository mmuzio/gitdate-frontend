import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { GittitRoutingModule } from './gittit-routing.module';

import { GittitComponent } from './gittit/gittit.component';
import { ControlsComponent } from './controls/controls.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    GittitComponent,
    ControlsComponent,
    PostsComponent,
    PostComponent,
    AddPostComponent
  ],
  imports: [CommonModule, SharedModule, GittitRoutingModule]
})
export class GittitModule {}
