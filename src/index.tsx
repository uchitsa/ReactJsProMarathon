import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import s from './index.css';

const App = () => {
    return (
        <>
            <Button/>
        </>
    );
}
const Button = () => {
    const [isDone, setDone] = useState(true);
    useEffect(() => {
        console.log('####: useEffect');
        return () => console.log('####: useEffect return something')
    }, [isDone])
    return (
        <div className={s.body}></div>
    )
}
ReactDOM.render(React.createElement(App), document.getElementById('root'));
