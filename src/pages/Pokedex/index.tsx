import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";

import s from './Pokedex.module.scss';

const PokedexPage = () => {
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://zar.hosthot.ru/api/v1/pokemons')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTotalPokemons(data.total);
                setPokemons(data.pokemons);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something wrong!</div>
    }

    return (
        <>
            <Layout className={s.root}>
                {totalPokemons} <b>Pokemons</b> for you to choos your favorite
            </Layout>
            <div>
                {pokemons.map(item => <div>{item.name}</div>)}
            </div>
        </>
    )
}

export default PokedexPage;