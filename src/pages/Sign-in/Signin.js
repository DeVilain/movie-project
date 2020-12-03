import React from 'react'
import SignIn from '../../components/Signin'

const Signin = (props) => {
    console.log(props)
    return (
        <>
            <SignIn props={props}></SignIn>
        </>
    )
}

export default Signin
