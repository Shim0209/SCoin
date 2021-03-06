import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(6, 150px);
    grid-auto-rows: column;
`;

const PayItem =styled.div`
    margin-bottom:20px;
`;
const Title = styled.div`
    font-weight:600;
    font-size:20px;
    margin-bottom: 5px;
`;
const ExchangeList = styled.div`
    font-size:15px;
`;
const ExchangObj = styled.div`
    margin: 0 10px 15px 0px;
    color:  #b8e994;
`;


const DetailExchangesPresenter = ({result, error, loading}) => (
    <> 
        {loading ? (<Loader />) : (
            <>
                {result && result.length > 0 && (
                    <Container>
                        {result
                            .filter(exchange => exchange.fiats.length !== 0)
                            .sort((first, second) => second.fiats.length - first.fiats.length)
                            .map(exchange => (
                            <PayItem key={exchange.id}>
                                <Title>{exchange.name}</Title>
                                <ExchangeList>
                                    {exchange.fiats.map(pay => (                                       
                                        <ExchangObj key={pay.id}>{pay.name}</ExchangObj>                 
                                    ))}
                                </ExchangeList>

                            </PayItem>
                        ))}
                    </Container>
                )}
                {error && <Message text={error} color="#e55039" />}
            </>
        )}
        
    </> 
);

DetailExchangesPresenter.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    result: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            fiats: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired
                })
            )
        })
    )
}

export default DetailExchangesPresenter;

