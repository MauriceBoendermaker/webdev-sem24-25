import React, { useState } from 'react';
import {Person} from './type.ts';

export function PersonCard(props: Person) {
    return props.role === "student" ? (
        <>
        <div>{"Name: " + props.name}</div>
        <div>{"Role: " + props.role}</div>
        <div>{"Grade: " + props.grade}</div>
        <br/>
        </>
    ) : props.role === "teacher" ? (
        <>
        <div>{"Name: " + props.name}</div>
        <div>{"Role: " + props.role}</div>
        <div>{"Subjects: " + props.subjects}</div>
        <br/>
        </>
    ) : props.role === "staff" ? (
        <>
        <div>{"Name: " + props.name}</div>
        <div>{"Role: " + props.role}</div>
        <div>{"Department: " + props.department}</div>
        <br/>
        </>
    ) : null;
}

export const FormFields: React.FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
    const [username, setUsername] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
        onChange(event.target.value);
    };

    return (
        <>
            <label>
                Text input: <input type="text" name="username" value={username} onChange={handleInputChange} />
            </label>
        </>
    );
};

export const Form: React.FC<{ username: string, role }> = ({ username, role }) => {
    const alertBox = () => {
        alert(username);
        alert(role);
    };

    return (
        <>
            <div>
                <button onClick={alertBox}>Submit</button>
            </div>
            <div>
                <select value={role}
                        onChange={(e) => this.setState({ role: e.target.value as "student" | "teacher" | "staff" })} >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="staff">Staff</option>
                </select>
            </div>
        </>
    );
};