import React, {Component} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer"

class App extends Component {

    render() {
        return (
            <>
                <Header/>
                <div>Pokemon content</div>
                <Footer/>
            </>
        )
    }
}

export default App;
