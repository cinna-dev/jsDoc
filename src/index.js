// @ts-check
const {
  add,
  subtract,
  divide,
  multiply
} = require('./calculator');

/**
 * @file index.js is the root file for this  example app
 * @author me
 * @see <a href="https//mywebsite.com">my website</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'Jon Doe';

/**
 * Array of grades
 * @type {Array<number>} 
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo Object
 * @type {{id: number|string, text:string}}
 */
const todo = {
  id: '1',
  text: 'Hello'
}

/**
 * Calculate tax
 * @param {number} amount - Total amount 
 * @param {number} tax - Tax parecentage
 * @returns {string} - Total with a Dollar Sign
 */

const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] id - Student age optional
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20,
  isActive: true
}

/**
 * Class to create a person object
 */
class Person {
  /**
   * 
   * @param {Object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {sting} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {number} age Persons age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with the name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello. my name is ${this.name} and i am ${this.age}`);
  }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
  name: 'John Doe',
  age: 30
})
console.log(person1.greet());

console.log(add(20, 30));
