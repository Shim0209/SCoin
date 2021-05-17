import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(5, 180px);
    grid-auto-rows: column;
`;

const ItemObj = styled.a`
    margin-bottom: 20px;
    &:hover {

    }
`;
const Title = styled.div`
    font-size: 20px;
`;
const Pair = styled.div`
    color: #b8e994;
`;
const USD = styled.div`
    color:gold;
`;


const DetailMarketsPresenter = ({result, error, loading}) => (
    <> 
        {loading ? (<Loader />) : (
            <>
                {result && result.length > 0 && (
                    <Container>
                        {result.map((market, index) => (
                            <ItemObj key={index} href={market.market_url && market.market_url}>
                                <Title>{market.exchange_name && market.exchange_name}</Title>
                                <Pair>{market.pair && market.pair}</Pair>
                                <USD>USD : {market.quotes.USD && market.quotes.USD.price}</USD>
                            </ItemObj>
                            
                        ))}
                    </Container>
                )}
                {error && <Message text={error} color="#e55039" />}
            </>
        )}
        
    </>
);

export default DetailMarketsPresenter;

