import axios from 'axios';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function blogRoutes() {
  try {
    const { data } = await axios(
      'https://www.j-filipiak.pl/api/wp-json/wp/v2/posts?per_page=100'
    );

    const prepared = [];

    data.map((route) => prepared.push('/blog/' + route.title?.rendered));

    // Write the routes to a file
    fs.writeFileSync(`${__dirname}/blog-routes.json`, JSON.stringify(prepared));

    console.log('Routes generated successfully');
  } catch (error) {
    console.error('Error generating routes:', error);
  }
}

blogRoutes();
