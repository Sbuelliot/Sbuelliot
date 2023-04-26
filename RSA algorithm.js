function RSA() {
    var p = parseInt(prompt("Enter a prime number: "));
    var q = parseInt(prompt("Enter another prime number: "));
    var n = p * q;
    var e = parseInt(prompt("Enter a number that is relatively prime to " + (p - 1) * (q - 1) + ": "));
    var phi = (p - 1) * (q - 1);
    var d = parseInt(prompt("Enter a number that is the modular multiplicative inverse of " + e + " modulo " + phi + ": "));
    var message = prompt("Enter a message to encrypt: ");
    var encrypted = "";
    var decrypted = "";
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      var encryptedCharCode = Math.pow(charCode, e) % n;
      var decryptedCharCode = Math.pow(encryptedCharCode, d) % n;
      encrypted += String.fromCharCode(encryptedCharCode);
      decrypted += String.fromCharCode(decryptedCharCode);
    }
    console.log("p: " + p);
    console.log("q: " + q);
    console.log("n: " + n);
    console.log("e: " + e);
    console.log("phi: " + phi);
    console.log("d: " + d);
    console.log("message: " + message);
    console.log("encrypted: " + encrypted);
    console.log("decrypted: " + decrypted);
  }
  RSA();