/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Adrián Pérez Poleo <adrian.perez.46@ull.edu.es>
 * @author Enrique Gómez Díaz <enrique.gomez.13@ull.edu.es>
 * @author Manuel Cadenas García <manuel.cadenas.25@ull.edu.es>
 * @since Mar 20 2026
 * @desc File containing the definition of the Model class responsible for managing 
 *       the data of the application.
 * @see {@link https://github.com/taniarascia/mvc }
 */

import { Todo } from '../todo.js';

/**
 * Manages the data of the application, including the list of todos and methods to manipulate them.
 */
export class Model {
  private todos: Todo[];
  private observers: Array<(todos: Todo[]) => void> = [];

  /** Initializes the model by loading todos from localStorage if available. */
  constructor() {
    const stored = localStorage.getItem('todos');
    this.todos = stored ? JSON.parse(stored) as Todo[] : [];
  }

  /** 
   * Registers the callback that view through the controller will use to refresh the UI.
   * @param callback Function to call when the todo list changes,
   *    receiving the updated list of todos.
   */
  subscribeToChanges(callback: (todos: Todo[]) => void): void {
    this.observers.push(callback);
  }

  /**
   * Adds a new todo to the list with the given text, assigning it a unique ID.
   * @param todoText The text description of the new todo item.
   */
  addTodo(todoText: string): void {
    const todo: Todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };
    this.commit([...this.todos, todo]);
    this.notify();
  }

  /**
   * Edits the text of an existing todo identified by its ID.
   * @param id The unique identifier of the todo to edit.
   * @param updatedText The new text to update the todo with.
   */
  editTodo(id: number, updatedText: string): void {
    this.commit(
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    this.notify();
  }

  /**
   * Deletes a todo from the list based on its ID.
   * @param id The unique identifier of the todo to delete.
   */
  deleteTodo(id: number): void {
    this.commit(this.todos.filter((todo) => todo.id !== id));
    this.notify();
  }

  /**
   * Toggles the completion status of a todo identified by its ID.
   * @param id The unique identifier of the todo to toggle.
   */
  toggleTodo(id: number): void {
    this.commit(
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
    this.notify();
  }

  /**
   * Returns the current list of todos.
   * @returns An array of Todo objects representing the current state of the todo list.
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   * Notifies all registered observers about the current state of the todo list.
   */
  private notify(): void {
    this.observers.forEach((callback) => callback(this.todos));
  }

  /**
   * Persists state and notifies the observer.
   * @param todos The updated list of todos to save and notify about.
   */
  private commit(todos: Todo[]): void {
    this.todos = todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
