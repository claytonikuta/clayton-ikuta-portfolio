import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Queens Park Band',
    slug: 'queens-park-band',
    excerpt:
      'The journey of Queens Park Band: from songwriting to live shows and recording albums.',
    body: 'Queens Park Band was born out of a shared passion for music among a group of friends during the height of the COVID-19 pandemic. Our journey began with songwriting sessions, where we would gather to brainstorm ideas, experiment with melodies, and craft lyrics that resonated with our experiences. The creative process was both challenging and exhilarating, as we saw our ideas evolve from rough sketches into complete songs. We then took our songs to the stage, performing live shows that allowed us to connect with our audience and share our music with the world. The highlight of our journey so far has been recording a full-length album in the studio, a process that allowed us to refine our sound and produce a tangible representation of our musical vision. Currently, we are focusing on writing another full-length album and continuing to perform live shows. The process of creating music, from the initial spark of inspiration to the final product, is a deeply rewarding experience that fuels our passion for what we do.',
    url: 'https://open.spotify.com/artist/3VaxFynkrumLbn7v8ZWfES',
    published_date: 'null',
    image: 'queenspark.JPG',
    video: 'null',
    thumb: 'null',
    category_id: 3,
    created_at: '2024-04-06',
    updated_at: '2024-04-06',
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        slug: 'javascript',
        pivot: { projects_id: 1, tags_id: 1 },
      },
      {
        id: 6,
        name: 'HTML',
        slug: 'html',
        pivot: { projects_id: 1, tags_id: 2 },
      },
      {
        id: 7,
        name: 'CSS',
        slug: 'css',
        pivot: { projects_id: 1, tags_id: 3 },
      },
    ],
  },
  {
    id: 2,
    name: 'Moovies',
    slug: 'movie-app',
    excerpt: 'A movie database app.',
    body: '<p>Built using Next.js and react, this app uses the movie database API to display movies and tv shows.</p></p>The user can search for movies and tv shows, and view details about each movie or tv show. This user can create</p>',
    url: 'moovies.claytonikuta.com',
    published_date: 'null',
    image: 'moovies.png',
    video: 'null',
    thumb: 'null',
    category_id: 3,
    created_at: '2024-03-13',
    updated_at: '2024-03-13',
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      {
        id: 4,
        name: 'TypeScript',
        slug: 'typescript',
        pivot: { projects_id: 2, tags_id: 1 },
      },
      {
        id: 5,
        name: 'React',
        slug: 'react',
        pivot: { projects_id: 2, tags_id: 2 },
      },
      {
        id: 7,
        name: 'CSS',
        slug: 'css',
        pivot: { projects_id: 2, tags_id: 3 },
      },
    ],
  },
  {
    id: 5,
    name: 'Outdoor Web Store',
    slug: 'Outdoor Web Store',
    excerpt: 'A fully functioning web store for outdoor gear.',
    body: '<p>A fully designed system for sustainable revenue generation. Built using C# to showcase a realistic web store.</p>',
    url: 'https://wildpath.azurewebsites.net/',
    published_date: 'null',
    image: 'wildpath.png',
    video: 'null',
    thumb: 'null',
    category_id: 3,
    created_at: '2024-03-13',
    updated_at: '2024-03-13',
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      {
        id: 1,
        name: 'C#',
        slug: 'c#',
        pivot: { projects_id: 5, tags_id: 1 },
      },
    ],
  },
];
