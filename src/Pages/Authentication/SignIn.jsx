import React, { useState } from 'react'

export default function SignIn() {

    // //Day la cach sai
    // let click = false;

    // const onClickButton = () => {
    //     click = true;
    // }



    //Day la cach dung
    //useState la 1 hook
    const [click, setClick] = useState(false);

    const onClickButton = () => {
        setClick(!click);
    }
    return (
        <nav className='my-9'>
            <button onClick={onClickButton}>Click vao toi</button>
            {click === false ? (<div>
                Ban chua click vao toi
            </div>) : <div>
                ban da click vao toi
            </div>}
        </nav>
    )
}
