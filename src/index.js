import './style.css';
import { renderTasks } from './taskUtils.js';
import initAppListeners from './interactive.js';

window.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initAppListeners();
});
