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
 * @descripción Clase que representa un círculo - Modelo.
 */

import { Figura } from './figura.js';

/**
 * @description Clase que representa un círculo - Modelo.
 * @class Circulo
 */
export class Circulo extends Figura {

  constructor(private readonly radio: number) {
    if (radio <= 0) {
      throw new Error('El radio debe ser un número positivo.');
    }
    super();
  }

  /**
   * @description Método para dibujar el círculo en el canvas.
   * @param coordenadaX - Coordenada X del círculo.
   * @param coordenadaY - Coordenada Y del círculo.
   * @param color - Color del círculo.
   */
  dibujar(coordenadaX: number, coordenadaY: number, color: string): void {
    if (!this.contexto) {
      throw new Error('No se pudo obtener el contexto del canvas');
    }

    this.contexto.beginPath();
    this.contexto.arc(coordenadaX, coordenadaY, this.radio, 0, 2 * Math.PI);
    this.contexto.strokeStyle = color;
    this.contexto.stroke();
  }

  /**
   * @description Método para calcular el área del círculo.
   * @returns El área del círculo.
   */
  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }

  /**
   * @description Método para calcular el perímetro del círculo.
   * @returns El perímetro del círculo.
   */
  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }

}
