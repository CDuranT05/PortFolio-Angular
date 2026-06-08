import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  imgClass: string;
  category: string;
  badgeClass: string;
  link: string;
  tags: { icon: string; name: string }[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Plataforma de Inversiones',
      description: 'Portal bancario para la gestión de propuestas de inversiones alternativas, con autenticación segura, selección de idioma y almacenamiento en la nube.',
      image: '/assets/Images/Saria.png',
      imgClass: '',
      category: 'Full Stack',
      badgeClass: 'badge-fullstack',
      link: 'https://sirius.xxi-banorte.com/#/auth/login',
      tags: [
        { icon: 'devicon-angularjs-plain colored', name: 'Angular' },
        { icon: 'devicon-dotnetcore-plain colored', name: '.NET Core' },
        { icon: 'devicon-mysql-plain colored', name: 'MySQL' },
        { icon: 'devicon-azure-plain colored', name: 'Azure' },
      ]
    },
    {
      title: 'Dashboard de Análisis Ecommerce',
      description: 'Dashboard interactivo en Power BI para el análisis de tendencias de ventas, métricas por categoría, continente y recomendaciones de negocio.',
      image: '/assets/Images/PowerBI.png',
      imgClass: 'project-img-placeholder',
      category: 'Data Visualization',
      badgeClass: 'badge-data',
      link: '',
      tags: [
        { icon: 'ri-bar-chart-box-line', name: 'Power BI' },
        { icon: 'ri-global-line', name: 'DAX' },
      ]
    },
    {
      title: 'DevelopWare',
      description: 'Sitio web corporativo para empresa de desarrollo de software, con diseño moderno, presentación de servicios y experiencia de usuario optimizada.',
      image: '/assets/Images/Developware.png',
      imgClass: 'project-img-placeholder project-img-blue',
      category: 'Full Stack',
      badgeClass: 'badge-fullstack',
      link: 'https://developware.com.mx/',
      tags: [
        { icon: 'ri-layout-line', name: 'Web' },
        { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
      ]
    },
  ];
}
