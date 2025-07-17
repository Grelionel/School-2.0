import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { AlertService } from '../../../services/common/alert/alert.service';
import { LoadingComponent } from '../../../components/common/loading/loading.component';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterModule, ButtonModule, LoadingComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private spinnerService: NgxSpinnerService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  send() {
    this.spinnerService.show();
    setTimeout(() => {
      this.alertService.confirmationMessage(
        'Confirmation',
        'Votre adresse email est valable.',
        '/reset-password'
      );
      this.spinnerService.hide();
    }, 1000);
  }
}
