import React from 'react';
import CoinsPresenter from './CoinsPresenter';
import { coinApi } from '../../api';

export default class extends React.Component {

    state = {
        coins : null,
        error : null,
        loading : true
    }

    async componentDidMount() {
        try {
            const {data: coins} = await coinApi.coins();
            console.log(coins);
            this.setState({
                coins
            })
        } catch {
            this.setState({
                error: "Can't find coins information"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { coins, error, loading } = this.state;
        return (
            <CoinsPresenter 
                coins={coins}
                error={error}
                loading={loading}
            />
        )
    }
}