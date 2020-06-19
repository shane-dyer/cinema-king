import {
  Layout,
  Banner,
  Intro,
  MovieList,
  CallToAction,
  Button,
} from 'components';

const Index = ({ movies, siteTitle, description }) => (
  <Layout siteTitle={siteTitle} description={description}>
    <Banner title="Sci-fi Movies of the decade" category="Feature" />
    <Intro />
    <MovieList list={movies} />
    <CallToAction>
      <h2>Join the Kingdom for just $5</h2>
      <Button href="#sign-up">Sign Up</Button>
    </CallToAction>
  </Layout>
);

export default Index;

export async function getStaticProps() {
  let movies;
  const api = process.env.API_URL;

  const configData = await import('../../siteconfig.json');

  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error(response.statusText);
    const { data } = await response.json();
    movies = data.movies;
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      movies,
      siteTitle: configData.default.title,
      description: configData.default.description,
    },
  };
}
