# Documento Base para Entregable PDF
*Nota para el estudiante: Copia este contenido, rellena tus datos, adjunta las capturas de pantalla solicitadas donde se indica, y guárdalo como PDF bajo el nombre "Actividad9_ApellidoPaternoPrimerNombre.pdf".*

---

## Portada
**[Logotipo de la institución]**
**TSU:** [Nombre de tu carrera]
**Asignatura:** [Nombre de la Asignatura]
**Cuatrimestre y Grupo:** [X Cuatrimestre, Grupo Y]
**Alumno:** [Tu Nombre Completo]

---

## Desarrollo de la Actividad

### 1. Configuración de React Router
Para habilitar el sistema de navegación en la Single Page Application (SPA), se instaló la librería `react-router-dom`. En el archivo `main.jsx`, se envolvió la aplicación completa dentro del componente `<BrowserRouter>`, permitiendo así utilizar el historial del navegador sin recargar la página.

En `App.jsx` se estructuraron las rutas usando el componente `<Routes>` y se asignó cada `<Route>` a su vista correspondiente, logrando una arquitectura limpia e independiente del estado global para la navegación.

**[📌 INSERTA AQUÍ CAPTURA DE CÓDIGO DE APP.JSX O MAIN.JSX]**

### 2. Creación de vistas principales
El proyecto ahora cuenta con las siguientes vistas funcionales:
1. **Home**: Pantalla de inicio con cartelera de estrenos.
2. **Cartelera**: Vista dedicada a todas las películas en exhibición.
3. **Alimentos**: Sección de dulcería y snacks.
4. **Otros**: Información adicional.
5. **Detalles de Película** (Ruta dinámica `/pelicula/:id`): Muestra la información específica de una película seleccionada.
6. **Perfil** *(Página adicional)*: Se agregó la vista `/perfil` para simular un área de usuario registrado, aportando contexto funcional al sitio web de un cine.

**[📌 INSERTA AQUÍ CAPTURAS DE PANTALLA DE LAS NUEVAS VISTAS (ej. RUTA DE PERFIL / HOME)]**

### 3. Rutas dinámicas
Se modificó el componente de detalle de la película (`Detalle.jsx`) para que reciba la película a renderizar a través de la URL (ruta dinámica `/pelicula/:id`) y no a través de "Props" o el estado de `App.jsx`. Para esto, se utilizó el hook `useParams()` que lee el parámetro `id` de la URL, lo busca en nuestro archivo de datos (`peliculas.js`), y renderiza el contenido apropiado automáticamente. Esto garantiza que cada película tenga una URL única, mejorando el flujo de navegación y abriendo la posibilidad de compartir el enlace directamente.

**[📌 INSERTA AQUÍ CAPTURA DE CÓDIGO DEL USO DE useParams() EN DETALLE.JSX]**

### 4. Navegación Visible y UX (Link vs NavLink)
En la barra de navegación (`Header.jsx`) se eliminaron las etiquetas estáticas HTML `<a>` y se implementó `NavLink` de React Router. 
**Justificación UX:** Se eligió `NavLink` sobre opciones estándar como `Link` porque `NavLink` inyecta automáticamente una propiedad de estado `isActive` cuando la URL del navegador coincide con la ruta del enlace. Gracias a esto, se configuró para que resalte la página actual en **color rojo (#E71235)** y le añada un subrayado visible a la pestaña activa. De esta forma, el usuario siempre sabe exactamente en qué sección de la plataforma se encuentra con un solo vistazo rápido, mejorando exponencialmente la Experiencia de Usuario.

**[📌 INSERTA AQUÍ CAPTURA DE LA BARRA DE NAVEGACIÓN FUNCIONANDO (CON LA PESTAÑA ACTIVA RESALTADA)]**

---

## Conclusión
Implementar `React Router` transformó el proyecto de un conjunto de componentes en una verdadera *Single Page Application* profesional. Ahora la plataforma maneja las transiciones de página de manera imperceptible y veloz. El uso de rutas dinámicas demostró ser fundamental para escalar datos masivos (como las películas) sin necesidad de crear una página diferente para cada entidad. Además, integrar indicativos visuales a través del estado de la interfaz como el `isActive` fue una decisión crucial para garantizar que el usuario nunca se sienta perdido dentro del flujo de la plataforma. La navegación intuitiva es actualmente un pilar del UX exitoso y esto quedó demostrado en la práctica.
