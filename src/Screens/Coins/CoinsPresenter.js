import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
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
    align-items:center;
`;

const CoinsPresenter = ({coins, error, loading}) => (
    <> 
        {loading ? (<Loader />) : (
            <>
                {coins && coins.length > 0 && ( 
                    <Container>
                        {coins.map(coin => (
                            <Item key={coin.id}>
                                #{coin.rank} {coin.name}/{coin.symbol}
                            </Item>
                        ))}
                    </Container>
                )}
                {error && <Message text={error} color="#e55039" />}
            </>
        )}
        
    </>
);

CoinsPresenter.propTypes = {
    coins: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default CoinsPresenter;