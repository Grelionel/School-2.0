import { Component, Input } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ComponentModule } from '../../component.module';

@Component({
  selector: 'app-loading',
  imports: [ComponentModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  @Input('loadingMessage') loadingMessage: any;

  constructor(private load: NgxSpinnerModule) {}

  ngOnInit(): void {}
}
