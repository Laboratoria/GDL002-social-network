# Paws

Es terrible estar en la situación de que tu mascota salió corriendo despavorido de la casa porque tu hermanito dejó la puerta abierta o que sea muy tardado encontrar quien puede adoptar a *Firulais.* 

## ¿Cómo surgió Paws?
Al notar que cada vez,  hay una gran cantidad de personas que cuentan con mascotas y al momento de que se les extravían o verse en la necesidad de darlas en adopción :( , nos dimos cuenta de que existen varios grupos de rescate y/o adopción de mascotas en Facebook que los usuarios utilizan para pedir ayuda por medio de una publicación y finalmente ver si alguien la encuentra y poder seguir siendo felices a su lado. 

## Resolviendo la problemática
Por lo que se vió la necesidad de encuestar a 60 dueños de mascotas ([Resultados encuestas](https://docs.google.com/forms/d/1SJRiXrmyt43-qs4E3k32E9OCF9ME8akMhWEBjxdOPjQ/edit#responses)) donde los usuarios expresaron que en dichos grupos:

 - *"La información se pierde ya que es demasiada."*
 - *"No están actualizados por lo que no sabes si la mascota sigue perdida."*
 - *"Algunas publicaciones no son de la temática."*

Lo cual estas y una gran variedad de respuestas ayudaron a idear así como crear **Paws,** una red social que se enfoca exclusivamente para publicar si tu mascota esta extraviada y/o necesites difundir alguna que se encuentra en adopción y  así elegir quien será el mejor adoptante. 

## Elementos básicos y funcionalidad
***Paws*** cuenta con una página de bienvenida donde se puede iniciar sesión de dos maneras:

 1. Registrarse con un email válido.
 2. Iniciar directamente la sesión.

Al registrarse, se le envía un correo al usuario -el cual utilizó previamente-  para autentificar la cuenta para que después pueda entrar a la página y poder realizar la publicación que desee o simplemente navegar. 

Una vez iniciando sesión, la red social cuenta con un muro donde se visualizan 4 iconos en la parte inferior de la página y así el usuario decide que necesita. Los iconos son:

 1. **Home:** *muro de bienvenida*
 2. **Lost:** *puedes publicar tu mascota perdida y/o conocer cuales son otras que se encuentran en la misma situación*
 3. **Adoption:** *misma función que Lost pero en este caso sería para adoptar mascotas con la diferencia de que se puede dar like a las publicaciones*
 4. **Help:** *Son las reglas e instrucciones para utilizar* **Paws**

Cabe mencionar que al hacer una publicación en cualquiera de las secciones de **Lost** o **Adoption**, se puede filtrar para que lo vean tus *amigos* (sólo tus contactos lo verán) o *público* (cualquier usuario de Paws).

En el lado superior izquierdo, se encuentra un menú desplegable con las opciones de *Mi perfil* y *Cerrar Sesión.* 

## Principales funcionalidades del producto
Esto es posible ya que si tu mascota se encuentra extraviada o en adopción, solo se debe de llenar un  pequeño formulario. 

En el primer caso debe contener: 

 - *Foto*
 - *Nombre* 
 - *Visto por última vez* 
 - *Descripción* (raza, talla) 
 - *Señas particulares*
 - *Si traía collar o ropa* 
 -  *Contacto* (nombre & número). 

En el segundo debe incluir:

 - *Foto*
 - *Nombre,* 
 - *Descripción* (raza, talla)
 - *Si convive con otras mascotas*
 -  *Carácter*
 -  *Contacto* (nombre & número).  
 
Y todo esto fue gracias a que los usuarios  mencionaron que esa información es la más relevante conocer. Así que todas las publicaciones tendrán el mismo formato ayudando a que todas cuenten con uniformidad.


## Tests de usabilidad
En una primera iteración, se les mostró a los usuarios como luciría **Paws**, donde varios comentaron que los colores (naranja, azul marino, verde y mostaza) eran muy serios y por eso daba la impresión que era sobre "comida", por lo que se decidió cambiarlos y agregar una imagen de huellitas de fondo dando el toque cursi que los usuarios solicitaron.

También se modificó el muro de bienvenida ya que en un principio contaba con 5 botones (*mascotas extraviadas, mascotas en adopción, reencuentros*, por mencionar algunos) y visualmente no eran atractivos y/o resultaban confusos para los usuarios así que se resumieron los botones en 4 iconos siendo estos mas amigables e intuitivos.  


# Historias de usuario

## Pantalla de inicio y crear cuenta
El usuario puede visualizar una pantalla de inicio para conocer la temática de la página, iniciar sesión y/o crear una cuenta.


### DOD
   
 - [x] Header con nombre y título
 - [x] Botón de registro funcionando
 - [x] Botón de  iniciar sesión funcionando
 - [x] Se autentifica el correo del usuario para después poder iniciar sesión
 - [x] La contraseña es privada![enter image description here](https://lh3.googleusercontent.com/31x7BZwY-lBu3tS_CTvAWQunU00GJ0USRLmFCdf2dcri-5LLYJeh1UbmRmtOb8zzfpjcKej4paF9XQ "Welcome")
 - [x] Descripción de la página incluida
 - [x] Footer agregado
 - [x] Prototipo de alta fidelidad terminado

## Muro, hacer publicaciones , editarlas y/o borrarlas

### DOD
   
 - [x] Aparece el muro después de iniciar sesión 
 - [x] Se guarda el correo del usuario en la base de datos (Firebase)
 - [x] Los mensajes de error aparecen en español
 - [x] El usuario puede publicar un post
 - [x] El usuario puede publicar para amigos o público
 - [x] Se puede editar y eliminar un formulario
 - [x] Se le da like a las publicaciones de adopción
 - [x] Se puede cerrar sesión
 - [x] Se agregan imágenes 
 - [x] Confirma si en realidad quieres borrar una publicación
 
# Diseño de la interfaz

**Prototipo de baja fidelidad**


## Prototipo de alta fidelidad
![Welcome](https://lh3.googleusercontent.com/31x7BZwY-lBu3tS_CTvAWQunU00GJ0USRLmFCdf2dcri-5LLYJeh1UbmRmtOb8zzfpjcKej4paF9XQ "Welcome")

![Login](https://lh3.googleusercontent.com/_Pqq2d8A8XqTnCXEapf2PPUzOHPHKvU9ILotXth4ZwRTIlSvz9SS2U6ORkBiqTiv7M2N1umKdQzqvQ "Log in")
![Register](https://lh3.googleusercontent.com/pTJlBj58TiBkl85Pf4Jb2yondL9V_46I1v8RrxYonkxoaEeR63mgA5RBf2wBLlJp_b5W8DRdCQ0czQ "Register")

![Email](https://lh3.googleusercontent.com/Hgejgo9NaM8eemJ7-WzbQ_YKv9BsqDWPwSTL6qm0L5IU8N6LQvIDAUjZMKLczj_3Hia6svakwl17tQ "Email")
![Menu](https://lh3.googleusercontent.com/7_0Bd6o3tKQlaNasBneLYSZzA6UFeuYoh-zl8Q-9aw4W4y-n5i_RADkfDI4e29IPqrwRSOCxL5aABw "Profile")
![Buttons](https://lh3.googleusercontent.com/K_l-U0JpyrY-0Ylqac5NFTxvgFejnoZ5jdEhrXpKRBzV6VNVYIuuTfs2LBtOLUE2a17lHT4pecgNOA "Botones")
![Upload pic](https://lh3.googleusercontent.com/pkp9s_7TezqiMxSDVR2DZy4kG9VHijoEeV31W_6SSNrp2IQ3vdVssxlnCZcpQh9MCtC-oRLrpcnq1g "Upload pic")
![Template](https://lh3.googleusercontent.com/HA-erFM2U3G4702DgAgM1whuniqRsjt2Oj2AiCoEMRGcL7Uxk1hBVMy3Xw959NSadUW7a2OCRu8-Lw "Template")
![Edit or delete](https://lh3.googleusercontent.com/FDt62TPUYwAc1ydlSosGoLPrsPiUaGPRC67gWiouhb4IVnzLVPfu0TseQ0jhPE4Zwacvf7GuoHC_mQ "Edit or delete")
![Delete confirmation](https://lh3.googleusercontent.com/DwTb1u7yYYD4bWGEwADiHx5rlYwwjwHFIV0iWnIsI4AzeF1akSE5t695A6gqSfFVZPCP8wvPZPSlJA "Delete confirmation")


## Prototipo alta fidelidad
En el siguiente enlace, se puede encontrar el diseño y el flujo de ***Paws***. [Figma diseño](https://www.figma.com/file/bkR9sXI0Yz8MD3vj7xdkuXpu/pet-patrol?node-id=0%3A1)


