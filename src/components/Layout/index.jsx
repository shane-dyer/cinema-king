import { useCallback } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Footer, Dialog } from 'components';
import {
  selectModalOpen,
  selectModalMovie,
  closeModalAsync,
} from 'store/reducers';

const Layout = ({ children, siteTitle, description }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModalOpen);
  const modalMovie = useSelector(selectModalMovie);

  const handleModalClose = useCallback(() => {
    dispatch(closeModalAsync());
  }, [dispatch, closeModalAsync]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caladea&family=Poppins:ital,wght@0,200;0,400;0,600;0,700;0,900;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main role="main">{children}</main>
      <Footer />
      <Dialog open={isModalOpen} handleClose={handleModalClose}>
        <h3>
          {modalMovie?.name} ({modalMovie?.releaseYear})
        </h3>
      </Dialog>
    </>
  );
};

export default Layout;
