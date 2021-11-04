import React from 'react';
import Plot from 'react-plotly.js';

class NASDAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues:[],
            stockChartYValues:[]
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        const API_KEY = '6QSLCL702RRQIV3I';
        let StockSymbol = 'NDAQ'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_CALL)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data);

                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });

                    // console.log(stockChartXValuesFunction)
                    // console.log(stockChartYValuesFunction)
                }
            )
    }

    render() {
        return (
            <div>
                <h1>stock market</h1>
                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        }
                        
                    ]}
                    layout={{ width: 720, height: 440, title: 'NASDAQ', paper_bgcolor: 'rgb(200,233,233)' }}
                />
            </div>
        )
    }

}

export default NASDAQ;