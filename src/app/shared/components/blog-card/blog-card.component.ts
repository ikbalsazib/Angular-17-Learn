import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Blog} from '../../../interfaces/blog';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {

  @Input({required: true}) data: Blog;

}
