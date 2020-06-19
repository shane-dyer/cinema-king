import { Layout, Banner, Intro, MovieList, CallToAction } from 'components';

const Index = ({ movies, siteTitle, description }) => {
  return (
    <Layout siteTitle={siteTitle} description={description}>
      <Banner title="Sci-fi Movies of the decade" category="Feature" />
      <Intro />
      <MovieList list={movies} />
      <CallToAction
        title="Join the Kingdom for just $5"
        button={{
          href: '#sign-up',
          text: 'Sign Up',
        }}
      />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  let movies;
  const apiUrl = process.env.API_URL;

  const configData = await import('../../siteconfig.json');

  try {
    const response = await fetch(apiUrl);
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
