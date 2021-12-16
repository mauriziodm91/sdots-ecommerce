# Challenge de storydots

Para este challenge quise crear lo mas cercano a una aplicacion de ecommerce

## Funciones

- carrito de compras
- Guardado de ordenes por usuario
- Administracion de productos por medio de cuenta de administrador
- Gestion de usuarios por medio de administrador
- Procedimientos de compra (envio, metodo de pago, etc)
- Integracion de script de pago de paypal
- Seeder para la base de datos en mongodb (usuarios y productos)

## Uso

### Variables de entorno

Cree un archivo .env con la siguiente informacion

```
NODE_ENV = development
PORT = 5000
MONGO_URI = tu uri de mongodb
JWT_SECRET = 'MAURIZIODM'
PAYPAL_CLIENT_ID = tu id de cliente de paypal
```

### Instale las dependencias (frontend y backend)

```
npm install
cd frontend
npm install
```

### Ejecucion

```
# Ejecutar frontend (:3000) y backend (:5000)
npm run dev

# Ejecutar backend solamente
npm run server
```

## Build & Deploy

```
# Crear un production build para el frontend
cd frontend
npm run build
```

### Importar y destruir datos en la base de datos

Se puede utilizar los siguientes comandos para importar o destruir la informacion de muestra cargada en la base de datos

```
# Importar datos
npm run data:import

# Destruir datos
npm run data:destroy
```

```
Usuarios de prueba para la aplicacion

admin@admin.com (Admin)
123456

maurizio@example.com (Customer)
123456

carlos@test.com (Customer)
hola
```

## Descripcion del Proyecto

Esta aplicacion consiste en un Frontend realizado con react.js decidi utilizar react Bootstrap para aplicar estilos y responsiveness a la aplicacion y uso decorativo de icons con los componentes de fontawesome, react router para hacer una single page aplication por medio de rutas, ademas utilice hooks y redux para la gestion del state dentro de la aplicacion. por ultimo use el source development kit de paypal para hacer un mockup de la funcion de pagos dentro de un sandbox.

las credenciales de inicio de sesion se almacenan en el localstorage asi como tambien los articulos agregados al carrito cuyo proceso de compra no se ha concretado

el backend esta hecho usando nodejs y express para el manejo de rutas y middleware con acceso privado haciendo uso de json webtokens. los datos sensibles como contraseñas de usuarios se encriptan con bcrypt, para la elaboracion de esquemas y conexion con la base de datos use el framework mongoose, y multer para la carga de archivos

los endpoints son los siguientes

```
/api/products Para los request a los productos
/api/users para registro y edicion y destruccion de
/api/orders para registro y listado de ordenes que generan usuarios
/api/upload para la subida de archivos de imagenes a la aplicacion

```

Solamente el usuario administrador puede modificar o eliminar productos y usuarios corrientes

## Funciones restantes

para este challenges tenia propuesto entregar una app completa lamentablemente debido a la falta de tiempo no pude implementar actions, reducers y constantes para la manipulacion de las ordenes asi como la solucion de unos minimos bugs en el manejo de sesiones.
