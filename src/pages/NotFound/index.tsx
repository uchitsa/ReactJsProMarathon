import React from "react";
import {navigate} from "hookrouter";
import s from "./NotFound.module.scss";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import {LinkEnum} from "../../routes";

const NotFoundPage = () => {
    return (
        <div className={s.root}>
            <div className={s.text}>
                404
            </div>
            <div className={s.layer}>
                <img src={TeamRocket} alt="Team Rocket"/>
                <div className={s.subTitle}>
                    <span>The rocket team</span> has won this time.
                </div>
                <Button
                    onClick={() => navigate(LinkEnum.POKEDEX)}>Return</Button>
            </div>
        </div>
    );
}

export default NotFoundPage;