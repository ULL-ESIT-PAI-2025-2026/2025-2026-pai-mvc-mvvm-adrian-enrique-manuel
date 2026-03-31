/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Adrián Pérez Poleo <adrian.perez.46@ull.edu.es>
 * @author Enrique Gómez Díaz <enrique.gomez.13@ull.edu.es>
 * @author Manuel Cadenas García <manuel.cadenas.25@ull.edu.es>
 * @since Mar 31 2026
 * @desc Factory class for creating figure drawers - View.
 */

import { Figure } from '../../Model/p07-figure.js';
import { Triangle } from '../../Model/p07-triangle.js';
import { Circle } from '../../Model/p07-circle.js';
import { Rectangle } from '../../Model/p07-rectangle.js';
import { Square } from '../../Model/p07-square.js';
import { Heart } from '../../Model/p07-heart.js';
import { Drawer } from './p07-drawer.js';
import { TriangleDrawer } from './p07-triangle-drawer.js';
import { CircleDrawer } from './p07-circle-drawer.js';
import { RectangleDrawer } from './p07-rectangle-drawer.js';
import { SquareDrawer } from './p07-square-drawer.js';
import { HeartDrawer } from './p07-heart-drawer.js';

/**
 * Factory class that creates the appropriate drawer for a given figure.
 * This class implements the Factory pattern to decouple the creation of drawers
 * from the figure classes themselves.
 */
export class DrawerFactory {

  /**
   * Creates a drawer for the given figure.
   * @param figure The figure for which to create a drawer.
   * @returns A drawer appropriate for the given figure.
   * @throws Error if the figure type is not recognized.
   */
  static createDrawer(figure: Figure): Drawer {
    switch (true) {
      case figure instanceof Triangle:
        return new TriangleDrawer((figure as Triangle).getBase(), (figure as Triangle).getHeight());
      case figure instanceof Circle:
        return new CircleDrawer((figure as Circle).getRadius());
      case figure instanceof Rectangle:
        return new RectangleDrawer((figure as Rectangle).getWidth(), (figure as Rectangle).getHeight());
      case figure instanceof Square:
        return new SquareDrawer((figure as Square).getSide());
      case figure instanceof Heart:
        return new HeartDrawer((figure as Heart).getRadius());
      default:
        throw new Error('Unknown figure type');
    }
  }

}
