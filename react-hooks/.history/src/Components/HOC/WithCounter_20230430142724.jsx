import React from 'react';

const WithCounter = () => {
    class NewComponent extends React.Component{
        state ={
            count = 0;
        }
    }
    return NewComponent;
}

export default WithCounter;
