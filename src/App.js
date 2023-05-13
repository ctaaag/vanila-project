import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import TodoCount from './components/TodoCount.js';
import Users from './components/Users.js';

import TodoApi from './api/TodoApi.js';
import { checkData } from './utils/validationCheck.js';

export default function App(formId, listId, userid) {
  this.formDiv = document.getElementById(formId);
  this.listDiv = document.getElementById(listId);
  this.userDiv = document.getElementById(userid);
  this.state = { isLoading: false, data: [] };
  this.userName = 'Ctaaag';
  this.api = new TodoApi(this.userName);

  window.addEventListener('removeAll', async () => {
    await this.api.removeAllTodo();
    await this.setfetchState();
  });

  this.todoUser = new Users({
    $userDiv: this.userDiv,
    userName: this.userName,
    api: this.api,
    onClickUser: (newUserName) => {
      this.setUserName(newUserName);
    },
  });

  this.todoList = new TodoList({
    $listDiv: this.listDiv,
    state: this.state,
    checkCompleted: async (todoId) => {
      await this.api.toggleTodo(todoId);
      await this.setfetchState();
    },
    removeTodo: async (todoId) => {
      await this.api.removeTodo(todoId);
      await this.setfetchState();
    },
  });

  this.todoInput = new TodoInput({
    $formDiv: this.formDiv,
    addTodo: async (newTodo) => {
      await this.api.addTodo(newTodo);
      await this.setfetchState();
    },
    customEvent: new CustomEvent('removeAll'),
  });

  this.todoCount = new TodoCount({
    $listDiv: this.listDiv,
    state: this.state,
  });

  this.setUserName = (nextUserName) => {
    this.userName = nextUserName;

    this.setfetchState();
  };

  this.setState = (newState) => {
    checkData(newState.data);
    this.state = newState;

    this.todoList.setState(this.state);
    this.todoCount.setState(this.state);
    this.todoUser.setState(this.userName);
  };

  this.setfetchState = async () => {
    this.setState({ ...this.state, isLoading: true });
    const newState = await this.api.getUserTodo(this.userName);

    this.setState({ ...this.state, data: newState, isLoading: false });
  };

  this.setfetchState();
}
