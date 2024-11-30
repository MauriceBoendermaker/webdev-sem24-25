import React from 'react';

type Person = {
    Name: string,
    Age: number
}

export class Register extends React.Component<{}, { Name: string; Age: number; PersonsList: any[] }> {
    constructor(props:{}) {
        super(props);
        this.state = { Name: "", Age: 0, PersonsList: [] };
    }

    handleSubmit = () => {
        if (this.state.Name.trim() !== "") {
            this.setState((prevState) => ({
                PersonsList: [...prevState.PersonsList, prevState.Name, prevState.Age],
                Name: "",
            }));
        }
    };


    render(): React.ReactNode {

        return <>
        <div>Name:
            <input
                value={this.state.Name}
                onChange={(e) => this.setState({ Name: e.target.value })}
            />
        </div>
        <div>Age:
            <input
                value={this.state.Age}
                type="number"
                onChange={(e) => this.setState({ Age: parseInt(e.target.value) })}
            />
        </div>
        <div>
            <button onClick={this.handleSubmit}>Submit</button>
        </div>

        {/* {this.state.PersonsList} */}

        <h1>List of people:</h1>
        {
            this.state.PersonsList.forEach(item => {
                for (const e of Object.entries(item)) {
                    <li>Name: {item[0]}, Age: {item[1]}<br/></li>
                }
            })
        }
        </>
    }
}