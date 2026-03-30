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
 * @desc ViewModel file for the MVVM application.
 */

import { Observable } from './observable.js';
import { User } from './model.js';

/**
 * ViewModel class that acts as an intermediary between the Model and the View.
 */
export class ViewModel {
  private firstNameObservable: Observable<string>;
  private lastNameObservable: Observable<string>;

  /**
   * Constructor for the ViewModel class. Initializes the observables for 
   * the first name and last name
   */
  constructor(private user: User) {
    this.firstNameObservable = new Observable(user.getFirstName());
    this.lastNameObservable = new Observable(user.getLastName());
  }

  /**
   * Getter for the first name observable.
   * @return The Observable instance for the first name.
   */
  getFirstNameObservable() { 
    return this.firstNameObservable; 
  }

  /**
   * Getter for the last name observable.
   * @return The Observable instance for the last name.
   */
  getLastNameObservable() { 
    return this.lastNameObservable; 
  }

  /**
   * Method to get the full name by concatenating the first name and last name from the model.
   * @return The full name of the user.
   */
  getFullName(): string { 
    return this.user.getFullName(); 
  }

  /**
   * Method to update the first name in the model and notify the observable of the change.
   * @param input The new first name to set in the model.
   */
  updateFirstName(input: string): void {
    this.user = new User(input, this.user.getLastName());
    this.firstNameObservable.setValue(this.user.getFirstName());
  }

  /**
   * Method to update the last name in the model and notify the observable of the change.
   * @param input The new last name to set in the model.
   */
  updateLastName(input: string): void {
    this.user = new User(this.user.getFirstName(), input);
    this.lastNameObservable.setValue(this.user.getLastName());
  }
}
