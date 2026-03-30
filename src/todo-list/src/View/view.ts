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
 * @desc File containing the definition of the View class responsible
 *       for building the DOM structure and exposing methods to bind event handlers.
 * @see {@link https://github.com/taniarascia/mvc }
 */

import { Todo } from '../todo.js';

/**
 * Builds the DOM structure and exposes methods to bind event handlers.
 */
export class View {
  private readonly app: HTMLElement;
  private readonly form: HTMLFormElement;
  private readonly input: HTMLInputElement;
  private readonly submitButton: HTMLButtonElement;
  private readonly title: HTMLHeadingElement;
  private readonly todoList: HTMLUListElement;
  private temporaryTodoText: string = '';

  /**
   * Initializes the view by creating the necessary DOM elements and appending them to the root element.
   */
  constructor() {
    // Gets the root element from the DOM (the div with id "root")
    this.app = this.getElement<HTMLElement>('#root');

    // <h1>Todos</h1>
    this.title = this.createElement<HTMLHeadingElement>('h1');
    this.title.textContent = 'Todos';

    // <form>
    this.form = this.createElement<HTMLFormElement>('form');

    // <input type="text" placeholder="Add todo" name="todo" />
    this.input = this.createElement<HTMLInputElement>('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add todo';
    this.input.name = 'todo';

    // <button>Submit</button>
    this.submitButton = this.createElement<HTMLButtonElement>('button');
    this.submitButton.textContent = 'Submit';

    this.form.append(this.input, this.submitButton);

    // <ul class="todo-list"></ul>
    this.todoList = this.createElement<HTMLUListElement>('ul', 'todo-list');

    this.app.append(this.title, this.form, this.todoList);

    this.initLocalListeners();
  }

  /** 
   * Renders the list of todos in the DOM. 
   * Clears the existing list and creates new list items for each todo.
   * If the list is empty, displays a message instead.
   * @param todos Array of Todo objects to display.
   */
  displayTodos(todos: Todo[]): void {
    // Clears the existing list of todos if any
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // If there are no todos, display a message
    if (todos.length === 0) {
      const paragraph = this.createElement<HTMLParagraphElement>('p');
      paragraph.textContent = 'Nothing to do! Add a task?';
      this.todoList.append(paragraph);
      return;
    }

    // Creates a list item for each todo and appends it to the list
    todos.forEach((todo) => {
      // <li id="{id}">
      const listElement = this.createElement<HTMLLIElement>('li');
      listElement.id = String(todo.id);

      // <input type="checkbox" checked="{complete}" />
      const checkbox = this.createElement<HTMLInputElement>('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.complete;

      // <span contenteditable="true" class="editable">{text}</span>
      const span = this.createElement<HTMLSpanElement>('span');
      span.contentEditable = 'true';
      span.classList.add('editable');

      if (todo.complete) {
        // <s>{text}</s> to strike through completed tasks
        const strike = this.createElement<HTMLElement>('s');
        strike.textContent = todo.text;
        span.append(strike);
      } else {
        span.textContent = todo.text;
      }

      // <button class="delete">Delete</button>
      const deleteButton = this.createElement<HTMLButtonElement>('button', 'delete');
      deleteButton.textContent = 'Delete';

      listElement.append(checkbox, span, deleteButton);
      this.todoList.append(listElement);
    });
    console.log(todos);
  }

  /**
   * Binds a handler function to the form submission event to add a new todo.
   * @param handler Function that takes the text of the new todo and adds it to the list.
   */
  onAddTodo(handler: (text: string) => void): void {
    this.form.addEventListener('submit', (event: SubmitEvent) => {
      event.preventDefault();
      const text = this.getInputText();
      if (text) {
        handler(text);
        this.resetInput();
      }
    });
  }

  /**
   * Binds a handler function to the click event on delete buttons to remove a todo.
   * @param handler Function that takes the ID of the todo to delete.
   */
  onDeleteTodo(handler: (id: number) => void): void {
    this.todoList.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.className === 'delete') {
        const id = parseInt(target.parentElement!.id, 10);
        handler(id);
      }
    });
  }

  /**
   * Binds a handler function to the focusout event on editable spans to edit a todo's text.
   * @param handler Function that takes the ID of the todo and the new text to update it.
   */
  onEditTodo(handler: (id: number, text: string) => void): void {
    this.todoList.addEventListener('focusout', (event: FocusEvent) => {
      if (this.temporaryTodoText) {
        const target = event.target as HTMLElement;
        const id = parseInt(target.parentElement!.id, 10);
        handler(id, this.temporaryTodoText);
        this.temporaryTodoText = '';
      }
    });
  }

  /**
   * Binds a handler function to the change event on checkboxes to toggle a todo's completion status.
   * @param handler Function that takes the ID of the todo to toggle its completion status.
   */
  onToggleTodo(handler: (id: number) => void): void {
    this.todoList.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.type === 'checkbox') {
        const id = parseInt(target.parentElement!.id, 10);
        handler(id);
      }
    });
  }

  /**
   * Initializes local event listeners for the todo list.
   * Listens for 'input' events on editable spans to capture text changes before focusout.
   */
  private initLocalListeners(): void {
    this.todoList.addEventListener('input', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.className === 'editable') {
        this.temporaryTodoText = target.innerText;
      }
    });
  }

  /** 
   * Gets the current value of the input field.
   * @return The text currently entered in the input field.
   */
  private getInputText(): string {
    return this.input.value;
  }

  /** Clears the input field. */
  private resetInput(): void {
    this.input.value = '';
  }

  /** 
   * Utility method to create an element with an optional CSS class. 
   * @param tag The type of element to create.
   * @param className Optional CSS class to add to the element.
   * @returns The created element cast to the specified type.
   */
  private createElement<Type extends HTMLElement>(tag: string, className?: string): Type {
    const element = document.createElement(tag) as Type;
    if (className) element.classList.add(className);
    return element;
  }

  /** Utility method to get an element from the DOM. 
   * @param selector CSS selector to find the element.
   * @returns The found element cast to the specified type.
   * @throws Error if no element is found for the given selector.
   */
  private getElement<Type extends HTMLElement>(selector: string): Type {
    const element = document.querySelector<Type>(selector);
    if (!element) throw new Error(`No element found for selector: ${selector}`);
    return element;
  }
}
