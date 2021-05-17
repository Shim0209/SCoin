import React from 'react';
import DetailExchangesPresenter from './DetailExchangesPresenter';
import { coinApi } from '../../api';

export default class extends React.Component {
    state = {
        result : null,
        error : null,
        loading : true
    }

    async componentDidMount() {
        const { match: { params: { id } }} = this.props;
        try {
            const {data: result} = await coinApi.detailExchanges(id);
            console.log(result);
            this.setState({
                 result
            })
        } catch {
            this.setState({
                error: "Can't find detail-exchanges information"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailExchangesPresenter 
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}