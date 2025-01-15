import * as React from "react"
import { PersonCard, PersonForm, PersonList } from "./ExamPart1"

type AppProps = {}
type AppState = {}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {}
    }
    render(): React.ReactNode {

        return <div>
            <h1>Web development Exam</h1>
            <p>
                You can use this component to test your code. Place your own components inside the render of the App component.
            </p>
            <hr />
            <PersonCard id="0" name="John" grade={7.5} role="student" />
            <PersonCard id="1" name="Bob" subject="OODP, Web, Algorithms" role="teacher" />
            <PersonCard id="2" name="Steve" department="Tech Support" role="staff" />
            <hr />
            <PersonForm />
            <hr />
        </div>
    }
}