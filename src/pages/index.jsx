import { Layout, Banner, Intro, MovieList } from 'components';

const apiUrl = process.env.API_URL;

const Index = ({ movies, siteTitle, description, ...props }) => (
  <Layout siteTitle={siteTitle} description={description}>
    <Banner title="Sci-fi Movies of the decade" category="Feature" />
    <Intro />
    <MovieList list={movies} />
  </Layout>
);

export default Index;

export async function getStaticProps() {
  const configData = await import('../../siteconfig.json');

  const response = await fetch(apiUrl);
  const { data } = await response.json();

  return {
    props: {
      movies: data.movies,
      siteTitle: configData.default.title,
      description: configData.default.description,
    },
  };
}
