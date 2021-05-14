import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    background-color: #31416f;
    box-shadow:0px 1px 5px 2px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
    font-size:30px;
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => (props.current ? "#e55039" : "transparent")};
`;

const SLink = styled(Link)`
    height: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 20px;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <Title>Coin Explorer</Title>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Prices</SLink>
            </Item>
            <Item current={pathname === "/exchanges"}>
                <SLink to="/exchanges">Exchanges</SLink>
            </Item>
            <Item current={pathname === "/coins"}>
                <SLink to="/coins">Coins</SLink>
            </Item>
        </List>
    </Header>
));