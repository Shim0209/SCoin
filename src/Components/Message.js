import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:90vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:100px;
    color: ${props =>  props.color};
`;

const Message = ({text, color}) => (
    <Container color={color}>
        {text}...
    </Container>
);

Message.prototype = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Message;


