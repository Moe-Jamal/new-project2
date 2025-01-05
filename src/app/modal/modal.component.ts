import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Output() exitModal: EventEmitter<void> = new EventEmitter<void>();

  onOuterContainerClick(event: Event): void {
    const outerContainer = event.target as HTMLElement;
    if (outerContainer.classList.contains('outerContainer')) {
      this.exitModal.emit();
    }
  }

  @HostListener('document:keydown', ['$event'])
  closeModal(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.exitModal.emit();
    }
  }
}
