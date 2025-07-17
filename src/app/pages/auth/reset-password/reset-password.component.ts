import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AlertService } from '../../../services/common/alert/alert.service';
import { LoadingComponent } from '../../../components/common/loading/loading.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComponentModule } from '../../../components/component.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [
    ButtonModule,
    RouterModule,
    LoadingComponent,
    ComponentModule,
    FormsModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent implements OnInit {
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  newPassword: string = '';
  confirmPassword: string = '';
  passwordMismatch: boolean = false;
  private debounceTimer: any;

  constructor(
    private spinnerService: NgxSpinnerService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  togglePassword(field: 'new' | 'confirm'): void {
    if (field === 'new') {
      this.showNewPassword = !this.showNewPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onPasswordChange(): void {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.checkPasswords();
    }, 500);
  }

  checkPasswords(): void {
    if (this.confirmPassword && this.newPassword !== this.confirmPassword) {
      this.passwordMismatch = true;
    } else {
      this.passwordMismatch = false;
    }
  }

  save() {
    if (this.passwordMismatch) {
      this.alertService.informationMessage(
        'Erreur',
        'Les mots de passe ne correspondent pas.'
      );
      return;
    }

    this.spinnerService.show();
    setTimeout(() => {
      this.alertService.confirmationMessage(
        'Félicitation',
        'Votre mot de passe a été réinitialisé avec succès.',
        '/activation-account'
      );
      this.spinnerService.hide();
    }, 1000);
  }
}
