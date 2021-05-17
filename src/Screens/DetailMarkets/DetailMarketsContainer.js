import React from 'react';
import DetailMarketsPresenter from './DetailMarketsPresenter';
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
            const {data: result} = await coinApi.detailMarkets(id);
            console.log(result);
            this.setState({
                result
            })
        } catch {
            this.setState({
                error: "Can't find detail-markets information"
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
            <DetailMarketsPresenter 
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}