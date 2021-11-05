import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from "./StockRow.js";
import NASDAQ from './Chart/Chart.js';
import Navbar from '../Navbar/index'
import { Container } from '../Signin/SigninElements.js';
import { DashContainer, DashWrap, ChartWrap, PlotColumn, TableColumn } from './Chart/ChartElements.js';





const Dashboard = () => {
    return (
        <DashContainer>
            <Navbar />
            <DashWrap>
                <ChartWrap>
                    <PlotColumn>
                        <NASDAQ />
                    </PlotColumn>
                    <TableColumn>
                        <div className="col-sm-3">
                            <table className="table table-dark table">
                                <thead>
                                    <tr>
                                        <th>Stocks</th>
                                    </tr>
                                </thead>
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <StockRow ticker="NDAQ" />
                                        <StockRow ticker="AAPL" />
                                        <StockRow ticker="MSFT" />
                                        <StockRow ticker="TSLA" />
                                    </ul>
                                </div>
                            </table>
                        </div>
                    </TableColumn>
                </ChartWrap>
            </DashWrap>
        </DashContainer>
    )
}

export default Dashboard;

