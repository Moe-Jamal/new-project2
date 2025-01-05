import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface IUser {
  userName: string;
  userAge: number | undefined;
  userEmail: string;
  userPassword: string;
}
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formData: IUser = {
    userName: '',
    userEmail: '',
    userPassword: '',
    userAge: undefined,
  };

  onSubmit(): void {
    console.log('Form submitted with values:', this.formData);
  }
}
