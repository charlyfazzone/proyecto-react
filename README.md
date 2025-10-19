Esta aplicación actúa como una plataforma de comunicación digital que facilita el intercambio de mensajes en tiempo real y gestiona la persistencia de las interacciones y los datos de usuario.

---

## 💾 Persistencia y Almacenamiento de Datos

La funcionalidad central del sistema es garantizar que la información se mantenga intacta entre sesiones. Esto se logra mediante la persistencia de:

- _Contactos (Usuarios):_ Almacenamiento y recuperación de la lista de usuarios con los que se han iniciado conversaciones.
- _Historial de Conversaciones:_ Registro cronológico de todos los _mensajes_ enviados y recibidos, manteniendo la integridad de las interacciones pasadas.

---

## 🎯 Módulos de la Interfaz de Usuario (UI)

La aplicación está segmentada en cuatro componentes clave que dirigen la experiencia del usuario y las funcionalidades del sistema:

### 🎫 Autenticación (Login)

- _Propósito:_ Proteger el acceso y verificar la identidad del usuario.
- _Mecanismo:_ Requiere la validación de _credenciales_ (nombre de usuario y contraseña) para iniciar una sesión privada en la plataforma.

### 📜 Lista de Contactos (Sidebar)

- _Propósito:_ Navegación y selección de la conversación deseada.
- _Mecanismo:_ Muestra una lista dinámica de _contactos_. Al seleccionar uno, se carga el historial de mensajes correspondiente en el módulo principal.

### 💬 Chat Principal (Interacción)

- _Propósito:_ Envío y recepción de mensajes en tiempo real.
- _Mecanismo:_ Incluye un área para la _composición del mensaje_ y un control de _envío_ ($\rightarrow$). Los mensajes se visualizan secuencialmente en el thread de conversación.

### ⚙️ Configuración (Settings)

- _Propósito:_ Personalización de la experiencia y la interfaz.
- _Opciones Disponibles:_
  - _Ahorro de Energía:_ Activa un modo visual de baja luminosidad (_Dark Mode_) optimizando la eficiencia energética y la ergonomía visual.
