// import logo from './logo.svg';
import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import GifHook from './pages/search/gifHook';
// import GifRedux from "./pages/search/GifRedux";
// import Trending from "./pages/trending/Trending";
// import Search from './pages/search';
// import Counter from './pages/search';
// import GifHook from './pages/search/GifHook';
import store from './redux/store';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
