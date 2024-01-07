import axios from 'axios';
import fs from 'fs';

async function blogRoutes() {
  const { data } = await axios(
    'https://www.j-filipiak.pl/api/wp-json/wp/v2/posts?per_page=100'
  );

  console.log(data);

  const prepared = [];

  data.map((route) => prepared.push('/blog/' + route.title?.rendered));

  // Write the routes to a file
  fs.writeFileSync('routes.json', JSON.stringify(prepared));

  console.log(prepared);
  return prepared;
}

export default blogRoutes;
