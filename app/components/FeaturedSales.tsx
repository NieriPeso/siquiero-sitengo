import * as React from 'react'
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import {
    Table,
    Button
} from 'react-bootstrap';

const FeaturedSales: React.FC = () => {

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <tr key={number.toString()}>
            <td>
                <svg className={`bd-placeholder-img flex-shrink-0 me-2 rounded`} width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ccc" />
                </svg>
                <strong className={`d-block text-gray-dark`}>@username</strong>
            </td>
            <td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
            <td><Button variant="outline-secondary">Vender</Button></td>
        </tr>
    );

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>Comprador</th>
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

export default FeaturedSales;