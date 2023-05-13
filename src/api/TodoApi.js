const API_URL = 'https://todo-api.roto.codes';
export default class TodoApi {
  constructor(userName) {
    this.requestURL = `${API_URL}/${userName}`;
  }

  async getUsers() {
    try {
      const response = await fetch(`${API_URL}/users`);
      return await response.json();
    } catch (error) {
      alert(error);
    }
  }

  async getUserTodo(userName) {
    try {
      this.requestURL = `${API_URL}/${userName}`;
      const response = await fetch(`${this.requestURL}?delay=500`);
      return await response.json();
    } catch (error) {
      alert(error);
    }
  }

  async addTodo(newTodo) {
    try {
      const response = await fetch(this.requestURL, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },

        body: JSON.stringify({
          content: newTodo,
        }),
      });
      return await response.json();
    } catch (error) {
      alert(error);
    }
  }

  async removeTodo(todoId) {
    try {
      const response = await fetch(`${this.requestURL}/${todoId}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      alert(error);
    }
  }

  async removeAllTodo() {
    try {
      const response = await fetch(`${this.requestURL}/all`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      alert(error);
    }
  }

  async toggleTodo(todoId) {
    try {
      const response = await fetch(`${this.requestURL}/${todoId}/toggle`, {
        method: 'PUT',
      });
      return await response.json();
    } catch (error) {
      alert(error);
    }
  }
}
