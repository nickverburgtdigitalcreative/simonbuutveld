import React from 'react'
import ReactDOM from 'react-dom'
import WebRouter from './components/Router'
import * as serviceWorker from './serviceWorker';

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        console.log('Page was loaded from cache.');
        window.location.reload();
    }
});

ReactDOM.render(<WebRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
