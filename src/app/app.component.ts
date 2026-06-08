import { Component } from '@angular/core';
import { NavbarComponent }   from './components/navbar/navbar.component';
import { HeroComponent }     from './components/hero/hero.component';
import { AboutMeComponent }  from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent }  from './components/contact/contact.component';
import { FooterComponent }   from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
