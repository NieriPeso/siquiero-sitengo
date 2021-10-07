import * as React from 'react'
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import {
    Table,
    Button,
} from 'react-bootstrap';

const FeaturedPurchases: React.FC = () => {

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <tr key={number.toString()}>
            <td>
                <svg className={`bd-placeholder-img flex-shrink-0 me-2 rounded`} width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff" />
                </svg>
                <strong className={`d-block text-gray-dark`}>@username</strong>
            </td>
            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
            <td><Button variant="outline-secondary">Comprar</Button></td>
        </tr>
    );

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>Vendedor</th>
                    <th>Descripción</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </Table>
    )
}

export default FeaturedPurchases;