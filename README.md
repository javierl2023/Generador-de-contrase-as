# Password Generator

This is a simple password generator application designed to help users create secure passwords. The application allows users to specify the length of the password and ensures that the generated passwords contain a mix of uppercase letters, lowercase letters, numbers, and symbols. 

## Features

- Generate secure passwords with a customizable length (minimum of 4 characters and a maximum of 25 characters).
- Passwords include a combination of:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (e.g., !@#$%^&*)
- Keeps a history of generated passwords, ensuring no duplicates.

## Project Structure

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

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/password-generator.git
   ```
2. Navigate to the project directory:
   ```
   cd password-generator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `src/index.html` in your web browser.
2. Enter the desired password length (between 4 and 25 characters).
3. Click the "Generate Password" button to create a new password.
4. View the generated password and its history below the input fields.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.