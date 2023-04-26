// Define a class for Employee
class Employee {
    constructor(name, type, salesTarget) {
      this.name = name;
      this.type = type;
      this.salesTarget = salesTarget;
    }
    // Define a method to calculate the payout
    calculatePayout() {
      // To be overridden by subclasses
    }
    // Define a method to display the payout
    displayPayout() {
      // To be overridden by subclasses
    }
  }
  // Define a subclass for SalariedEmployee
  class SalariedEmployee extends Employee {
    constructor(name, type, salesTarget, salary) {
      super(name, type, salesTarget);
      this.salary = salary;
    }
    // Override the calculatePayout method
    calculatePayout(sales) {
      let payout = this.salary;
      if (sales > this.salesTarget) {
        payout *= 1.1; // Increase by 10%
      }
      return payout;
    }
    // Override the displayPayout method
    displayPayout(sales) {
      let payout = this.calculatePayout(sales);
      console.log(`${this.name} is a ${this.type} employee with a monthly salary of R${this.salary}.`);
      console.log(`The sales target for ${this.name} is ${this.salesTarget} sales.`);
      console.log(`The actual sales for ${this.name} is ${sales} sales.`);
      console.log(`The payout for ${this.name} is R${payout}.`);
      console.log(`The formula for the payout is: salary * (1 + 0.1 * (sales > salesTarget))`);
      console.log("-------------------------------------------------");
    }
  }
  // Define a subclass for HourlyEmployee
  class HourlyEmployee extends Employee {
    constructor(name, type, salesTarget, hourlyRate) {
      super(name, type, salesTarget);
      this.hourlyRate = hourlyRate;
    }
  
    // Override the calculatePayout method
    calculatePayout(sales, hours) {
      let payout = this.hourlyRate * hours;
      if (sales > this.salesTarget) {
        payout *= 1.5; // Increase by 50%
      }
      return payout;
    }
    // Override the displayPayout method
    displayPayout(sales, hours) {
      let payout = this.calculatePayout(sales, hours);
      console.log(`${this.name} is a ${this.type} employee with an hourly rate of R${this.hourlyRate}.`);
      console.log(`The sales target for ${this.name} is ${this.salesTarget} sales.`);
      console.log(`The actual sales for ${this.name} is ${sales} sales.`);
      console.log(`The hours logged for ${this.name} is ${hours} hours.`);
      console.log(`The payout for ${this.name} is R${payout}.`);
      console.log(`The formula for the payout is: hourlyRate * hours * (1 + 0.5 * (sales > salesTarget))`);
      console.log("-------------------------------------------------");
    }
  }
  // Define a subclass for HybridEmployee
  class HybridEmployee extends Employee {
    constructor(name, type, salesTarget, salary, hourlyRate) {
      super(name, type, salesTarget);
      this.salary = salary;
      this.hourlyRate = hourlyRate;
    }
    // Override the calculatePayout method
    calculatePayout(sales, hours) {
      let payout = this.salary + this.hourlyRate * hours;
      if (sales > this.salesTarget) {
        payout *= 1.2; // Increase by 20%
      }
      return payout;
    }
    // Override the displayPayout method
    displayPayout(sales, hours) {
      let payout = this.calculatePayout(sales, hours);
      console.log(`${this.name} is a ${this.type} employee with a monthly salary of R${this.salary} and an hourly rate of R${this.hourlyRate}.`);
      console.log(`The sales target for ${this.name} is ${this.salesTarget} sales.`);
      console.log(`The actual sales for ${this.name} is ${sales} sales.`);
      console.log(`The hours logged for ${this.name} is ${hours} hours.`);
      console.log(`The payout for ${this.name} is R${payout}.`);
      console.log(`The formula for the payout is: (salary + hourlyRate * hours) * (1 + 0.2 * (sales > salesTarget))`);
      console.log("-------------------------------------------------");
    }
  }
  // Create some instances of different kinds of employees
  let alice = new SalariedEmployee("Alice", "salaried", 10, 3000);
  let bob = new SalariedEmployee("Bob", "salaried", 15, 4000);
  let charlie = new HourlyEmployee("Charlie", "hourly", 20, 25);
  let david = new HourlyEmployee("David", "hourly", 25, 30);
  let eve = new HybridEmployee("Eve", "hybrid", 30, 2000, 20);
  let frank = new HybridEmployee("Frank", "hybrid", 35, 2500, 25);
  // Display the payouts for each employee
  alice.displayPayout(12); // Alice exceeded the sales target
  bob.displayPayout(10); // Bob did not exceed the sales target
  charlie.displayPayout(22, 160); // Charlie exceeded the sales target and logged 160 hours
  david.displayPayout(20, 150); // David did not exceed the sales target and logged 150 hours
  eve.displayPayout(32, 100); // Eve exceeded the sales target and logged 100 hours
  frank.displayPayout(30, 120); // Frank did not exceed the sales target and logged 120 hours