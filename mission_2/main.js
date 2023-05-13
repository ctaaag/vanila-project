import TodoList from './TodoList.js';
import App from './App.js';
import { getItem } from './localStorage.js';

const initialState = getItem('todos', []);
const $target = document.querySelector('.App');

const todoList = new App({ $target, initialState });
