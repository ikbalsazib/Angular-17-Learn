import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage, provideImgixLoader} from '@angular/common';
import {Gallery} from '../../interfaces/gallery.interface';
import {ImgCtrlPipe} from '../../shared/pipes/img-ctrl.pipe';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ImgCtrlPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [
    provideImgixLoader(environment.ftpPrefixPath)
  ]
})
export class GalleryComponent {

  hero: Gallery = {
    url: 'http://localhost:3000/upload/images/leaf-eda9.webp?resolution=4344_2896'
  };

  // rawSrcset = '640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w';
  rawSrcset = '640w, 750w, 828w, 1080w, 1200w, 1920w';

  images: any[] = [];

  // images: Gallery[] = [
  //   {
  //     name: '/leaf-14a9.jpg',
  //     width: 3584,
  //     height: 2016
  //   },
  //   {
  //     name: '/leaf-14a9.jpg',
  //     width: 2776,
  //     height: 2082
  //   },
  //   {
  //     name: '/hermes4.jpeg',
  //     width: 2776,
  //     height: 2082
  //   },
  //   {
  //     name: '/hermes5.jpeg',
  //     width: 1476,
  //     height: 1968
  //   },
  //   {
  //     name: '/hermes6.jpeg',
  //     width: 2624,
  //     height: 1968
  //   },
  //   {
  //     name: '/hermes7.jpeg',
  //     width: 3584,
  //     height: 2016
  //   },
  // ]

}
