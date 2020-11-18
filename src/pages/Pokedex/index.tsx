import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";

import s from './Pokedex.module.scss';

const usePokemons = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);
            const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
            try {
                const response = await fetch(url);
                const result = await response.json();

                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getPokemons();
    }, []);

    return {
        data,
        isLoading,
        isError
    }
}

const PokedexPage = () => {
    const {
        data,
        isLoading,
        isError
    } = usePokemons();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something wrong!</div>
    }

    return (
        <>
            <Layout className={s.root}>
                {data.total} <b>Pokemons</b> for you to choos your favorite
            </Layout>
            <div>
                {data.pokemons.map(item => <div>{item.name}</div>)}
            </div>
        </>
    )
}

export default PokedexPage;
