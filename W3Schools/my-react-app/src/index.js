import React from 'react';
import ReactDOM from 'react-dom/client';
import CarComponentFile from './Car';
import { CarClass, CarClassProps, CarClassConstructorProps, CarClassGarageComponent, CarState, CarSetState } from './CarClass';

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


const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, , suv] = vehicles;


const myJSXElement = <h1>I Love JSX!</h1>;
const rootJSX = ReactDOM.createRoot(document.getElementById('rootJSX'));
rootJSX.render(myJSXElement);

const myNotJSXElement = React.createElement('h1', {}, 'I do not use JSX!');
const rootNotJSX = ReactDOM.createRoot(document.getElementById('rootNotJSX'));
rootNotJSX.render(myNotJSXElement);

const myExpressionElement = <h1>React is {5 + 5} times better with JSX</h1>;
const rootJSXExpression = ReactDOM.createRoot(document.getElementById('rootJSXExpression'));
rootJSXExpression.render(myExpressionElement);

const myLargeHTMLElement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);
const rootLargeHTMLElement = ReactDOM.createRoot(document.getElementById('rootLargeHTMLElement'));
rootLargeHTMLElement.render(myLargeHTMLElement)

const myTopLevelElement = (
    <div>
        <p>I am the first paragraph.</p>
        <p>I am the second paragraph.</p>
    </div>
);
const rootTopLevelElement = ReactDOM.createRoot(document.getElementById('rootTopLevelElement'));
rootTopLevelElement.render(myTopLevelElement);

const myFragmentElement = (
    <>
        <p>I am the first paragraph, wrapped inside of an empty HTML tag.</p>
        <p>I am the second paragraph, wrapped inside of an empty HTML tag.</p>
    </>
);
const rootFragmentElement = ReactDOM.createRoot(document.getElementById('rootFragmentElement'));
rootFragmentElement.render(myFragmentElement);

const myClosedElement = <input type="text" />;
const rootClosedElement = ReactDOM.createRoot(document.getElementById('rootClosedElement'));
rootClosedElement.render(myClosedElement);

const myClassElement = <h1 className="myClass">Hello World, I have a className as attribute</h1>;
const rootClassAttribute = ReactDOM.createRoot(document.getElementById('rootClassAttribute'));
rootClassAttribute.render(myClassElement);

const xIf = 1; // 11
let text = "Goodbye";
if (xIf < 10) {
    text = "Hello";
}
const myIfStatementElement = <h1>{text}</h1>
const rootIfStatementElement = ReactDOM.createRoot(document.getElementById('rootIfStatementElement'));
rootIfStatementElement.render(myIfStatementElement);

const xTernary = 11; // 1
const myTernaryOperatorElement = <h1>{(xTernary) < 10 ? "Hello" : "Goodbye"}</h1>;
const rootTernaryOperatorElement = ReactDOM.createRoot(document.getElementById('rootTernaryOperatorElement'));
rootTernaryOperatorElement.render(myTernaryOperatorElement);


function CarFunction() {
    return <h2>Hi, I am a car function component!</h2>;
}
const rootMyFirstFunctionComponent = ReactDOM.createRoot(document.getElementById('rootMyFirstFunctionComponent'));
rootMyFirstFunctionComponent.render(<CarFunction />)

const CarFunction2 = () => <h2>Hi, I am a one-liner car function component!</h2>;
const rootMyFirstOneLineFunctionComponent = ReactDOM.createRoot(document.getElementById('rootMyFirstOneLineFunctionComponent'));
rootMyFirstOneLineFunctionComponent.render(<CarFunction2 />);

function CarProps(car_props) {
    return <h2>I am a {car_props.color} Car!</h2>;
}
const rootCarProps = ReactDOM.createRoot(document.getElementById('rootCarProps'));
rootCarProps.render(<CarProps color="red" />);

function CarComponentsInComponents() {
    return <h2>I am a Car!</h2>;
}

function GarageComponent() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <CarComponentsInComponents />
        </>
    );
}
const rootGarageComponent = ReactDOM.createRoot(document.getElementById('rootGarageComponent'));
rootGarageComponent.render(<GarageComponent />);

const rootCarComponentFile = ReactDOM.createRoot(document.getElementById('rootCarComponentFile'));
rootCarComponentFile.render(<CarComponentFile />)


const rootMyFirstClassComponent = ReactDOM.createRoot(document.getElementById('rootMyFirstClassComponent'));
rootMyFirstClassComponent.render(<CarClass />)

const rootMyClassComponentWithProps = ReactDOM.createRoot(document.getElementById('rootMyClassComponentWithProps'));
rootMyClassComponentWithProps.render(<CarClassProps color="red" />)

const rootMyClassComponentWithConstructorProps = ReactDOM.createRoot(document.getElementById('rootMyClassComponentWithConstructorProps'));
rootMyClassComponentWithConstructorProps.render(<CarClassConstructorProps model="Mustang" />);

const rootCarClassGarageComponent = ReactDOM.createRoot(document.getElementById('rootCarClassGarageComponent'));
rootCarClassGarageComponent.render(<CarClassGarageComponent />)

const rootCarState = ReactDOM.createRoot(document.getElementById('rootCarState'));
rootCarState.render(<CarState />)

const rootCarSetState = ReactDOM.createRoot(document.getElementById('rootCarSetState'));
rootCarSetState.render(<CarSetState />)