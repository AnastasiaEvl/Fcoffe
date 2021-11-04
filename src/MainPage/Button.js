import React from 'react';


function Button(){

    function Aform(){
       window.location='/Aform'
    }
    return (
        <div className="btn_one">
            <button className='button_one' onClick={Aform}>Разместить заказ</button>
        </div>
    )
}
export default Button;