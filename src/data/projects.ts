import { ProjectType } from '../components/ProjectCard/ProjectCard';

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product filtering, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks with drag-and-drop functionality, task categories, and reminders.',
    image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time forecasts, interactive maps, and location-based weather data.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js', 'HTML/CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Zeta Crypto',
    description: 'A cryptocurrency dashboard that displays real-time prices, market trends and technical analysis.',
    image: 'src/components/images/ZetaCrypto.png',
    tags: ['HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Anjankumar-Developer/My-projects-/tree/main/Zeta-Crypto',
    demoUrl: 'https://my-projects-iota-kohl.vercel.app',
  },
  {
    id: 5,
    title: 'Recipe Finder App',
    description: 'A recipe application with search functionality, filtering options, and user recipe collections.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Context API', 'REST API', 'CSS Modules'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A fitness application for tracking workouts, setting goals, and visualizing progress over time.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Firebase', 'Redux', 'SVG Charts'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
];

export default projects;