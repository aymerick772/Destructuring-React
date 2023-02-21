import React from "react";


const MyRefFunc = React.forwardRef((props, ref) => {  
    console.log(props)
    console.log(ref.current)
    return(
        <div className="">
            <input ref={ref} type="text" />
        </div>
    )   
})
 

export default MyRefFunc;