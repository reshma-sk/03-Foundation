import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1',{},'I am h1 tag')
console.log(heading);

const jsxHeading = <h1 id='h1'>namaste react</h1>
console.log(jsxHeading);//here parcel is doing the job behind the scene
//JSX=>react ele=>js obj=>()browser understandable code(html)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);