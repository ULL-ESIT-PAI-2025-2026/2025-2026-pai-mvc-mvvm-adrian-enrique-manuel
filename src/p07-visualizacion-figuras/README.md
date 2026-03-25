# Patrón MVC - Visualización de Figuras Geométricas

Este proyecto implementa el **patrón de diseño Modelo-Vista-Controlador (MVC)** para la visualización de figuras geométricas en un canvas HTML.

## Estructura del Proyecto

```
src/
├── model/                      # MODELO - Lógica de negocio y datos
│   ├── figura.ts              # Clase abstracta base para todas las figuras
│   ├── circulo.ts             # Implementación de círculo
│   ├── cuadrado.ts            # Implementación de cuadrado
│   ├── rectangulo.ts          # Implementación de rectángulo
│   ├── triangulo.ts           # Implementación de triángulo
│   ├── corazon.ts             # Implementación de corazón
│   └── creador-figuras.ts     # Factory para crear figuras aleatorias
│
├── view/                       # VISTA - Presentación y renderización
│   └── vista.ts               # Clase encargada de renderizar en el canvas
│
├── controller/                 # CONTROLADOR - Coordinación entre Modelo y Vista
│   └── controlador.ts         # Clase que coordina las acciones
│
└── client.ts                  # Punto de entrada de la aplicación
```

## Responsabilidades de Cada Capa

### 📦 MODEL (Modelo)
- **Responsabilidad**: Contiene la lógica de negocio y los datos
- **Clases principales**:
  - `Figura`: Clase abstracta que define la interfaz común
  - `Circulo`, `Cuadrado`, `Rectangulo`, `Triangulo`, `Corazon`: Implementaciones concretas
  - `CreadorFiguras`: Patrón Factory para crear figuras aleatorias

### 🎨 VIEW (Vista)
- **Responsabilidad**: Renderiza los datos en la interfaz gráfica
- **Clase principal**:
  - `Vista`: Encargada de dibujar las figuras en el canvas

### 🎮 CONTROLLER (Controlador)
- **Responsabilidad**: Coordina la interacción entre Modelo y Vista
- **Clase principal**:
  - `Controlador`: Gestiona el flujo de la aplicación

## Flujo de la Aplicación

```
usuario introduce número de figuras
        ↓
    client.ts
        ↓
  Controlador.inicializar()
        ↓
  CreadorFiguras.generarFiguraAleatoria() ← MODELO
        ↓
  Vista.renderizarFiguras() ← VISTA
        ↓
  Canvas muestra las figuras
```

## Ventajas del Patrón MVC

✅ **Separación de responsabilidades** - Cada capa tiene un propósito específico  
✅ **Reutilización de código** - El modelo es independiente de la presentación  
✅ **Fácil mantenimiento** - Los cambios en una capa no afectan a las otras  
✅ **Testabilidad** - Cada componente puede probarse de forma aislada  
✅ **Escalabilidad** - Fácil agregar nuevas figuras o funcionalidades  

## Cómo Usar

1. El usuario introduce el número de figuras deseado
2. El Controlador solicita al Modelo que genere figuras aleatorias
3. El Controlador pasa las figuras a la Vista para ser renderizadas
4. La Vista dibuja las figuras en el canvas

## Ejemplo de Extensión

Para agregar una nueva figura geométrica (por ejemplo, un pentágono):

1. **Crear en `model/`**: Nueva clase `pentágono.ts` que extienda `Figura`
2. **Actualizar `model/creador-figuras.ts`**: Agregar case en el switch
3. El resto de la aplicación no necesita cambios

---

Implementado por: Enrique Gómez Díaz  
Fecha: 25 de marzo de 2026
