import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TimelineCard from './components/timelineCard.jsx'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <TimelineCard title='Islam in Tunisia' description='Aqba ibn Nafea conqured the Amazigh people in North Africa.'
   photoUrl='https://upload.wikimedia.org/wikipedia/commons/b/b2/Great_Mosque_of_Kairouan_Panorama_-_Grande_Mosqu%C3%A9e_de_Kairouan_Panorama.jpg' caption='Grande Mosque' />,
  document.getElementById('root')
);

// state = { 
//   title: 'Islam in Tunisia',
//   description: ,
//   photoUrl: ,
//   caption: 'Grande Mosque'
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
