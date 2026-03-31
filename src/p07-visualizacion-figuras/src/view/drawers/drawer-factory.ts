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
 * @description Factory class for creating figure drawers - View.
 */

import { Figure } from '../../model/figure.js';
import { Triangle } from '../../model/triangle.js';
import { Circle } from '../../model/circle.js';
import { Rectangle } from '../../model/rectangle.js';
import { Square } from '../../model/square.js';
import { Heart } from '../../model/heart.js';
import { Drawer } from './drawer.js';
import { TriangleDrawer } from './triangle-drawer.js';
import { CircleDrawer } from './circle-drawer.js';
import { RectangleDrawer } from './rectangle-drawer.js';
import { SquareDrawer } from './square-drawer.js';
import { HeartDrawer } from './heart-drawer.js';

/**
 * @description Factory class that creates the appropriate drawer for a given figure.
 * This class implements the Factory pattern to decouple the creation of drawers
 * from the figure classes themselves.
 * @class DrawerFactory
 */
export class DrawerFactory {

  /**
   * @description Creates a drawer for the given figure.
   * @param figure - The figure for which to create a drawer.
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
