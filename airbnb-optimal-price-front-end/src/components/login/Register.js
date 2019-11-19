import React from 'react';

//node modules
import Styled from 'styled-components';

//components
import RegisterForm from './form/RegisterForm';

//images
import SVG from '../../images/undraw_destinations_fpv7.svg';

//styles
const Flex = Styled.div`
    display: flex;
`;

const Illustration = Styled.img`
    width: 65%;
`;

function Register() {
    return(
        <Flex>
            <Illustration src={SVG} alt='illustration' />
            <RegisterForm />
        </Flex>
    );
}

export default Register;