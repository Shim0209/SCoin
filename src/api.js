import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.coinpaprika.com/v1/'
});

export const coinApi = {
    tickers: () => api.get("tickers"),
    exchanges: () => api.get("exchanges"),
    coins: () => api.get("coins"),
    detail: (id) => api.get(`coins/${id}`),
    detailExchanges: (id) => api.get(`coins/${id}/exchanges`),
    detailMarkets: (id) => api.get(`coins/${id}/markets`)
}