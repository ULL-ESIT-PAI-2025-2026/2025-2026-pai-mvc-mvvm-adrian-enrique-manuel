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
 * @descripción Clase que representa un cuadrado - Modelo.
 */

import { Figura } from './figura.js';

/**
 * @description Clase que representa un cuadrado - Modelo.
 * @class Cuadrado
 */
export class Cuadrado extends Figura {

  constructor(private readonly lado: number) {
    if (lado <= 0) {
      throw new Error('El lado debe ser un número positivo.');
    }
    super();
  }

  /**
   * @description Método para dibujar el cuadrado en el canvas.
   * @param coordenadaX - Coordenada X del cuadrado.
   * @param coordenadaY - Coordenada Y del cuadrado.
   * @param color - Color del cuadrado.
   */
  dibujar(coordenadaX: number, coordenadaY: number, color: string): void {
    if (!this.contexto) {
      throw new Error('No se pudo obtener el contexto del canvas');
    }

    this.contexto.beginPath();
    this.contexto.rect(coordenadaX, coordenadaY, this.lado, this.lado);
    this.contexto.strokeStyle = color;
    this.contexto.stroke();
  }

  /**
   * @description Método para calcular el área del cuadrado.
   * @returns El área del cuadrado.
   */
  calcularArea(): number {
    return this.lado ** 2;
  }

  /**
   * @description Método para calcular el perímetro del cuadrado.
   * @returns El perímetro del cuadrado.
   */
  calcularPerimetro(): number {
    return 4 * this.lado;
  }

}
