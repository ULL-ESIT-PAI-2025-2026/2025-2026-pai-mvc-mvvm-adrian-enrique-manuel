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
 * @descripción Clase que representa un controlador - Controlador.
 */

import { Vista } from '../view/vista.js';
import { Figura } from '../model/figura.js';
import { CreadorFiguras } from '../model/creador-figuras.js';

/**
 * @description Clase Controlador que coordina entre el Modelo y la Vista.
 * @class Controlador
 */
export class Controlador {

  private figuras: Figura[] = [];

  constructor(private vista: Vista) {}

  /**
   * @description Inicializa la aplicación generando y renderizando figuras aleatorias.
   */
  inicializar(numeroFiguras: number): void {
    try {
      
      for (let i: number = 0; i < numeroFiguras; i++) {
        const figura: Figura = CreadorFiguras.generarFiguraAleatoria();
        this.figuras.push(figura);
      }

      this.vista.renderizarFiguras(this.figuras);

    } catch (error) {
      this.vista.mostrarError('Error al inicializar la aplicación: ' + error);
    }
  }
}
