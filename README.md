# Generador de contraseñas | Password generator

Se trata de una sencilla aplicación generadora de contraseñas diseñada para ayudar a los usuarios a crear contraseñas seguras. La aplicación permite a los usuarios especificar la longitud de la contraseña y garantiza que las contraseñas generadas contengan una combinación de letras mayúsculas, minúsculas, números y símbolos.

This is a simple password generator app designed to help users create strong passwords. The app allows users to specify password length and ensures that generated passwords contain a combination of uppercase and lowercase letters, numbers, and symbols.

## Características | Characteristics

- Genera contraseñas seguras con una longitud personalizable (mínimo de 4 caracteres y máximo de 25 caracteres).
- Las contraseñas incluyen una combinación de:
- Letras mayúsculas (A-Z)
- Letras minúsculas (a-z)
- Números (0-9)
- Símbolos (p. ej., !@#$%^&*)
- Mantiene un historial de las contraseñas generadas, lo que garantiza que no haya contraseñas duplicadas.

- Generates strong passwords with customizable length (minimum 4 characters and maximum 25 characters).
- Passwords include a combination of:
- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)
- Symbols (e.g. !@#$%^&*)
- Maintains a history of generated passwords, ensuring there are no duplicate passwords.

## Estructura del proyecto | Project structure

```
password-generator
├── src
│   ├── index.html      # Main HTML document
│   ├── styles.css      # CSS styles for the application
│   ├── app.js          # JavaScript logic for password generation
│   └── history.js       # Manages password history
├── package.json        # npm configuration file
└── README.md           # Project documentation
```

## Instalación | Installing

1. Clone the repository: | Clonar el repositorio:
   ```
   git clone https://github.com/yourusername/password-generator.git
   ```
2. Navigate to the project directory: | Vaya al directorio del proyecto:
   ```
   cd password-generator
   ```
3. Install the dependencies: | Instalar las dependencias:
   ```
   npm install
   ```

## Use | Use

1. Abra `src/index.html` en su navegador web.
2. Ingrese la longitud de contraseña deseada (entre 4 y 25 caracteres).
3. Haga clic en el botón "Generar contraseña" para crear una nueva contraseña.
4. Vea la contraseña generada y su historial debajo de los campos de entrada.

1. Open `src/index.html` in your web browser.
2. Enter the desired password length (between 4 and 25 characters).
3. Click the "Generate Password" button to create a new password.
4. View the generated password and its history below the input fields.
## Contribuciones | Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions or improvements.
Se aceptan contribuciones! No dudes en enviar una solicitud de incorporación de cambios o abrir un problema para recibir sugerencias o mejoras.

## License | License

This project is licensed under the MIT License. See the LICENSE file for details.
Este proyecto está licenciado bajo la licencia MIT. Consulte el archivo LICENCIA para obtener más detalles.
