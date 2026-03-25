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
 * @descripción Clase que representa una figura geométrica - Modelo.
 */

/**
 * @description Clase abstracta que representa una figura geométrica en el modelo.
 * @class Figura
 */
export abstract class Figura {

  constructor(protected canvas: HTMLCanvasElement = 
  document.getElementById('canvas') as HTMLCanvasElement,
              protected contexto: CanvasRenderingContext2D | null = 
              (document.getElementById('canvas') as HTMLCanvasElement).getContext('2d')) {
                if (this.contexto === null) {
                  throw new Error('No se pudo obtener el contexto del canvas.');
                }
                if (!this.canvas) {
                  throw new Error('No se pudo obtener el canvas.');
                }
              }

  /**
   * @description Método para dibujar la figura en el canvas.
   * @param coordenadaX - Coordenada X de la figura.
   * @param coordenadaY - Coordenada Y de la figura.
   * @param color - Color de la figura.
   */
  abstract dibujar(coordenadaX: number, coordenadaY: number, color: string): void;

  /**
   * @description Método para calcular el área de la figura.
   * @returns El área de la figura.
   */
  abstract calcularArea(): number;

  /**
   * @description Método para calcular el perímetro de la figura.
   * @returns El perímetro de la figura.
   */
  abstract calcularPerimetro(): number;

  /**
   * @description Obtiene el canvas.
   * @returns El canvas.
   */
  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * @description Obtiene el contexto del canvas.
   * @returns El contexto del canvas.
   */
  getContexto(): CanvasRenderingContext2D | null {
    return this.contexto;
  }
}
