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
 * @descripción Clase que representa un triángulo - Modelo.
 */

import { Figura } from './figura.js';

/**
 * @description Clase que representa un triángulo - Modelo.
 * @class Triangulo
 */
export class Triangulo extends Figura {

  constructor(private readonly base: number, private readonly altura: number) {
    if (base <= 0 || altura <= 0) {
      throw new Error('La base y la altura deben ser números positivos.');
    }
    super();
  }

  /**
   * @description Método para dibujar el triángulo en el canvas.
   * @param coordenadaX - Coordenada X del triángulo.
   * @param coordenadaY - Coordenada Y del triángulo.
   * @param color - Color del triángulo.
   */
  dibujar(coordenadaX: number, coordenadaY: number, color: string): void {
    if (!this.contexto) {
      throw new Error('No se pudo obtener el contexto del canvas');
    }
    this.contexto.beginPath();
    this.contexto.moveTo(coordenadaX, coordenadaY);
    this.contexto.lineTo(coordenadaX + this.base, coordenadaY);
    this.contexto.lineTo(coordenadaX + this.base / 2, coordenadaY - this.altura);
    this.contexto.closePath();
    this.contexto.strokeStyle = color;
    this.contexto.stroke();
  }

  /**
   * @description Método para calcular el área del triángulo.
   * @returns El área del triángulo.
   */
  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }

  /**
   * @description Método para calcular el perímetro del triángulo.
   * @returns El perímetro del triángulo.
   */
  calcularPerimetro(): number {
    const lado1 = this.base;
    const lado2 = Math.sqrt((this.base / 2) ** 2 + this.altura ** 2);
    const lado3 = lado2;
    return lado1 + lado2 + lado3;
  }

}
