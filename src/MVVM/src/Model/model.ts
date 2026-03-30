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
 * @desc Model file for the MVVM application.
 */

/**
 * Interface for user data, used to initialize the model with default values.
 */
export interface UserData {
  firstName: string;
  lastName: string;
}

/**
 * Model class representing a user with a first name and last name.
 */
export class User {
  /**
   * Constructor for the Model class. Converts the first name and last name 
   * to uppercase for display purposes.
   * @param firstName The first name of the user.
   * @param lastName The last name of the user.
   */
  constructor(private readonly firstName: string, private readonly lastName: string) {
    this.firstName = firstName.toUpperCase();
    this.lastName = lastName.toUpperCase();
  }

  /** 
   * Getter for the first name. 
   * @return The first name of the user.
   */
  getFirstName(): string {
    return this.firstName;
  }

  /** 
   * Getter for the last name. 
   * @return The last name of the user.
   */
  getLastName(): string {
    return this.lastName;
  }

  /** 
   * Method to get the full name by concatenating the first name and last name. 
   * @return The full name of the user.
   */
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
