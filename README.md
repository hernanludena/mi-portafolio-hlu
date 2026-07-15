# Hernán Ludeña — Portafolio Profesional

Portafolio web personal desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Presenta trayectoria, proyectos, blog y contacto con animaciones fluidas, soporte bilingüe (ES/EN) y diseño responsive para desktop, tablet y mobile.

**Sitio:** [hernanludena.com](https://hernanludena.com)

---

## Características

- **Hero animado** con efecto typewriter en tres líneas y tipografía fluida (`clamp`)
- **Tema claro / oscuro** con persistencia en el navegador
- **Internacionalización** (español e inglés) vía contexto React
- **Partículas interactivas** de fondo con `tsparticles`
- **Transiciones de página** con Framer Motion
- **Secciones:** Inicio, Sobre mí, Proyectos, Blog y Contacto
- **SEO** configurado con metadata, Open Graph y Twitter Cards
- **Diseño responsive** con header sticky y layout adaptativo

---

## Stack tecnológico

| Área | Tecnología |
|------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion, react-type-animation |
| Partículas | tsparticles / @tsparticles/react |
| Iconos | Lucide React |
| Fuentes | Geist Sans & Geist Mono |
| Contadores | react-countup |
| Carruseles | Swiper |

---

## Estructura del proyecto

```
├── app/
│   ├── layout.tsx          # Layout raíz, metadata y providers
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales y temas
│   └── (routes)/
│       ├── about/          # Sobre mí
│       ├── projects/       # Proyectos
│       ├── blog/           # Blog
│       └── contact/        # Contacto
├── components/             # UI reutilizable (header, hero, skills, etc.)
├── data.tsx                # Datos del portafolio (personal, proyectos, blog)
├── utils/                  # Variantes de animación
└── public/                 # Imágenes, CV y assets estáticos
```

---

## Requisitos

- **Node.js** 18.x o superior (recomendado 20 LTS)
- **npm** 9+

---

## Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/hernanludena/mi-portafolio-hlu.git
cd mi-portafolio-hlu

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3001](http://localhost:3001) en el navegador.

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Ejecuta ESLint |

---

## Personalización

Los datos principales del sitio están centralizados en `data.tsx`:

- Información personal y redes sociales
- Proyectos destacados y secundarios
- Entradas del blog
- Experiencia laboral, educación y certificaciones
- Skills y contadores

Las traducciones de la interfaz viven en `components/language-provider.tsx`.

Para actualizar metadata SEO (URL, título, descripción), edita `app/layout.tsx`.

---

## Despliegue

El proyecto es compatible con [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) o cualquier plataforma que soporte Next.js:

```bash
npm run build
npm run start
```

---

## Autor

**Hernán Ludeña** — Tech Lead & Full Stack Java

- [LinkedIn](https://ec.linkedin.com/in/hernanludena)
- [GitHub](https://github.com/hludena)
- [hernanludena.com](https://hernanludena.com)

---

## Licencia

Proyecto de uso personal. Todos los derechos reservados © Hernán Ludeña.
