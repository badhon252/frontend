import {useEffect} from 'react';

const UseEffect = () => {

    useEffect(() => {
        
        return () => {
            fetch()
        };
    }, [input]);

    return (
        <div>
            <h1>useEffect hook</h1>
        </div>
    );
}

export default UseEffect;
