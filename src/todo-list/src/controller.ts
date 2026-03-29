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
 * @desc File containing the definition of the Controller class responsible 
 *       for wiring the View's event handlers to the Model's methods.
 * @see {@link https://github.com/taniarascia/mvc }
 */

import { Model } from './model.js';
import { View } from './view.js';
import { Todo } from './todo.js';

/**
 * Wires the View's event handlers to the Model's methods
 * acting as the intermediary between them.
 */
export class Controller {
  /**
   * Initializes the controller by setting up the model and view,
   * binding the model's change listener to update the view, and binding the view's event
   * handlers to the controller's methods to manipulate the model's data.
   * @param model The instance of the Model class to manage the application's data.
   * @param view The instance of the View class to manage the application's user interface.
   */ 
  constructor(private readonly model: Model, private readonly view: View) {
    this.model.onChange(this.handleTodoListChange);

    this.view.onAddTodo(this.handleAddTodo);
    this.view.onEditTodo(this.handleEditTodo);
    this.view.onDeleteTodo(this.handleDeleteTodo);
    this.view.onToggleTodo(this.handleToggleTodo);

    // Display initial todos from localStorage
    this.handleTodoListChange(this.model.getTodos());
  }

  /**
   * Callback function that gets called whenever the todo list changes in the model.
   * @param todos The updated list of todos to display in the view.
   */
  private handleTodoListChange = (todos: Todo[]): void => {
    this.view.displayTodos(todos);
  };

  /**
   * Event handler for adding a new todo.
   * @param todoText The text description of the new todo item to add.
   */
  private handleAddTodo = (todoText: string): void => {
    this.model.addTodo(todoText);
  };

  /**
   * Event handler for editing an existing todo.
   * @param id The unique identifier of the todo to edit.
   * @param todoText The new text to update the todo with.
   */
  private handleEditTodo = (id: number, todoText: string): void => {
    this.model.editTodo(id, todoText);
  };

  /**
   * Event handler for deleting a todo.
   * @param id The unique identifier of the todo to delete.
   */
  private handleDeleteTodo = (id: number): void => {
    this.model.deleteTodo(id);
  };

  /**
   * Event handler for toggling the completion status of a todo.
   * @param id The unique identifier of the todo to toggle.
   */
  private handleToggleTodo = (id: number): void => {
    this.model.toggleTodo(id);
  };
}