# CLAUDE.md — Web de Bastión Defensa

Contexto para trabajar en la landing de bastiondefensa.com (proyecto Astro). Léelo entero antes de tocar nada.

> **Última actualización: 25/09/2026.** Incorpora las decisiones de precio, permanencia, tiempos de aviso, contenido del chequeo, calendario y datos al darse de baja. La ronda 2 de la sección 9 ya está aplicada en la web.

---

## 1. Cómo trabajar conmigo

- Soy Mario, fundador y único trabajador de Bastión Defensa. Perfil técnico (ciberseguridad), pero **no quiero tocar HTML ni CSS**: tú haces los cambios directamente en el código.
- Después de cada cambio, explícame en español llano, en 1-3 líneas por cambio, qué has hecho y dónde se ve en la página. No me vuelques el código.
- Antes de dar algo por terminado, ejecuta el build (`npm run build`) y confirma que no hay errores. Si levantas el servidor de desarrollo, dame la URL para revisarlo.
  - **Nota técnica del entorno:** en esta máquina hay un proceso `astro dev --host` corriendo como root desde antes de estas sesiones (no lo lancé yo, no tengo sudo para pararlo). Regenera `node_modules/.vite` y `.astro` con permisos de root, así que `npm run build` como usuario normal suele fallar con `EACCES`. Mientras ese proceso siga vivo, valida los cambios contra `http://127.0.0.1:4321` (ya sirve la versión en caliente) en vez de insistir con el build formal. *(08/10: ese proceso root ya no estaba activo.)* **No levantes tú el servidor de desarrollo, ni directamente ni sirviendo una copia del proyecto: lo arranco yo.** Valida contra el que tengo yo abierto (normalmente `http://127.0.0.1:4321`; si el puerto estaba ocupado, Astro usa el 4322 o el siguiente). Si no responde en ningún puerto, dímelo y espera a que lo arranque, en vez de montar uno por tu cuenta. (Nota: `.astro/` sigue siendo de root, así que `astro dev` lanzado por un usuario normal puede fallar con `EACCES`; se arregla con `sudo chown -R mario:mario .astro`.)
- No hagas commit, push ni despliegues sin que te lo pida.
- Las decisiones de negocio (precios, permanencia, tiempos de respuesta, qué promete el servicio) son mías. Si un cambio depende de una de ellas, pregúntame antes. **Nunca inventes datos.**
- Cuando cierres una tarea o yo tome una decisión de la lista de pendientes (sección 8), actualiza este archivo: marca la tarea como hecha y mueve la decisión a "Decidido". Así el contexto no se queda viejo.
- **Nunca escribas en este archivo tarifas internas** (precio por equipo adicional, número máximo de clientes). Solo lo que se publica.

---

## 2. El negocio en 30 segundos

- **Servicio:** vigilancia de los servidores locales y equipos de trabajo de PYMEs con herramientas de código abierto (Wazuh detecta, TheHive gestiona las alertas).
- **Ángulo principal:** el punto ciego del fin de semana. Intrusiones silenciosas que avanzan cuando nadie mira, antes de llegar a las copias de seguridad.
- **Cliente:** gerente o director general de una PYME de 10 a 50 empleados. No técnico, muy ocupado, piensa en continuidad del negocio y en costes.
- **La web es genérica a propósito** (cualquier PYME con servidor propio). El enfoque de nicho (gestorías, logística) lo trabajo yo en llamadas, no en la web. Cuando tenga un primer cliente de un sector, se podrá añadir prueba social de ese sector sin rehacer la página.
- **Canal:** llamo por teléfono y la web tiene que confirmar que esto es serio y permitir dar el siguiente paso en el momento. El tráfico frío es secundario.

### Oferta en escalera

1. **Chequeo de 14 días** — producto de entrada, de pago, **900 € + IVA**, hasta 2 servidores y 10 puestos de trabajo (con más equipos, presupuesto cerrado tras la primera llamada). **Es la conversión principal de la web.** Se pide reservando en **https://cal.com/mariobastion/30min**; el correo (info@bastiondefensa.com) queda como alternativa para quien prefiera escribir. Incluye:
   - La instalación de la sonda, que hace **el informático del cliente guiado por mí**. La sonda solo observa: no cambia nada ni afecta a la operativa. (Si el cliente no tiene informático, la instalo yo con su autorización por escrito; es la única excepción a "no toco nada".)
   - 14 días de vigilancia.
   - Un informe en lenguaje llano: resumen de una página con los números clave y un semáforo, los riesgos ordenados por importancia para el negocio y un plan de acción que dice qué hay que arreglar, en qué orden y por qué. Lo ejecuta el informático del cliente.
   - Una reunión de 45 minutos con el gerente para explicarle el informe.
   - Una llamada de 30 minutos con su informático para pasarle la parte técnica.
   - 30 días después del informe comprobando, con la sonda todavía instalada, que las correcciones han quedado bien.
   - **Descuento:** si contrata la vigilancia en los 30 días siguientes a la entrega del informe, le descuento el chequeo entero, repartido en las tres primeras cuotas.
2. **Vigilancia continua mensual** — **desde 390 €/mes + IVA, con hasta 2 servidores y 10 puestos de trabajo.** Con más equipos, precio cerrado tras el chequeo. Incluye detección todos los días del año (fines de semana y festivos también), aviso al cliente y a su informático con qué hacer, revisión de la configuración de sus equipos e informe mensual con una sola cifra ("nivel de exposición") y su tendencia.
   - **Sin permanencia:** pago mes a mes y baja avisando con 30 días.
   - **Tiempos de aviso de alertas críticas.** Texto que va en la web (sencillo, sin "del día siguiente" por ambiguo): *"Si salta algo grave en horario de oficina, te aviso en menos de 1 hora. Si pasa de noche, en fin de semana o en festivo, como tarde a las 10:00 de la mañana."* La definición exacta (horario de oficina de lunes a viernes de 9:00 a 18:00; fuera de él, como tarde a las 10:00 de la mañana siguiente, fines de semana y festivos incluidos) va en el contrato, no en la web.
   - **Número limitado de clientes**, para poder atenderlos a todos yo mismo. El número exacto no se publica.
3. **No hay servicio de corrección ni de respuesta a incidentes.** Bastión nunca toca los sistemas del cliente (la única excepción es instalar la sonda si no hay informático). No arreglo nada: digo qué hay que arreglar, en qué orden y por qué, y lo ejecuta el informático del cliente. Tampoco hago respuesta a incidentes ni análisis forense: si detecto un ataque en marcha, aviso al gerente y a su informático con los primeros pasos y les digo a quién acudir. La respuesta automática no se ofrece ni se menciona en la web.

- **Llamada de 10 minutos:** CTA secundario, para quien todavía no está listo para el chequeo. Se reserva en **https://cal.com/mariobastion/10min**.
- **Correo:** contesto el mismo día laborable.
- **Si el cliente se da de baja:** le entrego todos sus informes y, si los pide, sus alertas en formato abierto (CSV) en un plazo de 30 días. Después borro sus datos y le envío un certificado de borrado. Su informático desinstala la sonda siguiendo mis instrucciones.
- **Diferencial principal: independencia** — no vendo nada más ni sustituyo al informático. También: trato directo con el ingeniero (sin comerciales ni intermediarios), sin licencias propietarias que suban en cada renovación, sin permanencia, tus datos son tuyos, transparencia.
- **Nota de arquitectura:** Wazuh corre en arquitectura multitenant sobre un servidor propio alquilado en Hetzner. Por eso **es falso decir "si lo dejas, el sistema sigue siendo tuyo"**: no hay un sistema individual que el cliente se lleve. Lo correcto es **"tus datos son tuyos: te los llevas en un formato abierto y borro el resto"**. Esta frase falsa no puede aparecer en ninguna parte de la web.

---

## 3. Reglas de copy (obligatorias)

1. **Se escribe para el gerente, no para un ingeniero.** Se vende su problema resuelto (seguir facturando el lunes), no la tecnología. Prohibido en el cuerpo de la web: CVE, CVSS, SCA, hardening, CIS Benchmarks, SecOps, superficie de ataque, fuerza bruta, postura de seguridad. Si un término técnico es imprescindible, se explica en la misma frase.
2. **Voz: primera persona del singular y tuteo** ("vigilo", "te aviso", "tu empresa"). Nunca "nosotros", "monitorizamos", "actuamos".
3. **Sin promesas absolutas** tipo "frenamos los ciberataques". Se vende detectar y avisar a tiempo.
4. **No prometer respuesta automática**, aislamiento de equipos ni bloqueos automáticos. Los **únicos plazos que se publican** son los de la sección 2 (aviso de alertas críticas y contestación del correo), con el texto sencillo de la sección 6.2; la definición exacta va en el contrato. La prudencia es un argumento de venta: *"No toco tus sistemas: te aviso y tu informático actúa."*
5. **Distinguir detección de respuesta.** La detección 24/7 es automática y sí se puede decir. Una respuesta humana 24/7 no: trabajo solo, y los plazos de aviso son los de la sección 2.
6. **Cero datos inventados.** Ni estadísticas sin fuente citada en la propia página, ni testimonios, clientes, logos, certificaciones o años de experiencia que yo no te haya dado. Si falta un dato, pregúntame. Si todavía no lo tengo, deja ese elemento comentado en el HTML con `<!-- TODO: ... -->`. Nunca lo publiques con texto de relleno.
7. **El código abierto no es el mensaje principal.** Es un argumento de cierre (sin licencias que suben en cada renovación, sin permanencia, tus datos son tuyos, todo revisable) y vive en la sección "por qué yo".
8. **CTAs específicos:** dicen qué recibes y cuánto dura. Principal: **"Pide tu Chequeo de 14 días"**. Secundario: **"Resuelve tus dudas en una llamada de 10 minutos"** (o "Prefiero una llamada de 10 minutos" en el CTA final). Prohibido "Contactar", "Más información", "Ver servicios".
9. **Los títulos de sección hablan al lector**: dicen algo que piensa o la pregunta que el bloque responde. Nada de "Nuestros servicios" o "Sobre nosotros".
10. **Nunca atacar al informático o proveedor de IT del cliente.** Bastión es un complemento que le da visibilidad que hoy no tiene.
11. **Coherencia de nombre:** el producto de entrada se llama siempre "Chequeo de 14 días". Nunca "prueba", ni "diagnóstico", ni "sin compromiso", porque es de pago.
12. **Nunca sugerir que yo actúo sobre los sistemas del cliente ni que respondo a incidentes.** Verbos permitidos referidos a mí: vigilo, detecto, aviso, explico, compruebo, guío. Prohibidos referidos a mí: arreglo, corrijo, configuro, ejecuto, aíslo, bloqueo, contengo, "respondo" en el sentido de responder a un incidente. **Esto incluye los metadatos** (title, description, keywords, JSON-LD): tampoco pueden mencionar respuesta a incidentes ni auditorías.
13. **Nunca publicar** el precio por equipo adicional ni el número máximo de clientes.
14. **Todos los precios se publican sin IVA y siempre con "+ IVA" visible.** En `#chequeo` y `#vigilancia`, mismo orden: título → frase corta → bloque de precio unificado (`.price-block`) → tarjetas → resto.
15. **Los precios de lanzamiento o descuentos puntuales que pacte en llamadas nunca se publican en la web.**

---

## 4. Fallos conocidos en el archivo actual

Todos resueltos en la ronda 1.

1. ✅ **`#historia`** — sustituida por la línea de tiempo comparada (sección 6.1).
2. ✅ **`href="#servicios"`** — corregido, apunta a `#contacto`.
3. ✅ **Sección de contacto** — reescrita, ya no contradice el precio del chequeo.
4. ✅ `<h3 class="fade-in">Explicado en 3 pasos</h2><br>` — corregido.
5. ✅ **Metadatos** — reescritos, sin SecOps, en tono coherente, mencionan el Chequeo. El `const title` del frontmatter ya se usa.
6. ✅ **Tarjeta del hero:** ahora es un **"ejemplo de aviso" con formato de correo** (ver 6.8). La vista previa del informe del chequeo (cifras, semáforo, hallazgo) queda **eliminada**, HTML y CSS incluidos.
7. ✅ Texto en plural en `.local-section` y en los metadatos — corregido a primera persona.
8. ✅ El enlace a LinkedIn ya tiene `rel="noopener noreferrer"`.
9. ✅ El CTA del nav ya no dice "Contactar" (ahora "Pide tu chequeo").
10. ✅ **CSS huérfano** — eliminado tras confirmar que no se usaba.

**Riesgo cerrado:** la frase falsa "si lo dejas, el sistema sigue siendo tuyo" se encontró una vez (intro de `#por-que`) y se sustituyó en la ronda 2, tarea 1.

---

## 5. Estructura de la página

La lógica: arriba, la salida rápida para quien ya está convencido (hero + oferta). En medio, convencer a quien duda (historia, servicio continuo, comparación). Al final, quitar las últimas dudas (quién soy, preguntas) y repetir el mismo CTA.

| # | id | Título visible | Estado |
|---|----|----------------|--------|
| 1 | `inicio` | Hero: "Tu empresa cierra los viernes. Los ciberataques, no." Badge: "Ciberseguridad para PYMEs · desde Albacete". Subtítulo: "Yo vigilo. Tu informático arregla. Tú duermes tranquilo." Nota: "Descubre qué está pasando en tu red." Columna derecha: tarjeta "Ejemplo de aviso" con formato de correo (ver 6.8; ya no hay vista previa del informe). | Hecho. No cambiar el titular. Botón principal → cal.com/30min, botón secundario → cal.com/10min, ambos en pestaña nueva. La ubicación (Albacete) solo va en el badge, `.local-section` y metadatos — no la dupliques en otros sitios |
| 2 | `chequeo` | "Qué es el chequeo de 14 días" (etiqueta "Servicio inicial") | Hecho, con "Además, incluye:" (3 puntos) y descuento |
| 3 | `historia` | "Viernes 18:00. Nadie está mirando." (etiqueta "El punto ciego") | Hecho, columna "Con Bastión" definitiva |
| 4 | `vigilancia` | "Y a partir de ahí, vigilancia todos los días del año" | Hecho, con precio y plazos |
| 5 | `por-que` | "No te vendo nada más" (etiqueta "La diferencia") | Hecho, introducción de 2 líneas y tabla de 3 filas |
| 6 | `mario` | "Trato directo." (etiqueta "Quién soy") | Hecho. Definitivo: sin píldoras |
| 7 | `preguntas` | "Preguntas frecuentes" | Hecho, reorganizada: 7 respuestas publicadas y 3 comentadas con TODO |
| 8 | `contacto` | CTA final | Hecho. Botones a calendario (30min y 10min), "sin permanencia" y correo como alternativa discreta |

**Nav:** "El chequeo" → `#chequeo` · "Servicio mensual" → `#vigilancia` · "Quién soy" → `#mario` · "Preguntas" → `#preguntas` · botón destacado "Pide tu chequeo" → **https://cal.com/mariobastion/30min** (no es ancla interna).

**Fondos alternos:** chequeo `--sky-warm` · historia blanco · vigilancia `--sky-warm` · por qué blanco · mario `--navy` · preguntas blanco · contacto `--sky-warm`.

---

## 6. Contenido de las secciones

### 6.0 Chequeo (`#chequeo`)

- Orden fijo (igual en `#chequeo` y `#vigilancia`): título → frase corta (`.section-desc`) → bloque de precio (`.price-block`) → tarjetas → resto. **Ya no hay `h3` intermedio "Explicado en 3 pasos"**: las tarjetas van directas después del bloque de precio.
- `.section-desc`: *"Analizo tu empresa durante dos semanas y te cuento los principales puntos débiles y cómo arreglarlos."* ("te cuento", no "te comunico").
- **Precio** (bloque `.price-block`, justo después de la frase corta y antes de las tarjetas): *"900 € + IVA"*, y debajo: *"Hasta 2 servidores y 10 puestos de trabajo. Con más equipos, presupuesto cerrado tras la primera llamada."*
  - **Diseño del bloque** (se distingue de las tarjetas a propósito): caja con fondo `var(--navy)`, bordes redondeados (`var(--radius)`), sin sombra y sin hover — no debe parecer clicable. Ancho igual al de la frase corta de arriba (`max-width: 560px`, no se extiende a todo el contenedor). Siempre en columna, en escritorio y en móvil: arriba la cifra grande en blanco con "+ IVA" pequeño al lado (`.price-vat`); debajo el texto de qué incluye, en blanco con opacidad reducida y tamaño pequeño (`.price-right` / `.price-includes`).
- Paso 01, texto (retocado por Mario en VS Code, más corto que la versión original): *"Tu informático instala una sonda, guiado por mí. No afecta a vuestra forma de trabajar."* La etiqueta no cambia.
- Paso 02, etiqueta (svc-tag): *"Solo observo, no toco nada"* (antes "Detección de amenazas" — quitado por sonar más a jerga de auditoría/incidentes que a la propuesta de valor real).
- Debajo de las tres tarjetas, un bloque **"Además, incluye:"** (lista con marcas, estilo sobrio; ya no se llama "Qué incluye" ni repite lo que ya dicen las tarjetas — instalación, 14 días de vigilancia e informe):
  - Una reunión de 45 minutos para explicarte el informe.
  - Una llamada con tu informático para pasarle la parte técnica.
  - 30 días comprobando que las correcciones quedan bien.
- Línea destacada debajo (`.incluye-descuento`): *"Si contratas el servicio mensual en los 30 días siguientes, el chequeo te sale gratis."* Las palabras "servicio mensual" son un enlace interno a `#vigilancia` (subrayado, misma pestaña). Ya no menciona "las tres primeras cuotas": ese detalle va en la FAQ 2 y en la sección 2.

### 6.1 Historia — línea de tiempo comparada (`#historia`)

Dos columnas (una en móvil). Izquierda "Sin vigilancia", en coral (`--coral`, `--coral-bg`). Derecha "Con Bastión", en teal. **Mismos cuatro momentos en las dos columnas, alineados.** El último paso de cada columna, destacado.

Descripción: *"A las 18:00 se va el último. A las 21:47 entra alguien. Esto es lo que puede pasar un fin de semana cualquiera."*

**Sin vigilancia**
- Viernes, 21:47: Alguien entra por un acceso remoto mal cerrado. Nadie lo ve: es fin de semana.
- Sábado: Se mueve con calma por tu red. Tiene todo el fin de semana por delante.
- Domingo: Cifra tus copias de seguridad. Ya no hay marcha atrás.
- Lunes, 8:00: No puedes facturar. Ni emitir nóminas. Ni acceder a nada.

**Con Bastión** (definitivo, ya se puede publicar)
- Viernes, 21:47: La sonda detecta el acceso extraño y me salta la alerta. No espera al lunes.
- Sábado, antes de las 10:00: Te aviso a ti y a tu informático: qué ha pasado y qué desconectar. Sin tecnicismos.
- Domingo: Tu informático corta el acceso con mis indicaciones. Tus copias de seguridad siguen intactas.
- Lunes, 8:00: Facturas con normalidad. El susto queda documentado en tu informe.

> No uses nunca "Aíslo el equipo afectado" ni "La amenaza ya está contenida": prometen una respuesta que no existe (reglas 4, 5 y 12).

### 6.2 Vigilancia continua (`#vigilancia`)

- Etiqueta: "Servicio mensual". Título: "Y a partir de ahí, vigilancia todos los días del año".
- Orden fijo, igual que en `#chequeo`: título → frase corta (`.section-desc`) → bloque de precio (`.price-block`) → tarjetas → resto.
- `.section-desc`: *"La sonda se queda y sigo vigilando tu red todos los días del año."*
- **Precio** (mismo bloque `.price-block` que en `#chequeo`, justo después de la frase corta y antes de las tarjetas): *"Desde 390 €/mes + IVA"*, y debajo: *"Hasta 2 servidores y 10 puestos de trabajo. Con más equipos, precio cerrado tras el chequeo."* y *"Sin permanencia: te das de baja avisando con 30 días."*
- Tres tarjetas (`.svc-grid` / `.svc-card`), después del precio:
  - **Vigilancia continua.** La sonda sigue vigilando tu servidor y tus equipos todos los días, incluidos fines de semana y festivos. Etiqueta: "Todos los días del año".
  - **Aviso claro.** Si pasa algo, te aviso a ti y a tu informático con lo que hay que hacer, en tu idioma. No toco tus sistemas: la decisión es vuestra. Etiqueta: "Tú decides".
  - **Informe mensual.** Cada mes, un resumen corto: una sola cifra, tu nivel de exposición, y si sube o baja. Además, qué conviene corregir. Etiqueta: "Llega aunque no pase nada".
- **Plazos de aviso** (al final, después de las tarjetas, no forma parte del bloque de precio; sin "del día siguiente" por ambiguo): *"Si salta algo grave en horario de oficina, te aviso en menos de 1 hora. Si pasa de noche, en fin de semana o en festivo, como tarde a las 10:00 de la mañana."*

### 6.3 Por qué yo (`#por-que`)

- Etiqueta: "La diferencia". Título: "No te vendo nada más".
- Introducción: **dos líneas** (dos `<p>`, una frase cada una), texto exacto:
  - *"No vendo antivirus, equipos ni horas de arreglos, y no sustituyo a tu informático."*
  - *"Mi único interés es contarte la verdad sobre tu red y comprobar que se arregla."*
  - Lo que decía el párrafo eliminado (sin licencias que suben cada año, sin permanencia, tus datos son tuyos) ya no va en `#por-que`: la permanencia, el precio y qué pasa con los datos al dejarlo se explican en las preguntas frecuentes (6.5) y en `#vigilancia`.
- Tabla comparativa, cabeceras **"Proveedor grande" / "Bastión"**, tono justo y genérico, sin nombrar empresas (proveedor grande / Bastión):
  - Con quién hablas: Centralita y técnicos distintos / Conmigo, siempre.
  - Qué más te venden: Licencias, equipos o paquetes / Nada. Vigilo y te aviso.
  - Tu informático: Compiten con él / Trabajo con él, no en su lugar.
  - **La tabla tiene exactamente estas tres filas. No añadir más: la permanencia y el precio se explican en las preguntas frecuentes.** (Se probaron y se quitaron las filas "Permanencia", "Si te vas", "Qué pagas" y "aviso de una alerta crítica".)
  - **No comparar tiempos de aviso con otros proveedores en esta tabla: están en `#vigilancia`.**
  - En móvil (≤640px) la primera columna puede partir línea y el relleno lateral de las celdas es de .5rem: sin ese ajuste la tabla se desborda a 360px y 320px (medido en navegador). No lo quites.
  - La columna "Proveedor grande" debe quedar genérica y prudente; no afirmes nada concreto sobre competidores.
- Bloque **"¿Y si solo eres tú?"**: *"Trabajo con un número limitado de empresas para poder atenderlas yo mismo. La sonda vigila sola las 24 horas, esté yo delante o no, y te aviso en los plazos acordados."* El plan de respaldo (alertas críticas enviadas también a tu informático) queda comentado con TODO hasta que yo confirme que está montado.

### 6.4 Quién soy (`#mario`) — hecho

Todo lo siguiente es **definitivo**. Etiqueta (section-label): "Quién soy". Título: "Trato directo." Cargo: "Mario — Fundador & Ingeniero de ciberseguridad". Párrafo único: *"Soy quien vigila tu red y te avisa si algo no va bien."* **Sin píldoras** (se eliminaron "Sin comerciales" y "Hablas siempre conmigo", y su CSS `.pills` / `.pill` / `.pill-dot`, que no se usaba en ninguna otra sección). LinkedIn al final, con `rel="noopener noreferrer"`.

Los "7 años de experiencia en grandes empresas" ya no aparecen en esta sección; el dato sigue decidido en la sección 8 por si se reutiliza en otro sitio.

### 6.5 Preguntas frecuentes (`#preguntas`)

Sin etiqueta (section-label): se quitó "Sin letra pequeña" y no se sustituye por otra. Solo el título "Preguntas frecuentes".

Con `<details>` y `<summary>`, sin JavaScript. Las preguntas van con las palabras del cliente. Donde la respuesta dependa de algo pendiente, la pregunta queda comentada con TODO.

**Todos los `<details>` llevan `name="faq"`: solo puede haber una pregunta abierta a la vez** (acordeón nativo de HTML, sin JavaScript). Los 3 comentarios TODO de preguntas pendientes llevan un recordatorio de que, al publicarlas, su `<details>` debe ser `class="faq-item" name="faq"`.

Solo 7 preguntas visibles (reorganizado; antes había 12 publicadas):

1. **¿Cuánto cuesta?** El Chequeo de 14 días cuesta 900 € + IVA, con hasta 2 servidores y 10 puestos de trabajo. La vigilancia mensual, desde 390 €/mes + IVA con el mismo tamaño. Sin coste de licencias. Y si contratas la vigilancia en los 30 días siguientes al chequeo, el chequeo te sale gratis.
2. **¿Puedo contratar directamente el servicio mensual?** Sí, pero siempre empezamos por el chequeo: son los primeros 14 días del servicio. Si continúas, te lo descuento entero de las tres primeras cuotas, así que te cuesta lo mismo. La diferencia es que, si no te convence, te quedas con tu informe y no pagas nada más.
3. **¿Esto no lo hace ya mi antivirus o mi informático?** El antivirus intenta impedir que entre algo conocido; yo vigilo lo que pasa dentro por si algo se cuela, y aviso. Tu informático sigue siendo tu informático: le doy visibilidad que hoy no tiene.
   - *[Comentada con TODO tras esta pregunta: "¿Y si no tengo informático?", pendiente de que Mario tenga su lista de profesionales de confianza.]*
4. **¿Eres tú solo? ¿Qué pasa si no estás?** Sí, y es a propósito: trabajo con un número limitado de empresas para poder atenderlas yo mismo. La sonda vigila sola las 24 horas y te aviso en los plazos acordados. *(Frase del respaldo comentada con TODO hasta que yo confirme las alertas al informático.)*
5. **¿Tocas mis sistemas o arreglas tú lo que encuentras?** No. Te digo qué hay que arreglar, en qué orden y por qué, se lo explico a tu informático para que lo haga él y después compruebo que ha quedado bien. Si detecto algo un sábado de madrugada, os aviso a ti y a tu informático antes de las 10:00, y la decisión es vuestra.
   - *[Comentadas con TODO tras esta pregunta: "¿Y si detectas un ataque en marcha?" (pendiente del especialista en respuesta a incidentes) y "¿Ves mis datos, mis correos, mis nóminas?" (pendiente del contrato RGPD y de confirmar dónde está el servidor).]*
6. **¿Y si nunca pasa nada? ¿Pago por nada?** Cada mes recibes un informe con lo que se ha intentado, lo que se ha revisado y lo que conviene corregir. Que no pase nada también es el resultado.
7. **¿Tengo permanencia? ¿Qué pasa si lo dejo?** No hay permanencia: pagas mes a mes y puedes dejarlo avisando con 30 días. Te entrego todos tus informes y, si los quieres, tus alertas en un formato abierto. Después borro tus datos y te envío un certificado de borrado.

**Eliminadas** (ya no se publican, ni sueltas ni fusionadas salvo donde se indica): "¿Qué recibo exactamente con el chequeo?", "¿Tengo que parar la empresa para instalarlo?", "Si usas herramientas de código abierto, ¿qué te estoy pagando?". Las preguntas "¿me apagas el servidor?" y "¿Arreglas tú lo que encuentras?" se fusionaron en la 5; "¿Tengo que firmar permanencia?" y "¿Qué pasa con mis datos si lo dejo?" se fusionaron en la 7.

### 6.6 CTA final (`#contacto`) y botón flotante

- Título: "Empieza por ver qué está pasando en tu red".
- Texto: *"Pide tu Chequeo de 14 días. Si después contratas la vigilancia, te sale gratis."*
- Botón principal: "Pide tu Chequeo de 14 días" → **https://cal.com/mariobastion/30min**, con `target="_blank"` y `rel="noopener noreferrer"`. Ya no es mailto. El mismo enlace y texto se usan en el botón del hero y en el botón "Pide tu chequeo" del nav.
- Botón secundario: "Prefiero una llamada de 10 minutos" → **https://cal.com/mariobastion/10min**, con `target="_blank"` y `rel="noopener noreferrer"`.
- Línea pequeña bajo los botones: *"¿Prefieres escribir? info@bastiondefensa.com"*, con el correo como mailto (asunto "Solicitud de Chequeo de 14 días"), texto pequeño y discreto. No se añade en el hero.
- Botón flotante: mismo enlace que el botón principal (**https://cal.com/mariobastion/30min**, `target="_blank"`, `rel="noopener noreferrer"`), `aria-label` "Pide tu Chequeo de 14 días", icono de calendario (antes era un sobre).
- Botón secundario del hero ("Resuelve tus dudas en una llamada de 10 minutos") → **https://cal.com/mariobastion/10min**, con `target="_blank"` y `rel="noopener noreferrer"`.

### 6.7 Metadatos — hecho

Title, description, og, twitter y JSON-LD reescritos en la ronda 1. Si añades el precio o el calendario en algún metadato, respeta la regla 13.

- `serviceType` del JSON-LD: `["Vigilancia de Ciberseguridad para PYMEs", "Chequeo de Seguridad Informática"]` (quitados "Auditoría de Seguridad" y "Respuesta ante Incidentes" — regla 12).
- `keywords`: quitados "respuesta incidentes ciberseguridad" y "auditoría seguridad informática", por el mismo motivo.

### 6.8 Tarjeta del hero — hecho

Columna derecha de `.hero-inner`: un **ejemplo de aviso con aspecto de correo** (`.aviso-wrap` > `.aviso-caption` + `article.aviso-card`). Sustituye a la vista previa del informe del chequeo, que se eliminó (HTML y CSS `.trust-card` / `.report-*`).

Textos exactos (no cambiar sin avisarme):
- Etiqueta (`.aviso-caption`): **"Ejemplo de aviso"**. `aria-label` de la tarjeta: "Ejemplo de aviso de una alerta crítica".
- Remitente: avatar "M"; **"Mario · Bastión"**; **"Para ti y tu informático"**; hora **"Sáb 08:40"**.
- Insignia: **"Alerta crítica"** (con punto pulsante; sin animación si `prefers-reduced-motion`).
- Titular (un `<p>`, no un encabezado): **"Anoche, a las 21:47, alguien entró en tu servidor"** (la hora en `<time>`).
- Cuerpo: **"Qué tiene que hacer tu informático:"** y lista numerada: **1. Cerrar ese acceso remoto. 2. Cambiar la contraseña de la cuenta que usaron.**

Reglas:
- Es un **ejemplo declarado**: la etiqueta "Ejemplo de aviso" va **siempre visible** (regla 6, cero datos inventados presentados como reales).
- **Sin más texto, sin iconos y sin cajas**: tiene que parecer un correo, no una app.
- El titular es un `<p>`: sigue habiendo **un solo `h1`** y la estructura de encabezados no cambia.
- **Las horas deben cuadrar** con los plazos de aviso (6.2) y con la columna "Con Bastión" de `#historia`: entrada el viernes a las 21:47 y aviso el sábado a las 08:40 (antes de las 10:00; cae en el caso "de noche / fin de semana"). Si cambias la hora de entrada, la del aviso o los plazos, revisa los tres sitios a la vez. Las acciones (cerrar el acceso, cambiar la contraseña) las hace el informático, nunca yo (regla 12).
- Tokens añadidos al `:root` para esta tarjeta: `--coral-light`, `--coral-glow`, `--coral-line`, `--line-dark`, `--shadow-xl`. Reutiliza `--navy-light`, `--sky` y `--text-light`, que ya existían.
- Responsive: ≤960px la tarjeta pasa debajo de los botones (`.aviso-wrap { max-width: 420px }`); ≤640px, `.aviso-card` con menos relleno y `.aviso-title` a 1.3rem. Misma animación de entrada que tenía la tarjeta anterior (`fadeUp`, en `.aviso-wrap`).

---

## 7. Convenciones técnicas

- Proyecto Astro. La landing es **un único archivo `.astro`** con todos los estilos en el `<style>` del `<head>` y las variables en `:root`.
- Añade el CSS nuevo en ese mismo `<style>`, con un comentario de cabecera por sección (`/* VIGILANCIA */`), siguiendo el estilo existente. **No crees componentes ni archivos nuevos** salvo que te lo pida.
- **Reutiliza clases existentes:** `.container`, `.section-label`, `h2`, `.section-desc`, `.svc-grid`, `.svc-card`, `.svc-num`, `.svc-icon` (y sus variantes), `.svc-tag`, `.btn`, `.btn-primary`, `.btn-outline`, `.fade-in`.
- **Nada de colores escritos a mano:** usa los tokens (`--navy`, `--teal`, `--amber`, `--coral`, `--text`, `--border`...) y, si hace falta uno nuevo, añádelo al `:root`.
- Tipografía: Plus Jakarta Sans para el texto, IBM Plex Mono para etiquetas, horas, precios y números de paso.
- **Fuentes servidas desde `/public/fonts` (woff2), nunca desde Google Fonts, por el RGPD. Los archivos de fuente deben estar en git.** Son 3 archivos: `PlusJakartaSans-Variable.woff2` (variable, `wght` 200–800, declarada como `font-weight: 400 800`), `IBMPlexMono-Regular.woff2` (400) e `IBMPlexMono-Medium.woff2` (500). Rutas absolutas desde la raíz (`/fonts/...`), `font-display: swap`, mismo nombre de familia en `@font-face` que en `--font` / `--mono`, y el mismo bloque `@font-face` en `index.astro` y `legal.astro`. Si añades un peso o una fuente nueva, añade el `.woff2` a `public/fonts/` **en el mismo commit** que el `@font-face`.
  - **Lección (28/09 → 08/10):** el commit del 28/09 subió el `@font-face` pero **no** los `.woff2`, así que producción pedía `/fonts/...`, recibía 404 y mostraba la fuente del sistema. Los archivos se subieron el 08/10 (`fa0d230`) y desde entonces producción sirve las fuentes bien (comprobado: 200, `font/woff2`, y tipografía idéntica a local píxel a píxel). Si alguien sigue viendo la fuente de reserva tras un despliegue, suele ser caché del navegador o de Cloudflare: recarga forzada (Ctrl+Shift+R) o purgar caché en Cloudflare.
- **Iconos:** SVG en línea, estilo Lucide (viewBox 24×24, stroke 2, `currentColor`). Sin emojis.
- **Iconos de tarjetas: siempre en teal (`--teal-bg` / `--teal`); ámbar y coral se reservan para riesgos y alertas.** `.svc-icon.shield` (fondo `var(--teal-bg)`, trazo `var(--teal)`) es **la única variante** y la usan las 6 tarjetas de `#chequeo` y `#vigilancia`. Las variantes `.llave`, `.lock`, `.eye` (grises) y `.chart` (ámbar) se eliminaron. Los tokens `--amber`, `--amber-bg` y `--coral` siguen en `:root` para riesgos y alertas; no los uses en iconos de tarjeta.
- **Animaciones:** clase `fade-in` en lo que deba aparecer al hacer scroll.
- **Responsive:** breakpoints a 960px y 640px. Toda rejilla nueva pasa a una columna. Revisa a 375px de ancho que no haya scroll horizontal.
- **Altura de la barra en `--nav-h`.** `--nav-h` es la **altura real de la barra fija, borde de 1px incluido**: 87px en escritorio y 85px en el breakpoint de 768px (medido con `getBoundingClientRect`; `.nav-inner` mide `--nav-h − 1px`). Es la única fuente de esa altura: la usan `.nav-inner`, el menú desplegable móvil y el hero. Si cambias la barra, cámbiala solo en `--nav-h` y vuelve a medirla.
- **`scroll-padding-top: calc(var(--nav-h) - 8px)`: mejor tapar unos píxeles que dejar asomar la sección anterior.** Va en `html` y es lo que posiciona los saltos del menú; la sección queda 8px por debajo del borde superior de la barra, así que la barra tapa un poco del relleno de arriba de la sección, pero no asoma nada de la anterior y se ven enteros la etiqueta y el título. Ninguna `section` lleva `scroll-margin-top` propio (no deben sumarse). El menú móvil ya se cierra al pulsar un enlace (JS existente).
- **En móvil, la primera pantalla muestra solo el hero; la tarjeta de aviso aparece al deslizar.** En ≤640px la columna de texto del hero (`.hero-text`) ocupa `100svh − --nav-h − 1rem` (con `100vh` como alternativa), centrada en vertical, y `.hero` empieza a `--nav-h + 1rem`. En escritorio no cambia nada. En móviles bajos (`max-width:640px` y `max-height:620px`, p. ej. 375×553) un bloque extra aprieta el espaciado del hero (insignia, h1 a 2rem, subtítulo, nota) para que los dos botones quepan enteros; si tocas el texto del hero, vuelve a comprobar a 375×553, 390×664 y 412×790 que no asoma nada de la tarjeta de aviso y que los dos botones se ven enteros.
- Sin dependencias nuevas y sin frameworks. JavaScript solo si es imprescindible.
- **Accesibilidad:** un solo `h1`; un `h2` por sección y `h3` dentro; `alt` en imágenes; `rel="noopener noreferrer"` en enlaces externos.

---

## 8. Decisiones pendientes (pregúntame antes de publicar lo que dependa de ellas)

- [ ] Especialista en respuesta a incidentes al que derivar cuando detecto un ataque en marcha. (Desbloquea la pregunta 6.)
- [ ] Lista de informáticos de confianza para clientes que no tienen uno. (Desbloquea la pregunta 8.)
- [ ] Contrato de encargado del tratamiento (RGPD) y confirmación de que el servidor de Hetzner está en la UE. (Desbloquea la pregunta 9.)
- [ ] Alertas críticas enviadas automáticamente también al informático del cliente (plan de respaldo). Hasta que esté montado, no se promete en la web. (Desbloquea las frases de respaldo de 6.3 y de la pregunta 2.)
- [ ] Revisar la imagen `og-bastion.png` (la que se ve al compartir la web): que no tenga mensajes antiguos (SecOps, auditoría, respuesta a incidentes).

### Decidido

- Datos reales para "Quién soy": casi 7 años en ciberseguridad en grandes empresas. No se nombran las empresas ni se publican certificaciones.
- Hero genérico, sin nicho de sector (el nicho va en las llamadas).
- Producto de entrada: "Chequeo de 14 días", 900 € + IVA, hasta 2 servidores y 10 puestos, en 3 pasos. Contenido completo en la sección 2.
- La sonda la instala el informático del cliente guiado por mí (si no hay informático, yo con autorización por escrito).
- Descuento del chequeo en las tres primeras cuotas si contrata la vigilancia en los 30 días siguientes al informe (el chequeo le sale gratis).
- La vigilancia siempre empieza por el chequeo; no hay alta directa sin chequeo.
- Vigilancia: desde 390 €/mes + IVA con hasta 2 servidores y 10 puestos; con más equipos, precio cerrado tras el chequeo. La tarifa por equipo adicional es interna y no se publica.
- Todos los precios se publican sin IVA, siempre con "+ IVA" visible. En `#chequeo` y `#vigilancia`, mismo orden: título → frase corta → bloque `.price-block` unificado → tarjetas → resto. Los precios de lanzamiento o descuentos puntuales pactados en llamadas no se publican.
- Sin permanencia, 30 días de preaviso.
- Plazos de aviso de alertas críticas: menos de 1 hora de lunes a viernes de 9:00 a 18:00; fuera de ese horario, antes de las 10:00 del día siguiente, fines de semana y festivos incluidos.
- Número limitado de clientes (el número no se publica).
- Correo: contesto el mismo día laborable.
- Calendario para la llamada de 10 minutos: https://cal.com/mariobastion/10min
- Calendario para pedir el Chequeo de 14 días (botones principales, nav y botón flotante): https://cal.com/mariobastion/30min. El correo (info@bastiondefensa.com) queda como alternativa discreta en el CTA final, no en el hero.
- Datos al darse de baja: informes + alertas en CSV en 30 días, borrado con certificado, desinstalación por su informático.
- Orden de secciones y títulos de la sección 5.
- La respuesta automática no se ofrece.
- Cargo en "Quién soy": "Ingeniero de ciberseguridad".
- Nunca toco los sistemas del cliente, salvo instalar la sonda si no tiene informático. Ni correcciones ni respuesta a incidentes.

---

## 9. Orden de trabajo

### Ronda 1 — hecha

1. ✅ Arreglos rápidos. 2. ✅ `#historia`. 3. ✅ `#vigilancia`. 4. ✅ `#por-que`. 5. ✅ `#preguntas`. 6. ✅ CTA final y botón flotante. 7. ✅ Nav. 8. ✅ Metadatos y JSON-LD. 9. ✅ Tarjeta del hero. 10. ✅ Limpieza de CSS huérfano.

### Ronda 2 — hecha (25/09/2026)

1. ✅ Frase falsa "el sistema sigue siendo tuyo" — solo aparecía una vez, en la intro de `#por-que`. Sustituida por el texto correcto de la sección 2. Confirmado por grep en todo el archivo que no queda ninguna variante.
2. ✅ `#chequeo`: paso 01 reescrito ("tu informático instala la sonda, guiado por mí"), nuevo bloque "Qué incluye" (6 puntos con marca de verificación) y línea destacada del descuento.
3. ✅ `#historia`: columna "Con Bastión" con el texto definitivo — "me salta la alerta" y "Sábado, antes de las 10:00".
4. ✅ `#vigilancia`: bloque de precio destacado ("Desde 290 €/mes" + condiciones) y línea de plazos de aviso de alertas críticas.
5. ✅ `#por-que`: tabla ampliada a 5 filas (con quién hablas, permanencia, si te vas, qué pagas, aviso de alerta crítica) y bloque "¿Y si solo eres tú?" con el texto definitivo (número limitado de empresas).
6. ✅ `#preguntas`: 1, 2, 4, 5, 7, 10, 14 actualizadas; 11 y 13 con respuesta nueva (ya no dependen de datos); 12 añadida ("¿Qué pasa con mis datos si lo dejo?"). Las preguntas 6, 8 y 9 siguen comentadas con TODO, tal como pedía la tarea.
7. ✅ `#contacto` y hero: botón "Prefiero una llamada de 10 minutos" y el secundario del hero apuntan a `https://cal.com/mariobastion/10min` (con `target="_blank" rel="noopener noreferrer"`). Añadido "Sin permanencia." al texto del CTA y "Te contesto el mismo día laborable." debajo de los botones.
8. ✅ Revisión final: sin verbos prohibidos de la regla 12 en todo el archivo (grep limpio), sin precio por equipo adicional ni número máximo de clientes (regla 13), todos los `target="_blank"` llevan `rel="noopener noreferrer"`, y los plazos mencionados en toda la página coinciden con los únicos autorizados en la sección 2. Los bloques nuevos usan `max-width`, `flex-wrap` o `overflow-x:auto` según corresponda para no desbordar a 375px — revisado por cálculo de anchos, sin navegador headless disponible en esta máquina para captura visual real.

Tras cada paso: validado contra `http://127.0.0.1:4321` (el build formal sigue bloqueado por el proceso root, ver sección 1).

### Ronda 3 — hecha (28/09/2026): nuevos precios

1. ✅ Chequeo: 500 € → **900 € + IVA**. Vigilancia: 290 €/mes → **390 €/mes + IVA**. Actualizado en `#chequeo`, `#vigilancia`, la FAQ 1 y la meta description (único sitio de metadatos que mencionaba precio).
2. ✅ Creado el bloque de precio unificado `.price-block` (cifra grande en mono + "+ IVA" pequeño + línea de qué incluye), usado igual en `#chequeo` y `#vigilancia`. Orden final (rectificado el 28/09/2026): título → frase corta (`.section-desc`) → bloque de precio → tarjetas → resto. En `#vigilancia` se añadió `.section-desc` nueva ("La sonda se queda y sigo vigilando tu red todos los días del año.") que antes no existía. Sustituye a los antiguos `.precio-chip` (chequeo) y `.precio-tag`/`.precio-detalle` (vigilancia), eliminados.
3. ✅ Añadidas las reglas de copy 14 y 15 (precios siempre "+ IVA", precio lo primero con bloque unificado; descuentos puntuales de llamadas nunca se publican).
4. ✅ Revisado que ningún "500" ni "290" quedara como precio suelto en el archivo (grep limpio; los únicos "500"/"290" restantes son valores de CSS sin relación, como `font-weight: 500`).
5. ⏳ No pude confirmar visualmente el responsive a 375px (sigue sin haber navegador headless en esta máquina); revisado por diseño: el bloque no usa `flex` ni `white-space: nowrap`, así que el texto envuelve con normalidad y no puede desbordar horizontalmente.

### Ronda 4 — hecha (28/09/2026): rediseño de `.price-block`

1. ✅ `.price-block` rediseñado como franja horizontal en `var(--navy)`, a lo ancho del contenedor, bordes redondeados, sin sombra ni hover. Layout en dos columnas con flexbox: `.price-left` (cifra en blanco + `.price-vat` pequeño) y `.price-right` (texto de qué incluye en blanco con opacidad reducida). En móvil (≤640px) pasa a columna vertical: cifra arriba, texto debajo. Mismo bloque en `#chequeo` y `#vigilancia`.
2. ✅ El fondo blanco con borde del diseño anterior queda descartado — ya no se parece a las tarjetas `.svc-card`, que era justo el objetivo.
3. ✅ **Rectificado el mismo día:** la caja ya no se extiende a todo el ancho del contenedor — `max-width: 560px`, igual que la frase corta de arriba, para que quede alineada con ella.
4. ✅ **Rectificado otra vez:** el layout ya no es en dos columnas en escritorio (se veía apretado en `#vigilancia`, con dos líneas de texto en muy poco ancho). Ahora es columna siempre, en escritorio y en móvil: cifra arriba, texto de qué incluye debajo. Se quitó el `flex-direction: row` de escritorio y su media query de excepción para móvil, que ya no hace falta.

### Auditoría (28/09/2026): cambios de Mario en VS Code sin comunicar

Mario avisó de que había tocado el código directamente en VS Code. Comparé todo `index.astro` frase por frase contra lo que este archivo documentaba y encontré 3 discrepancias reales (el resto del contenido citado textualmente en este documento seguía coincidiendo). Las tres eran retoques de estilo/tono, no cambios de negocio, así que actualicé este documento para que refleje el código (no al revés):

1. `#chequeo`, paso 01: el texto se acortó — ya no dice "sonda **que solo observa**" ni "**No cambia nada ni** afecta". Queda: *"Tu informático instala una sonda, guiado por mí. No afecta a vuestra forma de trabajar."*
2. `#chequeo`, línea del descuento: cambió de "te descuento el chequeo en las tres primeras cuotas" a *"el chequeo te sale gratis: te lo descuento de tus tres primeras cuotas"* (mismo significado, más directo). Esta discrepancia en realidad venía ya desde la Ronda 3 y se me había pasado corregirla en su momento.
3. `#historia`, descripción bajo el título: se acortó, quitando ", con y sin alguien vigilando." Queda: *"Esto es lo que puede pasar en tu empresa un fin de semana cualquiera."*

No toqué el código en esta auditoría, solo la documentación.

---

## 10. Legal (`/legal`)

- **Cookies y analítica:** la web no usa ninguna (confirmado revisando `index.astro` y `legal.astro` el 28/09/2026: sin scripts de terceros, sin `document.cookie`, sin analítica). El aviso legal dice esto explícitamente en su apartado 3. **Si algún día se añade cualquier cosa que use cookies o analítica** (Google Analytics, un chat en vivo, un píxel de anuncios...), avisa a Mario antes de publicarlo: hace falta un aviso de cookies y hay que actualizar la política.
- **Si se añade otro proveedor que trate datos personales** (formulario propio, chat, herramienta de analítica, CRM...), hay que añadirlo a la lista "Con quién los comparto" del apartado 2 de `/legal`.
- **Proveedores confirmados** (28/09/2026, ya rellenados en `/legal`, apartado 2, "Con quién los comparto"): correo con **Proton AG (Suiza)**; hosting con **Cloudflare, Inc. (EE. UU.)**, plan gratuito de Cloudflare Pages para sitios estáticos.
- **Domicilio** (ya resuelto y publicado): Calle Filipinas, 2, 2ºD, C.P. 02005, Albacete (Albacete), España.
- **NIF:** 48261177R — no tocar, ya estaba correcto en el archivo.
- **Fuentes autoalojadas** (28/09/2026): Plus Jakarta Sans (variable, un solo `.woff2` con `font-weight: 400 800`) e IBM Plex Mono (400 y 500) se sirven desde `public/fonts/` vía `@font-face`, en `index.astro` y `legal.astro`. Ya no hay enlaces a `fonts.googleapis.com` ni `fonts.gstatic.com` en ninguna de las dos páginas.
