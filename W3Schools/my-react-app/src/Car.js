export function CarComponentFile() {
    return <h2>Hi, I am loaded from the Car.js file!</h2>;
}

export function MyReactPropsCarElement(props) {
    if (props.brand && typeof props.brand === 'string') {
        return <h2>I am a {props.brand}!</h2>;
    } else if (props.brand && typeof props.brand === 'object' && props.brand.model) {
        return <h2>I am a {props.brand.model}!</h2>;
    } else {
        return <h2>Unknown car brand or model!</h2>;
    }
}


export function MyReactPropsGarageElement() {
    return (
        <>
            <h1>Who lives in my Element Garage?</h1>
            <MyReactPropsCarElement brand="Ferrari" />
        </>
    );
}

export function MyReactPropsGarageElementVariable() {
    const carName = "Lamborghini";
    return (
        <>
            <h1>Who lives in my Variable Garage?</h1>
            <MyReactPropsCarElement brand={carName} />
        </>
    );
}

export function MyReactPropsGarageElementObject() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
        <>
            <h1>Who lives in my Object Garage?</h1>
            <MyReactPropsCarElement brand={carInfo} />
        </>
    );
}