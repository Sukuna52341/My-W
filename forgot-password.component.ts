import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  username: string;

  constructor(private authService: AuthService) { }

  forgotPassword(): void {
    // Implement forgot password logic here
    console.log('Forgot password for:', this.username);
  }
}
