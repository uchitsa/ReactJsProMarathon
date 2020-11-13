import React from 'react';
import {A, usePath} from "hookrouter";
import cn from 'classnames';
import s from './Header.module.scss';
import Layout from '../Layout';

interface IMenu {
    id: number;
    value: string;
    link: string;
}

export const GENERAL_MENU: IMenu[] = [
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
    const path = usePath();
    return (
        <div className={s.root}>
            <Layout>
                <div className={s.wrap}>
                    <div className={s.pokemonLogo}>
                        <PokemonLogoSvg/>
                    </div>
                    <div className={s.menuWrap}>
                        {GENERAL_MENU.map(({title, link}) => {
                            <A key={title}
                               href={link}
                               className={cn(s.menuLink, {
                                   [s.activeLink]: link === path,
                               })}>
                                {title}
                            </A>
                        })}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default React.memo(Header);