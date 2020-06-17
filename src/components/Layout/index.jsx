import Head from 'next/head';

const Layout = ({
  children,
  title = 'CinemaKing',
  description = 'CinemaKing - The leading movie news outlet.',
  ...props
}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main role="main">{children}</main>
  </>
);

export default Layout;
