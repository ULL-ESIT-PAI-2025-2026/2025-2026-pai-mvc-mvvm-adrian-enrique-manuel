/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Enrique Gómez Díaz
 * @since 25 de marzo 2026
 * @desc Cliente principal que utiliza el patrón MVC para visualizar figuras geométricas.
 *
*/

import { Vista } from './view/vista.js';
import { Controlador } from './controller/controlador.js';

/**
 * @description Función principal que se ejecuta al cargar la página.
 *              Implementa el patrón MVC para la visualización de figuras geométricas.
 */
function main(): void {
  try {
    let numeroFiguras = parseInt(prompt('Introduce el número de figuras a mostrar:') || '0');
    
    if (isNaN(numeroFiguras) || numeroFiguras < 0) {
      throw new Error('Por favor, introduce un número válido y positivo.');
    }

    const vista = new Vista();
    
    const controlador = new Controlador(vista);
    
    controlador.inicializar(numeroFiguras);

  } catch (error) {
    console.error('Error en la aplicación principal:', error);
  }
}

main();