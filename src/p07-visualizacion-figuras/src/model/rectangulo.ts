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
 * @descripción Clase que representa un rectángulo - Modelo.
 */

import { Figura } from './figura.js';

/**
 * @description Clase que representa un rectángulo - Modelo.
 * @class Rectangulo
 */
export class Rectangulo extends Figura {

  constructor(private readonly ancho: number, private readonly alto: number) {
    if (ancho <= 0 || alto <= 0) {
      throw new Error('El ancho y el alto deben ser números positivos.');
    }
    super();
  }

  /**
   * @description Método para dibujar el rectángulo en el canvas.
   * @param coordenadaX - Coordenada X del rectángulo.
   * @param coordenadaY - Coordenada Y del rectángulo.
   * @param color - Color del rectángulo.
   */
  dibujar(coordenadaX: number, coordenadaY: number, color: string): void {
    if (!this.contexto) {
      throw new Error('No se pudo obtener el contexto del canvas');
    }

    this.contexto.beginPath();
    this.contexto.rect(coordenadaX, coordenadaY, this.ancho, this.alto);
    this.contexto.strokeStyle = color;
    this.contexto.stroke();
  }

  /**
   * @description Método para calcular el área del rectángulo.
   * @returns El área del rectángulo.
   */
  calcularArea(): number {
    return this.ancho * this.alto;
  }

  /**
   * @description Método para calcular el perímetro del rectángulo.
   * @returns El perímetro del rectángulo.
   */
  calcularPerimetro(): number {
    return 2 * (this.ancho + this.alto);
  }

}
