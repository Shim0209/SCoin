import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(5, 180px);
    grid-auto-rows: column;
`;

const ItemObj = styled.a`
    margin-bottom: 20px;
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

DetailMarketsPresenter.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    result: PropTypes.arrayOf(
        PropTypes.shape({
            market_url: PropTypes.string,
            exchange_name: PropTypes.string,
            pair: PropTypes.string,
            quotes: PropTypes.shape({
                USD: PropTypes.shape({
                    price: PropTypes.number.isRequired
                }).isRequired
            }).isRequired
        }).isRequired
    ).isRequired
}

export default DetailMarketsPresenter;

