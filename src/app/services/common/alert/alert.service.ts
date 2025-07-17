import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private router: Router, private messageService: MessageService) {}

  async confirmationMessage(title: string, text: string, redirectUrl: string) {
    const result = await Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      confirmButtonColor: '#104862',
      showCancelButton: false,
      confirmButtonText: 'OK',
      customClass: {
        popup: 'swal-height',
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
      },
    });

    if (result.isConfirmed) {
      this.router.navigate([redirectUrl]);
    }
  }

  async informationMessage(title: string, text: string) {
    const result = await Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonColor: '#104862',
      showCancelButton: false,
      confirmButtonText: 'OK',
      customClass: {
        popup: 'swal-height',
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
      },
    });
  }

  async confirmationStatus(title: string, text: string) {
    return await Swal.fire({
      icon: 'info',
      title: title,
      text: text,
      confirmButtonColor: '#1a2035',
      cancelButtonColor: '#f40c0c',
      showCancelButton: true,
      cancelButtonText: 'NON',
      confirmButtonText: 'OUI',
      customClass: {
        popup: 'swal-height',
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
      },
      backdrop: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      focusConfirm: true,
      didOpen: () => {
        const container = document.querySelector(
          '.swal2-container'
        ) as HTMLElement;
        if (container && container.style.zIndex !== '9999999') {
          container.style.zIndex = '9999999';
        }
      },
    });
  }

  showToast(title: string, details: string, severity: any) {
    this.messageService.add({
      severity: severity,
      summary: title,
      detail: details,
    });
  }

  confirmationStatusWithReason(
    title: string,
    text: string,
    inputLabel: string
  ): Promise<any> {
    return Swal.fire({
      icon: 'info',
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: '#1a2035',
      cancelButtonColor: '#f40c0c',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        return Swal.fire({
          icon: 'info',
          title: 'Motif',
          input: 'textarea',
          inputLabel: inputLabel,
          inputPlaceholder: 'Saisir le motif ici...',
          showCancelButton: true,
          confirmButtonColor: '#1a2035',
          cancelButtonColor: '#f40c0c',
          confirmButtonText: 'Enregistrer',
          cancelButtonText: 'Annuler',
          inputValidator: (value) => {
            if (!value) {
              return 'Le champ est vide, veuillez le remplir !';
            }
            return null;
          },
        }).then((reasonResult) => {
          return {
            isConfirmed: reasonResult.isConfirmed,
            value: reasonResult.value,
          };
        });
      }
      return Promise.resolve({ isConfirmed: false, value: null });
    });
  }
}
