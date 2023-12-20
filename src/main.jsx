import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import store from './store.js';
import { Provider } from 'react-redux';
import Ably from 'ably';
import { AblyProvider } from 'ably/react';

const key = import.meta.env.VITE_ABLY_API_KEY;
const client = new Ably.Realtime.Promise(key);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <AblyProvider client={client}>
      <App />
    </AblyProvider>
  </Provider>
  // </React.StrictMode>
);
