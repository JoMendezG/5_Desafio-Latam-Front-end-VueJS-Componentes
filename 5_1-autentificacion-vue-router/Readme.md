# - Creación de autentificación con Vue Router

## Descripción

Se requiere crear un sistema de autenticación mediante vue-router, este debe tener dos
componentes el componente Login y el componente Home conectados con un router, y el
cual tendrá un guard global que realice la función de un middleware, con esto debe ser
posible ingresar al home únicamente si el usuario está autenticado, y debe ser posible
ingresar al login únicamente si el usuario no está autenticado. La autenticación debe ser por
Firebase.

## Instrucciones

1. Crear un usuario para autenticación en Firebase, habilitar que la autenticación
   mediante correo y contraseña, traer la configuración y probar que la conexión sea
   exitosa con la función.

1. Crear dos componentes Login y Home, el Login debe tener un formulario con dos
   input, para el correo y contraseña y un botón para acceder al Home, y el Home debe
   tener un botón que con el que sea posible acceder al Login, además deben existir
   redirecciones para el Login si se ingresa a las rutas "/" y "\*" respectivamente. Esto
   debe ser posible con la implementación de un router con vue-router.

1. Creación de guard con lógica para el ingreso a los diferentes componentes según
   corresponda y a la vez poder autenticarse. También debe poder autenticarse con el
   botón salir del home.

## Resultado

![img1](src/assets/readme1.jpg)
![img2](src/assets/readme2.jpg)
![img3](src/assets/readme3.jpg)
