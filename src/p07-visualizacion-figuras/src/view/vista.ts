/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Adrián Pérez Poleo (adrian.perez.46@ull.edu.es)
 * @author Enrique Gómez Díaz (enrique.gomez.13@ull.edu.es)
 * @author Manuel Cadenas García (manuel.cadenas.25@ull.edu.es)
 * @since Mar 20 2026
 * @descripción Clase que representa la vista - Vista MVC.
 */

import { Figura } from '../model/figura.js';

/**
 * @description Clase que representa la vista - responsable solo de la presentación.
 * @class Vista
 */
export class Vista {

  private readonly colores: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  /**
   * @description Método para renderizar una figura en el canvas.
   * @param figura - Figura a renderizar.
   */
  renderizarFigura(figura: Figura): void {
    figura.dibujar(
      Math.random() * (figura.getCanvas().width - 100) + 50,
      Math.random() * (figura.getCanvas().height - 100) + 50,
      this.colores[Math.floor(Math.random() * this.colores.length)]
    );
  }

  /**
   * @description Método para renderizar múltiples figuras en el canvas.
   * @param figuras - Array de figuras a renderizar.
   */
  renderizarFiguras(figuras: Figura[]): void {
    figuras.forEach(figura => this.renderizarFigura(figura));
  }

  /**
   * @description Muestra un mensaje en la consola.
   * @param mensaje - Mensaje a mostrar.
   */
  mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
  }

  /**
   * @description Muestra un error en la consola.
   * @param error - Error a mostrar.
   */
  mostrarError(error: string): void {
    console.error(error);
  }
}
