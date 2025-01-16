# Ejercicio Práctico 5 - Módulo 5: 

# Preguntas Teóricas sobre TypeScript

Este documento responde a preguntas clave sobre TypeScript, con una explicación dirigida a desarrolladores junior.

## 1. ¿Qué es TypeScript y para qué se utiliza?

**TypeScript** es un lenguaje de programación que extiende **JavaScript** añadiendo la capacidad de trabajar con **tipos estáticos**. A diferencia de JavaScript, que es un lenguaje dinámico, TypeScript permite definir el tipo de datos de las variables, parámetros y funciones. Esto facilita la detección de errores en tiempo de desarrollo.

Se utiliza principalmente para:
- Mejorar la calidad y la legibilidad del código.
- Detectar errores antes de ejecutar el programa.
- Facilitar el desarrollo de aplicaciones grandes o complejas.

## 2. ¿Cuáles son las principales diferencias entre TypeScript y JavaScript?

Las diferencias clave entre **TypeScript** y **JavaScript** son:

- **Tipos de datos**: TypeScript permite definir tipos explícitos (como `string`, `number`, `boolean`), mientras que JavaScript es dinámico y no requiere especificar tipos.
- **Compilación**: TypeScript debe ser **compilado** a JavaScript antes de ejecutarse. JavaScript, por otro lado, se ejecuta directamente en el navegador o en un servidor (Node.js).
- **Detección de errores**: TypeScript detecta errores de tipo durante el desarrollo (antes de ejecutar el código), lo que ayuda a evitar muchos errores comunes. JavaScript solo puede detectar errores en tiempo de ejecución.

## 3. ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?

TypeScript es útil en el desarrollo de aplicaciones ReactJS por las siguientes razones:

- **Tipos explícitos para props y state**: Permite definir los tipos de las propiedades (props) y el estado (state) de los componentes de manera explícita. Esto hace que el código sea más fácil de entender y mantener.
- **Autocompletado y documentación**: Los editores de código pueden proporcionar autocompletado y sugerencias basadas en los tipos definidos, lo que mejora la productividad y reduce la probabilidad de cometer errores.
- **Mayor seguridad**: Ayuda a detectar errores en las interacciones entre los componentes (por ejemplo, pasar un tipo de dato incorrecto como prop).
- **Mejor mantenimiento**: Al trabajar con grandes aplicaciones, TypeScript facilita la refactorización y el mantenimiento del código, proporcionando una capa extra de seguridad al tener tipos bien definidos.

## 4. ¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en tiempo de desarrollo?

El **sistema de tipos** en TypeScript es una característica que permite especificar el tipo de datos que puede contener una variable, un parámetro o una función. Por ejemplo, puedes declarar que una variable debe ser un número (`let num: number`) o una cadena de texto (`let name: string`).

Este sistema ayuda a evitar errores de la siguiente manera:

- **Detección temprana de errores**: Si intentas asignar un valor de tipo incorrecto (por ejemplo, asignar un número a una variable que debe ser una cadena), TypeScript te dará un error en tiempo de desarrollo, antes de que el código se ejecute.
- **Mejora de la comprensión del código**: Al tener tipos explícitos, se hace más claro qué tipo de valores se espera en cada parte del código, lo que facilita la colaboración y el mantenimiento.
- **Prevención de errores comunes**: El sistema de tipos ayuda a prevenir errores comunes como el uso incorrecto de valores o métodos no definidos, lo que mejora la estabilidad y fiabilidad del código.

## Elección entre Fetch API y Axios.

Ambas opciones tienen sus méritos, y la elección entre Fetch API y Axios depende de tus necesidades. Si tu proyecto es simple y no requiere mucha personalización, Fetch puede ser suficiente. Si, por otro lado, prefieres una solución más completa, con un manejo de errores más sencillo y características avanzadas, Axios es una excelente opción.


