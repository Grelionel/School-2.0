import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  EMAIL_PATTERN = /[\w\-\.]+@([\w-]+\.)+[\w-]{2,}/;
  PASSWORD_PATTERN =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{10,}$/;

  constructor() {}

  generateIdentifier() {
    return 'xxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  isValidEmail(email: string): boolean {
    return this.EMAIL_PATTERN.test(email.trim());
  }

  isPasswordValid(password: string): boolean {
    return this.PASSWORD_PATTERN.test(password);
  }

  /**
   * Check if password is valid (match + validity).
   *
   * @param password main password
   * @param confirmPassword confirmed password
   * @returns result boolean (isValid / passwordMatch)
   */
  checkPasswordValidity(
    password: string,
    confirmPassword: string,
  ): { match: boolean; valid: boolean } {
    const match = password === confirmPassword;
    const valid = this.isPasswordValid(password);
    return { match, valid };
  }
}
