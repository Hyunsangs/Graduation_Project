import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import './index.css'
import { store } from './store.ts';

import { BrowserRouter as Router} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>  
  
    <Router>
      <App />
    </Router>
  </Provider>

)
