import { Provider } from 'react-redux';
import store from '../store';

import 'styles/index.scss';

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
