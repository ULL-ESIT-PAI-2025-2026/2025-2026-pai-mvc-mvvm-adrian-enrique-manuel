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
 * @desc View file for the MVVM application.
 */

import { ViewModel } from './viewmodel.js';

/**
 * View class responsible for rendering the user interface and handling user interactions.
 */
export class View {
  private container: HTMLElement;
  private firstNameInput: HTMLInputElement;
  private lastNameInput: HTMLInputElement;
  private message: HTMLElement;

  /**
   * Constructor for the View class. Initializes the view with the given ViewModel
   * and sets up the DOM elements.
   */
  constructor(private readonly viewModel: ViewModel) {
    this.container = document.createElement('div');
    this.firstNameInput = document.createElement('input');
    this.lastNameInput = document.createElement('input');
    this.message = document.createElement('h1');

    this.container.appendChild(this.firstNameInput);
    this.container.appendChild(this.lastNameInput);
    this.container.appendChild(this.message);

    this.bindEvents();
  }

  /**
   * Method to get the root element of the view, which can be appended to the DOM.
   * @return The root HTMLElement of the view.
   */
  getElement(): HTMLElement {
    return this.container;
  }

  /**
   * Private method to bind event listeners to the input fields and subscribe 
   * to changes in the ViewModel's observables.
   */
  private bindEvents(): void {
    this.firstNameInput.addEventListener('input', () => {
      this.viewModel.updateFirstName(this.firstNameInput.value);
    });

    this.lastNameInput.addEventListener('input', () => {
      this.viewModel.updateLastName(this.lastNameInput.value);
    });

    this.viewModel.getFirstNameObservable().subscribe((updatedValue) => {
      this.firstNameInput.value = updatedValue;
      this.updateFullDisplay();
    });

    this.viewModel.getLastNameObservable().subscribe((updatedValue) => {
      this.lastNameInput.value = updatedValue;
      this.updateFullDisplay();
    });
  }

  /**
   * Private method to update the full name display message whenever 
   * the first name or last name changes.
   */
  private updateFullDisplay(): void {
    this.message.textContent = `HELLO, ${this.viewModel.getFullName()}!`;
  }
}