import React, {Component} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer"
import Button from "./components/Button";

class App extends Component {

    render() {
        return (
            <>
                <Header/>
                <div>
                <Button onClick={() => console.log('Click Button!')}>See pokemons</Button>
                </div>
                <Footer/>
            </>
        )
    }
}

export default App;
