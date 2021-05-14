import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: column;
    grid-auto-rows: 50px;
`;

const Item = styled.div`
    font-size:15px;
    padding: 5px;
    &:hover {
        box-shadow:0px 1px 5px 2px #b8e994;
        color: #b8e994;
    }
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const PricesPresenter = ({tickers, error, loading}) => (
    <> 
        {loading ? (<Loader />) : (
            <>
                {tickers && tickers.length > 0 && ( 
                    <Container>
                        {tickers.map(coin => (
                            <Item key={coin.id}>
                                {coin.name} / {coin.symbol} : {coin.quotes.USD.price}
                            </Item>
                        ))}
                    </Container>
                )}
                {error && <Message text={error} color="#e55039" />}
            </>
        )}
        
    </>
)

PricesPresenter.propTypes = {
    tickers: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default PricesPresenter;