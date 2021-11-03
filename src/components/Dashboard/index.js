import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from "./StockRow.js";
// import { Container } from '../Signin/SigninElements.js';

const Dashboard = () => {
    return (
        
        <div className="App">
            <div className="container">
                <div className="row justify-content md-center">
                    <div className = "col-sm-3 ">
                        <table className="table table-dark table">
                            <div className = "card">
                                <ul className="list-group list-group-flush">
                                    <StockRow ticker = "aapl"/>
                                    <StockRow ticker = "goog"/>
                                    <StockRow ticker = "msft"/>
                                    <StockRow ticker = "tsla"/>
                                </ul>
                            </div>    
                        </table>
                    </div> 
                    <div className = "col-sm-8">
                    <table className="table table-dark table">
                            <div className = "card">
                                <ul className="list-group list-group-flush">
                                    <StockRow ticker = "aapl"/>
                                    <StockRow ticker = "goog"/>
                                    <StockRow ticker = "msft"/>
                                    <StockRow ticker = "tsla"/>
                                </ul>
                            </div>    
                        </table>
                        </div> 
                </div>      
            </div>
        </div>
        
    )
}

export default Dashboard;

