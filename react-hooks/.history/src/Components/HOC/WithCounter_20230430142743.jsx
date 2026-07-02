import React from 'react';

const WithCounter = () => {
    class NewComponent extends React.Component{
        //! Because of closure(encapsulation), value of count wouldn't conflict.
        state ={
            count = 0
        }
    }
    return NewComponent;
}

export default WithCounter;
