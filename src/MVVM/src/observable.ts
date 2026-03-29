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
 * @desc Observable file for the MVVM application.
 */

/**
 * Type definition for a listener function that takes a value of a generic type and returns void.
 */
export type Listener<Type> = (value: Type) => void;

/**
 * Observable class that allows subscribing to changes in a value of a generic type.
 */
export class Observable<Type> {
  private listeners: Listener<Type>[] = [];

  /**
   * Constructor for the Observable class. Initializes the observable with a given value.
   * @param value The initial value of the observable.
   */
  constructor(private value: Type) {
    this.value = value;
  }

  /**
   * Getter for the current value of the observable.
   * @return The current value of the observable.
   */
  getValue(): Type {
    return this.value;
  }

  /**
   * Setter for the value of the observable. Triggers notifications to all subscribed listeners.
   * @param newValue The new value to set for the observable.
   */
  setValue(newValue: Type): void {
    this.value = newValue;
    this.notify();
  }

  /**
   * Method to subscribe a listener to changes in the observable's value.
   * @param callback The listener function to be called whenever the value changes.
   */
  subscribe(callback: Listener<Type>): void {
    this.listeners.push(callback);
    callback(this.value);
  }

  /**
   * Private method to notify all subscribed listeners of a change in the observable's value.
   * This method is called internally whenever the value is updated through the setValue method.
   */
  private notify(): void {
    for (const listener of this.listeners) {
      listener(this.value);
    }
  }
}
