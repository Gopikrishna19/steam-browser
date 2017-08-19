import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app';
import './index.scss';

const container = document.querySelector('main#content');

ReactDOM.render(<App/>, container);
