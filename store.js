import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import popularList from './src/features/home/reducers/popularList';

let reducers = combineReducers({
    popularList,
});

const store = configureStore({reducer: reducers});

export default store;
