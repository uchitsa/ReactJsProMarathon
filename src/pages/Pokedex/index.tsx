import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";

import s from './Pokedex.module.scss';
import {IPokemons, PokemonsRequest} from "../../interface/pokemon";
import {setQueryParams} from "hookrouter";

export interface IQuery {
    name?: string,
}

const usePokemons = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({});

    const {data, isLoading, isError} = useData<IPokemons>('getPokemons', query, [searchValue]);

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons')
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

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: e.target.value,
        }))
    };
    return (
        <>
            <Layout className={s.root}>
                {data.total} <b>Pokemons</b> for you to choos your favorite
            </Layout>
            <div>
                <input type="text" value={searchValue} onChange={handleSearchChange}/>
            </div>
            <div>
                {!isLoading && data && data.pokemons.map((item: PokemonsRequest) => <div>{item.name}</div>)}
            </div>
        </>
    )
}

export default PokedexPage;