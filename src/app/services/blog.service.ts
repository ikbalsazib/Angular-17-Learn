import { Injectable } from '@angular/core';
import {Blog} from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = [];

  constructor() { }

  getAllBlog(): Blog[] {
    return [...this.blogs];
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog);
    console.log('this.blogs', this.blogs)
  }

  deleteBlog(_id: string) {
    const fIndex = this.blogs.findIndex(f => f._id === _id);
    this.blogs.splice(fIndex, 1);
  }
}
