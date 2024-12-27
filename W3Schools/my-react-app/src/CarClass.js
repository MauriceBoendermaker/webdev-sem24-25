import React from 'react';

export class CarClass extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }
    render() {
        return <h2>I am a {this.state.color} car class component!</h2>;
    }
}

export class CarClassProps extends React.Component {
    render() {
        return <h2>I am a {this.props.color} car class component, that uses props!</h2>;
    }
}

export class CarClassConstructorProps extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a {this.props.model}!</h2>;
    }
}

export class CarClassComponentsInComponents extends React.Component {
    render() {
        return <h2>I am a Car!</h2>;
    }
}

export class CarClassGarageComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <CarClassComponentsInComponents />
            </div>
        );
    }
}

export class CarState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
            </div>
        );
    }
}

export class CarSetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({ color: "blue" });
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}>
                    Click to change color
                </button>
            </div>
        );
    }
}