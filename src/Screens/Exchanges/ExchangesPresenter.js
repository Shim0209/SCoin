import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: column;
    grid-auto-rows: 70px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding: 5px;
    &:hover {
        box-shadow:0px 1px 5px 2px #b8e994;
        color: #b8e994;
    }
`;

const Name = styled.div`
    font-size:20px;
    font-weight:600;
`;
const Description = styled.p``;
const Url = styled.a``;

const ExchangesPresenter = ({exchanges, error, loading}) => (
    <> 
        {loading ? (<Loader />) : (
            <>
                {exchanges && exchanges.length > 0 && ( 
                    <Container>
                        {exchanges.map(exchange => (
                            <Item key={exchange.id}>
                                <Name>{exchange.name}</Name>
                                <Description title={exchange.description && exchange.description}>{exchange.description ? exchange.description.substring(0, 50) + "..." : "no exchange description"}</Description>
                                <Url href={exchange.links && exchange.links.website[0].substring(0, 50)}>{exchange.links && exchange.links.website[0].substring(0, 50)}</Url>
                            </Item>
                        ))} 
                    </Container>
                )}
                {error && <Message text={error} color="white" />}
            </>
        )}
        
    </>
)

ExchangesPresenter.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    exchanges: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            link: PropTypes.shape({
                website: PropTypes.arrayOf(PropTypes.string.isRequired)
            }).isRequired
        }).isRequired
    ).isRequired
}

export default ExchangesPresenter;