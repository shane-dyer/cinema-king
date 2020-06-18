import Head from 'next/head';
import { Header } from 'components';

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
      <link
        href="https://fonts.googleapis.com/css2?family=Caladea&family=Poppins:ital,wght@0,400;0,600;0,700;0,900;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main role="main">{children}</main>
  </>
);

export default Layout;
