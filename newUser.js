// Define a User class with constructor and methods
class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
    // A method to get the user credentials
    getCredentials() {
      return `${this.username}:${this.password}`;
    }
    // A method to change the user password
    setPassword(newPassword) {
      this.password = newPassword;
    }
    // A method to change the user email
    setEmail(newEmail) {
      this.email = newEmail;
    }
  }
  // Use the prompt function to get the user input
  let username = prompt("Enter your username");
  let email = prompt("Enter your email");
  let password = prompt("Enter your password");
  // Create an instance of User class with the user input
  let user = new User(username, email, password);
  // Test the methods
  console.log(user.getCredentials()); // username:password
  user.setPassword(prompt("Enter a new password"));
  console.log(user.getCredentials()); // username:newPassword
  user.setEmail(prompt("Enter a new email"));
  console.log(user.email); // newEmail