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
 * @description Class that represents the view - MVC View.
 */

import { Figure } from '../model/figure.js';
import { DrawerFactory } from './drawers/drawer-factory.js';

/**
 * @description Class that represents the view - responsible only for presentation.
 * Uses a DrawerFactory to create appropriate drawer strategies for each figure.
 * @class View
 */
export class View {

  private readonly colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  /**
   * @description Constructor for View.
   */
  constructor(private canvas: HTMLCanvasElement = 
                document.getElementById('canvas') as HTMLCanvasElement,
              private context: CanvasRenderingContext2D | null = 
                (document.getElementById('canvas') as HTMLCanvasElement).getContext('2d')) {
                if (this.context === null) {
                  throw new Error('No se pudo obtener el contexto del canvas.');
                }
                if (!this.canvas) {
                  throw new Error('No se pudo obtener el canvas.');
                }
              }

  /**
   * @description Method to render a figure on the canvas.
   * Creates an appropriate drawer for the figure using the DrawerFactory
   * and uses it to render the figure with random position and color.
   * @param figure - Figure to render.
   */
  renderFigure(figure: Figure): void {
    const drawer = DrawerFactory.createDrawer(figure);
    const randomX = Math.random() * 400 + 50;
    const randomY = Math.random() * 400 + 50;
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    drawer.draw(this.context!, randomX, randomY, randomColor);
  }

  /**
   * @description Method to render multiple figures on the canvas.
   * @param figures - Array of figures to render.
   */
  renderFigures(figures: Figure[]): void {
    figures.forEach(figure => this.renderFigure(figure));
  }
}
