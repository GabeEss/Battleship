import './style.css';
import gameState from './gamestate';

const body = document.querySelector('body');
const content = document.createElement('content');
body.appendChild(content);

gameState(content);