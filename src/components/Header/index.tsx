import React from 'react';
import {A} from "hookrouter";
import s from './Header.module.scss';
import Layout from '../Layout';

interface IMenu {
    id: number;
    value: string;
    link: string;
}

const MENU: IMenu[] = [
    {
        id: 1,
        value: 'Home',
        link: '/',
    },
    {
        id: 2,
        value: 'Pokedex',
        link: '/pokedex',
    },
    {
        id: 3,
        value: 'Legendaries',
        link: '#',
    },
    {
        id: 4,
        value: 'Documentation',
        link: '#',
    },
];
const Header = () => {
    return <table>
        <tr>
            <td>Home</td>
            <td>Pokedex</td>
            <td>Legendaries</td>
            <td>Documentation</td>
        </tr>
    </table>
}

export default Header;