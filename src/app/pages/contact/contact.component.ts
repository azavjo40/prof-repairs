import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public token: string = '5921104850:AAGMePI1n22jBJ8GygWIaDNSAxero_Jgx6U';
  public chatId: string = '-739630584';
  public urlApi: string = `https://api.telegram.org/bot${this.token}/sendMessage`;
  public form = this.fb.group({
    email: [null, [Validators.required]],
    message: [null, [Validators.required]],
  });
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  public sendMessage() {
    if (!this.form.valid) return this.form.markAllAsTouched();
    let message = `<b>Email: ${this.form.value?.email}</b>

    <b>Cообщение: ${this.form.value?.message}</b>
    `;
    this.http
      .post(this.urlApi, {
        text: message,
        chat_id: this.chatId,
        parse_mode: 'html',
      })
      .subscribe(() => this.form.reset());
  }
}
