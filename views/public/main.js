import React from 'react';
import ReactDOM from 'react-dom';
import {Homepage} from '../components/homepage.jsx';
import {Details} from '../components/details';

ReactDOM.render(

        <Homepage></Homepage>
    ,
    document.getElementById('root')
);

ReactDOM.render(

    <Details></Details>
    ,
    document.getElementById('view')
);