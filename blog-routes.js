export const blogRoutes = () => {
  const routes = ['test', 'test2'];
  const prepared = [];
  const preparedRoutes = routes.map((route) => prepared.push('/blog/' + route));

  return prepared;
};
