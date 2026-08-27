import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  imgClass: string;
  category: string;
  badgeClass: string;
  role: string;
  features: string[];
  demoLink: string;
  repoLink: string;
  tags: { icon: string; name: string }[];
}

interface ProjectArea {
  title: string;
  icon: string;
  subtitle: string;
  projects: Project[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedProject: Project | null = null;

  areas: ProjectArea[] = [
    {
      title: 'Full Stack',
      icon: 'ri-stack-line',
      subtitle: 'Aplicaciones completas: frontend, backend y base de datos',
      projects: [
        {
          title: 'VITAL — Gestión Eléctrica',
          description: 'Plataforma modular que digitaliza la gestión de servicios eléctricos: contratos, facturación por consumo real, pagos, emergencias y beneficios sociales.',
          fullDescription: 'VITAL es una plataforma web que centraliza la relación entre una empresa de servicio eléctrico y sus usuarios, con cuatro perfiles: el ciudadano consulta y paga facturas o reporta emergencias; el técnico escanea el QR del medidor y el sistema factura automáticamente; el inspector evalúa casos de vulnerabilidad; y el supervisor monitorea métricas de subestaciones en tiempo real.',
          image: 'assets/Images/Vital.png',
          imgClass: '',
          category: 'Full Stack',
          badgeClass: 'badge-fullstack',
          role: 'Desarrolladora Full Stack — diseño e implementación del frontend modular en React y del backend en ASP.NET Core 8 con arquitectura por capas.',
          features: [
            'Cuatro perfiles de usuario con rutas protegidas',
            'Facturación automática a partir de lecturas con código QR',
            'Solicitudes de beneficios sociales con documentación digital',
            'Modo demo con datos precargados para los 4 roles'
          ],
          demoLink: 'https://cdurant05.github.io/Vital/',
          repoLink: 'https://github.com/CDuranT05/Vital',
          tags: [
            { icon: 'devicon-react-original colored', name: 'React' },
            { icon: 'devicon-typescript-plain colored', name: 'TypeScript' },
            { icon: 'devicon-dotnetcore-plain colored', name: '.NET Core 8' },
            { icon: 'devicon-csharp-plain colored', name: 'C#' },
          ]
        },
        {
          title: 'Plataforma de Inversiones',
          description: 'Portal bancario para la gestión de propuestas de inversiones alternativas, con autenticación segura, selección de idioma y almacenamiento en la nube.',
          fullDescription: 'Portal bancario desarrollado para la gestión de propuestas de inversiones alternativas. Incluye autenticación segura, internacionalización con selección de idioma, flujos de aprobación de propuestas y almacenamiento de documentos en la nube de Azure.',
          image: 'assets/Images/Saria.png',
          imgClass: '',
          category: 'Full Stack',
          badgeClass: 'badge-fullstack',
          role: 'Desarrolladora Full Stack — construcción de módulos en Angular, servicios en .NET Core y modelado de datos en MySQL.',
          features: [
            'Autenticación y control de acceso seguro',
            'Internacionalización (multi-idioma)',
            'Gestión documental en la nube (Azure)'
          ],
          demoLink: 'https://sirius.xxi-banorte.com/#/auth/login',
          repoLink: '',
          tags: [
            { icon: 'devicon-angularjs-plain colored', name: 'Angular' },
            { icon: 'devicon-dotnetcore-plain colored', name: '.NET Core' },
            { icon: 'devicon-mysql-plain colored', name: 'MySQL' },
            { icon: 'devicon-azure-plain colored', name: 'Azure' },
          ]
        },
      ]
    },
    {
      title: 'Desarrollo Web & Data',
      icon: 'ri-window-line',
      subtitle: 'Sitios web, plantillas y visualización de datos',
      projects: [
        {
          title: 'DevelopWare',
          description: 'Sitio web corporativo para empresa de desarrollo de software, con diseño moderno, presentación de servicios y experiencia de usuario optimizada.',
          fullDescription: 'Sitio web corporativo para una empresa de desarrollo de software. Diseño moderno y responsivo enfocado en presentar los servicios de la empresa, con animaciones sutiles y una experiencia de usuario optimizada para conversión.',
          image: 'assets/Images/Developware.png',
          imgClass: 'project-img-placeholder project-img-blue',
          category: 'Web',
          badgeClass: 'badge-web',
          role: 'Desarrolladora Web — maquetación, diseño responsivo e implementación del sitio completo.',
          features: [
            'Diseño responsivo para móvil y escritorio',
            'Presentación de servicios y portafolio de la empresa',
            'Optimización de experiencia de usuario'
          ],
          demoLink: 'https://developware.com.mx/',
          repoLink: '',
          tags: [
            { icon: 'ri-layout-line', name: 'HTML/CSS' },
            { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
          ]
        },
        {
          title: 'Enlasys — Sitio Corporativo',
          description: 'Sitio web corporativo para Enlasys, laboratorio de tecnología interactiva, construido adaptando una plantilla a .NET con formulario de contacto conectado a base de datos.',
          fullDescription: 'Sitio corporativo para Enlasys, un laboratorio creativo de tecnología interactiva. Partí de la plantilla web "Particle" y la migré a una aplicación ASP.NET Core 8 con Razor Pages, adaptando el diseño a la identidad de la marca y agregando un formulario de contacto persistido en SQL Server mediante Entity Framework Core, con logging estructurado (Serilog) y contenedor Docker para el despliegue.',
          image: 'assets/Images/Enlasys.jpg',
          imgClass: '',
          category: 'Plantilla Web',
          badgeClass: 'badge-web',
          role: 'Desarrolladora Web — adaptación de la plantilla a Razor Pages (.NET 8), personalización del diseño e integración del formulario de contacto con EF Core y SQL Server.',
          features: [
            'Migración de plantilla HTML a Razor Pages (.NET 8)',
            'Formulario de contacto con persistencia en SQL Server',
            'Logging estructurado con Serilog',
            'Dockerfile para despliegue en contenedores'
          ],
          demoLink: 'https://www.enlasys.com/',
          repoLink: '',
          tags: [
            { icon: 'devicon-dotnetcore-plain colored', name: '.NET 8' },
            { icon: 'devicon-csharp-plain colored', name: 'C#' },
            { icon: 'devicon-microsoftsqlserver-plain colored', name: 'SQL Server' },
            { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
          ]
        },
        {
          title: 'Zkeme — Landing Page',
          description: 'Landing page moderna construida en Next.js a partir de una plantilla, llevada más allá con la creación de imágenes y videos propios para la marca.',
          fullDescription: 'Landing page desarrollada en Next.js 15 con React 19 a partir de una plantilla base. En este proyecto fui más allá de la adaptación: además de personalizar el diseño (Bootstrap 5 y Sass, sliders con Swiper y animaciones), creé el contenido visual de la marca — imágenes y videos propios — e integré el formulario de contacto con envío de correos mediante Nodemailer.',
          image: 'assets/Images/Zkeme.png',
          imgClass: '',
          category: 'Plantilla Web',
          badgeClass: 'badge-web',
          role: 'Desarrolladora Web y creadora de contenido — implementación de la plantilla en Next.js y producción de imágenes y videos propios para la identidad visual.',
          features: [
            'Next.js 15 con React 19 y estilos en Sass',
            'Creación de imágenes y videos propios para la marca',
            'Sliders y animaciones con Swiper y WOW.js',
            'Formulario de contacto con envío de correos (Nodemailer)'
          ],
          demoLink: 'https://zkeme.com/',
          repoLink: '',
          tags: [
            { icon: 'devicon-nextjs-plain', name: 'Next.js' },
            { icon: 'devicon-react-original colored', name: 'React' },
            { icon: 'devicon-sass-original colored', name: 'Sass' },
            { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
          ]
        },
        {
          title: 'Dashboard de Análisis Ecommerce',
          description: 'Dashboard interactivo en Power BI para el análisis de tendencias de ventas, métricas por categoría, continente y recomendaciones de negocio.',
          fullDescription: 'Dashboard interactivo construido en Power BI para el análisis de un negocio de ecommerce: tendencias de ventas en el tiempo, métricas por categoría de producto y continente, y un panel de recomendaciones de negocio basadas en los datos.',
          image: 'assets/Images/PowerBI.png',
          imgClass: 'project-img-placeholder',
          category: 'Data Visualization',
          badgeClass: 'badge-data',
          role: 'Analista de Datos — modelado del dataset, medidas DAX y diseño del dashboard.',
          features: [
            'Análisis de tendencias de ventas',
            'Métricas por categoría y continente',
            'Recomendaciones de negocio basadas en datos'
          ],
          demoLink: '',
          repoLink: '',
          tags: [
            { icon: 'ri-bar-chart-box-line', name: 'Power BI' },
            { icon: 'ri-global-line', name: 'DAX' },
          ]
        },
      ]
    }
  ];

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject) this.closeModal();
  }
}
