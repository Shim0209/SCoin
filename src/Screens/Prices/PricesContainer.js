import React from 'react';
import PricesPresenter from './PricesPresenter';
import { coinApi } from '../../api';

export default class extends React.Component {
    state = {
        tickers : null,
        error : null,
        loading : true
    }

    async componentDidMount() {
        try {
            const {data: tickers} = await coinApi.tickers();
            console.log(tickers);
            this.setState({
                tickers
            })
        } catch {
            this.setState({
                error: "Can't find ticker information"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { tickers, error, loading } = this.state;
        return (
            <PricesPresenter 
                tickers={tickers}
                error={error}
                loading={loading}
            />
        )
    }
}