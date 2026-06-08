import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

   constructor(private ContactService: ContactService){}

   sendEmail():void{
    this.ContactService.sendEmail()
   }
}


