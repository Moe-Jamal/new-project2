import {
  Component,
  ElementRef,
  HostListener,
  input,
  Input,
  ViewChild,
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

interface Projects {
  id: number;
  imgUrl: string;
  title: string;
}
@Component({
  selector: 'app-portfolio',
  imports: [ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects: Projects[] = [
    {
      id: 1,
      title: 'first-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    },
    {
      id: 2,
      title: 'second-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port2.png',
    },
    {
      id: 3,
      title: 'third-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port3.png',
    },
    {
      id: 4,
      title: 'fourth-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    },
    {
      id: 5,
      title: 'fifth-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port2.png',
    },
    {
      id: 6,
      title: 'sixth-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port3.png',
    },
  ];
  isClicked: boolean = false;
  modalImage: string = '';
  imageAlt: string = '';
  showModal(image: string, alt: string): void {
    this.isClicked = true;
    this.modalImage = image;
    this.imageAlt = alt;
  }
  hideModal(): void {
    this.isClicked = false;
  }
}
