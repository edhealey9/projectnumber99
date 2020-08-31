// Import stylesheets
import './style.css';
import Blue from './Structure.json';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<pre>${JSON.stringify(Blue, false, 4)}</pre>`;