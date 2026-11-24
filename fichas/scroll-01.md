# Scroll 01 · Portada y aviso de cookies

## Objetivo

Presentar la pregunta del proyecto y mostrar el aviso de cookies antes de entrar en la web. Dar dos caminos: aceptar o personalizar; en personalización, mostrar palabras que caen y se acumulan y dejar una única acción para aceptar.

## Prompts que usé

- Petición inicial: «con los archivos que te he dado quiero que hagas una web en la que salga la pantalla principal con 6 galletas y el pop up de aceptar las cookies que te he escrito».
- En `INSTRUCTIONS.md`: «Antes de esta pantalla, que salga un pop up que de la opcion de aceptar cookies y otra de personalizar cookies, al clikar aceptar, se muestra la web, al personalizar, muestra una pantalla en la que un monton de letras, se caen abajo y en el medio ponga "aceptar cookies" y que la unica opcion sea aceptarlas».
- Ajuste visual y de movimiento: «En el pop up de personalizar las cookies, cuando caigan las palabras, que se vayan amontonando abajo con animaciones que rebotan. También manten una estetica mas minimalista, para los titulos usa la tipografia Inter y para los textos o titulos pequeños usa la roboto mono».
- Ajuste posterior: «que no se vean las palabras que van a caer de arriba, tienen que venir de fuera del frame y también que se vea como caen todas las palabras, porque cuando se ejecuta la animación, hay como un tirón que interrumpe la animación».

## Qué generó la IA

- La portada con el título «¿Qué saben de ti?», texto introductorio y la animación de escritura y borrado en bucle.
- El aviso inicial con «Aceptar cookies» y «Personalizar cookies».
- La pantalla de personalización, con palabras que entran desde arriba, rebotan y se acumulan, y un botón de aceptación.

La frase exacta de la ventana («Esta web también deja miguitas») y el texto explicativo actual fueron redactados durante la implementación; el usuario no proporcionó una copia literal distinta en los archivos consultados.

## Qué cambié y por qué

- Se implementó el aviso como primera pantalla porque así lo pedía el criterio del proyecto.
- Se añadió la pantalla de palabras como respuesta a la acción de personalizar; la única salida de esa pantalla es aceptar.
- Se cambió la entrada de las palabras para que empiecen fuera del marco y se optimizó su actualización para reducir el tirón observado.
- Se fijaron Inter para títulos y Roboto Mono para textos pequeños, según la corrección del usuario.

## Resultado final

`index.html` contiene la portada y el aviso. `script.js` controla los botones, el ciclo del título y la caída de palabras. La pantalla de personalización muestra la acumulación y mantiene solo la acción «Aceptar cookies».
