import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
