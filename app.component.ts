import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="m-30">
      <input
        class="w-288 h-36 bg-gray-300 rounded-full mt-7 pl-12 text-base"
        [(ngModel)]="inputValue"
        (input)="checkForm()"
        placeholder="Введите текст"
      />
      <div class="flex">
        <div class="mt-10 ml-8 h-10 w-20" [ngClass]="{ 'bg-d1d1d1': blockFirst === 'bg-d1d1d1', 'bg-ff4242': blockFirst === 'bg-ff4242', 'bg-42ff4b': blockFirst === 'bg-42ff4b', 'bg-ecff42': blockFirst === 'bg-ecff42' }"></div>
        <div class="mt-10 ml-3 h-10 w-20" [ngClass]="{ 'bg-d1d1d1': blockSecond === 'bg-d1d1d1', 'bg-ff4242': blockSecond === 'bg-ff4242', 'bg-42ff4b': blockSecond === 'bg-42ff4b', 'bg-ecff42': blockSecond === 'bg-ecff42' }"></div>
        <div class="mt-10 ml-3 h-10 w-20" [ngClass]="{ 'bg-d1d1d1': blockThird === 'bg-d1d1d1', 'bg-ff4242': blockThird === 'bg-ff4242', 'bg-42ff4b': blockThird === 'bg-42ff4b', 'bg-ecff42': blockThird === 'bg-ecff42' }"></div>
      </div>
    </div>
  `,
  styles: [`
    /* Ваши стили Tailwind CSS здесь */
  `]
})
export class AppComponent {
  inputValue = '';
  blockFirst = 'bg-d1d1d1';
  blockSecond = 'bg-d1d1d1';
  blockThird = 'bg-d1d1d1';

  checkForm() {
    if (!this.inputValue) {
      this.blockFirst = 'bg-d1d1d1';
      this.blockSecond = 'bg-d1d1d1';
      this.blockThird = 'bg-d1d1d1';
      return;
    }

    if (this.inputValue.length < 8) {
      this.blockFirst = 'bg-ff4242';
      this.blockSecond = 'bg-ff4242';
      this.blockThird = 'bg-ff4242';
    } else if (
      /\d/.test(this.inputValue) &&
      /[a-zA-Z]/.test(this.inputValue) &&
      /[!@#$%^&*()_+":;'/.>,<{}[\]]/.test(this.inputValue)
    ) {
      this.blockFirst = 'bg-42ff4b';
      this.blockSecond = 'bg-42ff4b';
      this.blockThird = 'bg-42ff4b';
    } else if (
      (/\d/.test(this.inputValue) && /[a-zA-Z]/.test(this.inputValue)) ||
      (/[a-zA-Z]/.test(this.inputValue) &&
        /[!@#$%^&*()_+":;'/.>,<{}[\]]/.test(this.inputValue)) ||
      (/\d/.test(this.inputValue) &&
        /[!@#$%^&*()_+":;'/.>,<{}[\]]/.test(this.inputValue))
    ) {
      this.blockFirst = 'bg-ecff42';
      this.blockSecond = 'bg-ecff42';
      this.blockThird = 'bg-d1d1d1';
    } else if (
      /\d/.test(this.inputValue) ||
      /[a-zA-Z]/.test(this.inputValue) ||
      /[!@#$%^&*()_+":;'/.>,<{}[\]]/.test(this.inputValue)
    ) {
      this.blockFirst = 'bg-ff4242';
      this.blockSecond = 'bg-d1d1d1';
      this.blockThird = 'bg-d1d1d1';
    }
  }
}
