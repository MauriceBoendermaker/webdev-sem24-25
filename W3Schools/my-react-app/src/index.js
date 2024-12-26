import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }

    hello = function () {
        return "Hello World!";
    }

    hello = () => {
        return "Hello World!";
    }

    hello = () => "Hello World!";

    hello = (val) => "Hello " + val;

    hello = val => "Hello " + val;
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}

const mycar = new Model("Ford", "Mustang");
root.render(mycar.show());

class Header {
    constructor() {
        this.color = "Red";
    }

    // Regular function:
    changeColor = function () {
        document.getElementById("demo").innerHTML += this;
    }

    // Arrow function:
    changeColor2 = () => {
        document.getElementById("demo2").innerHTML += this;
    }
}

const myheader = new Header();

// The window object calls the function:
window.addEventListener("load", myheader.changeColor);
window.addEventListener("load", myheader.changeColor2);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
document.getElementById("btn2").addEventListener("click", myheader.changeColor2);

var x = 5.6;
let y = 5.6;
const z = 5.6;

const myArray = ['apple', 'banana', 'orange']

const myList = myArray.map((item) => <p>{item}</p>)
root.render(myList)