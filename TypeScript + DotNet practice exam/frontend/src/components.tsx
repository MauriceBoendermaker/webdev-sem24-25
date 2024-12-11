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
