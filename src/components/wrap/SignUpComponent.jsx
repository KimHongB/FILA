import React from 'react';
import SignUpComponent1 from './user/SignUpComponent1';
import SignUpComponent2 from './user/SignUpComponent2';
import SignUpComponent3 from './user/SignUpComponent3';
import SignUpComponent4 from './user/SignUpComponent4';

function SignUpComponent(props) {
    return (
       <main id="signup">
            <SignUpComponent1/>
            <SignUpComponent2/>
            <SignUpComponent3/>
            <SignUpComponent4/>
       </main>
    );
}

export default SignUpComponent;