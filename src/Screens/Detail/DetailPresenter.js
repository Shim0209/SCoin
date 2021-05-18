import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import { Link, Redirect } from "react-router-dom";

const Container = styled.div`
    width:50%;
    padding:20px;
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:20px;
`;
const Title = styled.div`
    font-size:50px;
    font-weight:600;
`;
const Type = styled.div`
    margin-left:20px;
    font-size:15px;
    font-weight:600;
    color:gold;
    align-self:flex-end;
`;
const Description = styled.div`
    font-size:20px;
    margin-bottom:20px;
`;
const InfoBox = styled.div`
    margin-bottom:20px;
`;
const Info = styled.div`
    font-size:18px;
    margin-bottom:5px;
`;
const LinkBox = styled.div`
    margin-bottom:20px;
`;
const LinObj = styled.a`
    font-size:20px;
    font-weight:300;
    &:hover {
        box-shadow:0px 1px 5px 2px #b8e994;
        color: #b8e994;
    }
`;
const BtnBox = styled.div`

`;
const Btn = styled.button`
    outline: none;
    border: none;
    background-color:  #b8e994;
    color: white;
    border-radius:5px;
    font-size:15px;
    padding:5px;
    &:first-child {
        margin-right:20px;
    }
    &:focus {
        color: #b8e994;
        background-color: white;
    }
`;

const DetailPresenter = ({result, error, loading}) => (
    <> 
        {loading ? (<Loader />) : (
            <>
                {result && ( 
                    <Container>
                        <Header>
                            <Title>{result.name} / {result.symbol}</Title>
                            <Type>{result.type && result.type}</Type>
                        </Header>
                        <Description>{result.description}</Description>
                        <InfoBox>
                            <Info>Rank : {result.rank ? result.rank : "null"}</Info>
                            <Info>Started_at : {result.started_at ? (result.started_at).substring(0,10) : "null"}</Info>
                            <Info>Open Source : {result.open_source ? JSON.stringify(result.open_source) : "null"}</Info>
                            <Info>Proof Type : {result.proof_type ? result.proof_type : "null"}</Info>
                            <Info>Structure : {result.org_structure ? result.org_structure : "null"}</Info>
                        </InfoBox>
                        <LinkBox>
                            {result.links && result.links.website && <LinObj href={result.links.website[0]}>{result.links.website[0]}</LinObj>}
                        </LinkBox>
                        <BtnBox>
                            <Link to={`/coins/${result.id}/markets`}><Btn>MARKETS</Btn></Link>
                            <Link to={`/coins/${result.id}/exchanges`}><Btn>EXCHANGES</Btn></Link>
                        </BtnBox>
                    </Container>
                )}
                {error && <Message text={error} color="#e55039" />}
            </>
        )}
        
    </>
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresenter;

