import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  stats = [
    { icon: 'ri-code-s-slash-line', value: '2+', label: 'Años de experiencia' },
    { icon: 'ri-rocket-line',        value: '6+', label: 'Proyectos completados' },
    { icon: 'ri-cpu-line',           value: '5+', label: 'Tecnologías dominadas' },
    { icon: 'ri-heart-line',         value: '100%', label: 'Compromiso y dedicación' },
  ];

  technologies = [
    { icon: 'devicon-csharp-plain colored',              name: 'C#' },
    { icon: 'devicon-dotnetcore-plain colored',          name: '.NET' },
    { icon: 'devicon-angularjs-plain colored',           name: 'Angular' },
    { icon: 'devicon-typescript-plain colored',          name: 'TypeScript' },
    { icon: 'devicon-microsoftsqlserver-plain colored',  name: 'SQL Server' },
    { icon: 'devicon-mysql-plain colored',               name: 'MySQL' },
    { icon: 'devicon-azure-plain colored',               name: 'Azure' },
    { icon: 'devicon-git-plain colored',                 name: 'Git' },
  ];
}
