import React from "react";
import css from "./ContactList.module.css";

export default function ContactList ({items, onRemoveContact}) {
const contacts = items.map(({name, number, id})=>{
    return (
        <tr key = {id} className={css.contact_item}>
            <td className={css.contact_name}>{name} <span className={css.contact_span} onClick = {() => onRemoveContact(id)}>x</span></td>
            <td>{number}</td>
        </tr>
    )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                </tr>
            </thead>

            <tbody>
                {contacts}
            </tbody>
        </table>
    )
}