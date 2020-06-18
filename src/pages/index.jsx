import { Layout, Banner, Intro } from 'components';

const apiUrl = process.env.API_URL;

const Index = ({ movies, title, description, ...props }) => (
  <Layout title={title} description={description}>
    <Banner title="Sci-fi Movies of the decade" category="Feature" />
    <Intro />
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
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
