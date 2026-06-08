import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  sendEmail(): void {
  window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=claudiadurantupano@gmail.com',
    '_blank'
  );
}
}
