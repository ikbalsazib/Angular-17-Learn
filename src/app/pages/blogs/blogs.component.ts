import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {BlogCardComponent} from '../../shared/components/blog-card/blog-card.component';
import {MatIconModule} from '@angular/material/icon';
import {Blog} from '../../interfaces/blog';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, MatButtonModule, BlogCardComponent, MatIconModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {

  isLoading: boolean = true;
  private readonly blogService = inject(BlogService);
  blogs: Blog[] = [];

  ngOnInit() {

    setTimeout(() => {
      this.blogs = this.blogService.getAllBlog();
      this.isLoading = false;
    }, 2000)

  }


  onAddBlog() {
    const blog: Blog = {
      _id: '1',
      name: 'Test Blog 1',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      author: 'Md Iqbal Hossen',
      profileImg: 'https://i.ibb.co/Gngcxtb/278074216-2191605287668743-8083855920363774301-n.jpg',
      image: 'https://i.ibb.co/pRbpQJN/close-up-still-life-hard-exams-1.jpg'
    }

    this.blogService.addBlog(blog);
    this.blogs = this.blogService.getAllBlog();
  }
}
