import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  documentExtension: any[] = ['.pdf', '.docx', '.jpeg', '.jpg', '.png'];
  constructor() {}

  binaryToBase64(binary: string): string {
    return 'data:image/jpeg;base64,' + binary;
  }

  binaryToBase64Image(binary: string, fileExtension: string): string {
    return `data:image/${fileExtension};base64,${binary}`;
  }

  base64ToBinary(base64: any) {
    return base64.split(',')[1];
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const data = reader.result as string;
        resolve(data);
      };
      reader.onerror = (error) => reject(error);
    });
  }
}
