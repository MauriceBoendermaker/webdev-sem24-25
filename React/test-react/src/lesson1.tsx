import React from 'react';
import { forEachChild } from 'typescript';

export function F1() {
    return <h1>Hello react</h1>
}

export const F2:React.FC = () => <h2>Hello world!</h2>

type F3Props = {n:number, symbol:string}

export function F3(props: F3Props) {
    const n = props.n
    const s = props.symbol
    return <div>{s.repeat(n)}</div>
}

export function F4(props:{n:number}) {
    const list = []
    for(let i=1; i<=props.n; i++)
        list.push(<li key={i}>Item List {i}</li>)
    return <ol>
        {list}
    </ol>
}

interface C4Props {
    n:number,
    extra?:string
}

export class C4 extends React.Component<{n:number}> {
    constructor(props:{n:number}) {
        super(props)
    }

    render(): React.ReactNode {
        const list = []
        for(let i=1; i<=this.props.n; i++)
            list.push(<li key={i}>Item List {i}</li>)
        return <ol>
            {list}
        </ol>
    }
}

interface SpinProps {
    min:number,
    max:number
}

type SpinState = {
    counter:number,
    symbol:string
}

export class Spin extends React.Component<SpinProps, SpinState> {
    constructor(props:SpinProps) {
        super(props)

        this.state = {counter:1, symbol:'@'}
    }

    render(): React.ReactNode {
        return <>
            <button disabled={this.state.counter >= this.props.max}
                    onClick={() => {this.setState((prev) => ({... prev, counter : prev.counter + 1}))}}> ^ </button>

            <input value={this.state.symbol}
                   onChange={e => {const somewhere = e.currentTarget.value; this.setState((prev) => ({... prev, symbol:somewhere}))}}/>

            <button disabled={this.state.counter <= this.props.min}
                    onClick={() => {this.setState({... this.state, counter : this.state.counter <= 0 ? 0 : this.state.counter - 1})}}> v </button>
                    
            <div>{this.state.symbol.repeat(this.state.counter)}</div>
        </>
    }
}