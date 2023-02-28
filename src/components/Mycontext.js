import React from 'react';

const User = {
    name : 'bart',
    ag : '9 ans'
}
const MyContext = React.createContext();

const MySecondContext = React.createContext(User);

// export default MyContext;
export {MyContext, MySecondContext};