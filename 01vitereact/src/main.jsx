import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function MyApp() {
// return (
//     <div>
//         <h2>hey vinay !</h2>
//     </div>
//     )
// }

// const ReactElement = {
//     type: 'a',
//     props: {
//         href : "https://google.com",
//         target: "_blank",
//     },
//     children: "Click me to go to Google",
// }

const anotherElement = <a href="https://google.com" target="_blank">Visit Google</a>;

const anotherReactElement = React.createElement(
    'a',
    {
        href: "https://google.com",
        target: "_blank"
    },
    'Visit Google'
);

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    // ReactElement
    // anotherElement
    anotherReactElement

)
