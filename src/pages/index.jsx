import { Layout, Banner } from 'components';

const Index = ({ title, description, ...props }) => (
  <Layout title={title} description={description}>
    <Banner title="Sci-fi Movies of the decade" category="Feature" />
  </Layout>
);

export default Index;

export async function getStaticProps() {
  const configData = await import('../../siteconfig.json');

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
