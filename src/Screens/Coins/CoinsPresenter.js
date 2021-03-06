import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
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
                        {coins
                            .filter(coin => coin.rank !==0)
                            .sort((first, second) => first.rank - second.rank)
                            .map(coin => (
                            <Link to={`/coins/${coin.id}`} key={coin.id}>
                                <Item>
                                    #{coin.rank} {coin.name}/{coin.symbol}
                                </Item>
                            </Link>
                        ))}
                    </Container>
                )}
                {error && <Message text={error} color="#e55039" />}
            </>
        )}
        
    </>
);

CoinsPresenter.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    coins: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rank: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            symbol: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default CoinsPresenter;