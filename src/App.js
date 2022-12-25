import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { decrement, increment } from './redux/slices/counterSlice';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <div>
          <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

      <div className='wrapper'>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />

          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
