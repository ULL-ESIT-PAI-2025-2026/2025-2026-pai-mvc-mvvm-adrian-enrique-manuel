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
 * @descripción Clase que representa un corazón - Modelo.
 */

import { Figura } from './figura.js';

/**
 * @description Clase que representa un corazón - Modelo.
 * @class Corazon
 */
export class Corazon extends Figura {

  constructor(private readonly radio: number) {
    if (radio <= 0) {
      throw new Error('El radio debe ser un número positivo.');
    }
    super();
  }

  /**
   * @description Método para dibujar el corazón en el canvas.
   * @param coordenadaX - Coordenada X del corazón.
   * @param coordenadaY - Coordenada Y del corazón.
   * @param color - Color del corazón.
   */
  dibujar(coordenadaX: number, coordenadaY: number, color: string): void {
    if (!this.contexto) {
      throw new Error('No se pudo obtener el contexto del canvas');
    }

    this.contexto.beginPath();
    this.contexto.moveTo(coordenadaX, coordenadaY);
    this.contexto.bezierCurveTo(coordenadaX, coordenadaY - this.radio / 2, coordenadaX - this.radio / 2, coordenadaY - this.radio / 2, coordenadaX - this.radio / 2, coordenadaY);
    this.contexto.bezierCurveTo(coordenadaX - this.radio / 2, coordenadaY + this.radio / 2, coordenadaX, coordenadaY + this.radio / 2, coordenadaX, coordenadaY + this.radio);
    this.contexto.bezierCurveTo(coordenadaX, coordenadaY + this.radio / 2, coordenadaX + this.radio / 2, coordenadaY + this.radio / 2, coordenadaX + this.radio / 2, coordenadaY);
    this.contexto.bezierCurveTo(coordenadaX + this.radio / 2, coordenadaY - this.radio / 2, coordenadaX, coordenadaY - this.radio / 2, coordenadaX, coordenadaY);
    this.contexto.closePath();
    this.contexto.strokeStyle = color;
    this.contexto.stroke();
  }

  /**
   * @description Método para calcular el área del corazón.
   * @returns El área del corazón.
   */
  calcularArea(): number {
    return (Math.PI * this.radio ** 2) / 2;
  }

  /**
   * @description Método para calcular el perímetro del corazón.
   * @returns El perímetro del corazón.
   */
  calcularPerimetro(): number {
    return Math.PI * this.radio;
  }

}
