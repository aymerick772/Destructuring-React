import React from 'react';
import ReactDOM from  'react-dom';

function MyComponent(){
    return ReactDOM.createPortal(
        <div className="">
            <p>Je suis dans root</p>
        </div>,
        document.getElementById('second-root')
    )
}




export default MyComponent;