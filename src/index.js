import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {AppProvider} from './provider';

const container = document.querySelector('main#content');

ReactDOM.render(<AppProvider/>, container);
