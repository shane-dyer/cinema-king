import { Layout, Banner, Intro, MovieList, CallToAction } from 'components';

const apiUrl = process.env.API_URL;

const Index = ({ movies, siteTitle, description, ...props }) => (
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
