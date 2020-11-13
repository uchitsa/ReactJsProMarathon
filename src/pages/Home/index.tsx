import React from "react";
import {navigate} from "hookrouter";
import s from "./Home.module.scss";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import {LinkEnum} from "../../routes";

const HomePage = () => {
    return (
      <div className={s.root}>
        <Header className={s.header}>
            <b>Find</b> all your favorite <b>Pokemon</b>
        </Header>
        <div className={s.button}>
            <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
          <div className={s.contentParallax}>
              <Parallax/>
          </div>
      </div>
    );
}

export default HomePage;
