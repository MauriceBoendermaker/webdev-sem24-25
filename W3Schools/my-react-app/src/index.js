import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CarComponentFile, MyReactPropsCarElement, MyReactPropsGarageElement, MyReactPropsGarageElementVariable, MyReactPropsGarageElementObject } from './Car';
import { CarClass, CarClassProps, CarClassConstructorProps, CarClassGarageComponent, CarState, CarSetState } from './CarClass';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


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


const rootMyReactPropsCarElement = ReactDOM.createRoot(document.getElementById('rootMyReactPropsCarElement'));
rootMyReactPropsCarElement.render(<MyReactPropsCarElement brand="Porsche" />);

const rootMyReactPropsGarageElement = ReactDOM.createRoot(document.getElementById('rootMyReactPropsGarageElement'));
rootMyReactPropsGarageElement.render(<MyReactPropsGarageElement />);

const rootMyReactPropsGarageElementVariable = ReactDOM.createRoot(document.getElementById('rootMyReactPropsGarageElementVariable'));
rootMyReactPropsGarageElementVariable.render(<MyReactPropsGarageElementVariable />)

const rootMyReactPropsGarageElementObject = ReactDOM.createRoot(document.getElementById('rootMyReactPropsGarageElementObject'));
rootMyReactPropsGarageElementObject.render(<MyReactPropsGarageElementObject />)


function FootballAddEvent() {
    const shoot = () => {
        alert("Great shot!");
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}
const rootAddingEvents = ReactDOM.createRoot(document.getElementById('rootAddingEvents'));
rootAddingEvents.render(<FootballAddEvent />);

function FootballPassArgument() {
    const shoot = (alertMessage) => {
        alert(alertMessage);
    }

    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
}
const rootPassingArguments = ReactDOM.createRoot(document.getElementById('rootPassingArguments'));
rootPassingArguments.render(<FootballPassArgument />)

function FootballEventObject() {
    const shoot = (a, b) => {
        alert(b.type);
        // b = React event that triggered this function, in this case the 'click' event
    }

    return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
}
const rootEventObjects = ReactDOM.createRoot(document.getElementById('rootEventObjects'));
rootEventObjects.render(<FootballEventObject />);


function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) return <MadeGoal />
    return <MissedGoal />
}
const rootGoal = ReactDOM.createRoot(document.getElementById('rootGoal'));
rootGoal.render(<Goal isGoal={false} />); // true

function GarageLogicalAndOperator(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </>
    );
}
const cars = ['Ford', 'BMW', 'Audi']
const rootGarageLogicalAndOperator = ReactDOM.createRoot(document.getElementById('rootGarageLogicalAndOperator'));
rootGarageLogicalAndOperator.render(<GarageLogicalAndOperator cars={cars} />)

function GoalTernaryOperator(props) {
    const isGoal = props.isGoal;
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    );
}
const rootGoalTernaryOperator = ReactDOM.createRoot(document.getElementById('rootGoalTernaryOperator'));
rootGoalTernaryOperator.render(<GoalTernaryOperator isGoal={true} />); // false


function CarMapMethod(props) {
    return <li>I am a {props.brand}</li>;
}

function GarageMapMethod() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my Map Garage?</h1>
            <ul>
                {cars.map((car) => <CarMapMethod brand={car} />)}
            </ul>
        </>
    );
}
const rootGarageMapMethod = ReactDOM.createRoot(document.getElementById('rootGarageMapMethod'));
rootGarageMapMethod.render(<GarageMapMethod />);

function GarageKeys() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <>
            <h1>Who lives in my Keys Garage?</h1>
            <ul>
                {cars.map((car) => <CarMapMethod key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}
const rootGarageKeys = ReactDOM.createRoot(document.getElementById('rootGarageKeys'));
rootGarageKeys.render(<GarageKeys />)


function MyForm() {
    return (
        <form>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    );
}
const rootAddForm = ReactDOM.createRoot(document.getElementById('rootAddForm'));
rootAddForm.render(<MyForm />);

function HandleForm() {
    const [name, setName] = useState("");
    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
        </form>
    );
}
const rootHandleForm = ReactDOM.createRoot(document.getElementById('rootHandleForm'));
rootHandleForm.render(<HandleForm />)

function HandleSubmitForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: ' + name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
}
const rootHandleSubmitForm = ReactDOM.createRoot(document.getElementById('rootHandleSubmitForm'));
rootHandleSubmitForm.render(<HandleSubmitForm />)

function MultipleInputForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs['username'] + ' is ' + inputs['age']);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );
}
const rootMultipleInputForm = ReactDOM.createRoot(document.getElementById('rootMultipleInputForm'));
rootMultipleInputForm.render(<MultipleInputForm />)

function MyTextarea() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    );
}
const rootMyTextarea = ReactDOM.createRoot(document.getElementById('rootMyTextarea'));
rootMyTextarea.render(<MyTextarea />)

function MySelectForm() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <>
            <form>
                <select value={myCar} onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
            <p>My car is a {myCar}</p>
        </>
    );
}
const rootMySubmitForm = ReactDOM.createRoot(document.getElementById('rootMySubmitForm'));
rootMySubmitForm.render(<MySelectForm />)


export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
const rootMyRouterApp = ReactDOM.createRoot(document.getElementById('rootMyRouterApp'));
rootMyRouterApp.render(<RouterApp />);