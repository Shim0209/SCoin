import React from 'react';
import ExchangesPresenter from './ExchangesPresenter';
import { coinApi } from '../../api';

export default class extends React.Component {

    state = {
        exchanges : null,
        error : null,
        loading : true
    }

    async componentDidMount() {
        try {
            const {data: exchanges} = await coinApi.exchanges();
            console.log(exchanges);
            this.setState({
                exchanges
            })
        } catch {
            this.setState({
                error: "Can't find exchanges information"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { exchanges, error, loading } = this.state;
        return (
            <ExchangesPresenter 
                exchanges={exchanges}
                error={error}
                loading={loading}
            />
        )
    }
}