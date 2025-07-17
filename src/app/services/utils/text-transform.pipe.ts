import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
  standalone: true,
})
export class TextTransformPipe implements PipeTransform {
  transform(value: any): any {
    switch (value) {
      case 'ACTIVE':
        return { text: 'Actif', color: '#0f7426' };
      case 'DISABLED':
        return { text: 'Désactivé', color: '#eb520b' };
      case 'BLOCKED':
        return { text: 'Bloqué', color: '#eb520b' };
      case 'DELETED':
        return { text: 'Supprimé', color: '#ff0000' };
      case 'CREATED':
        return { text: 'Créé', color: '#0543eb' };
      case 'SUSPENDED':
        return { text: 'Suspendu', color: '#ac059e' };
      case 'CUSTOMER_ADMIN':
        return 'Administrateur client';
      case 'ADMIN':
        return 'Administrateur';
      case 'SUPER_ADMIN':
        return 'Super administrateur';
      case 'EVALUATOR':
        return 'Evaluateur';
      case 'LEARNER':
        return 'Apprenant';
      case 'CONSULTANT':
        return 'Consultant';
      case 'PRIMARY':
        return 'Primaire';
      case 'SECONDARY':
        return 'Secondaire';
      case 'TERTIARY':
        return 'Tertiaire';
      default:
        return value;
    }
  }
}
