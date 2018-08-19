import React from 'react'
import FormField from 'components/FormField'

class Calculator extends React.Component {
    state = {
        loanAmount: 0,
        safeLoanPercent: 0,
        maxLoanAmount: 0,
        usdValueOfCollatoral: 0,
        percentPortfolioToRisk: 0,
        ethPrice: 300,
        ethPortfolioBalance: 0
    }

    handleChange = (e, stateKey) => {
        const value = e.target.value
        if (!isNaN(value)) {
            this.setState({ [stateKey]: +value })
        }
    }

    render() {
        const {
            loanAmount,
            safeLoanPercent,
            maxLoanAmount,
            usdValueOfCollatoral,
            percentPortfolioToRisk,
            ethPrice,
            ethPortfolioBalance
        } = this.state
        const usdValueOfPortfolio = ethPrice * ethPortfolioBalance
        return (
            <div className="calculator">
                <FormField
                    label="Loan Amount:"
                    value={loanAmount}
                    stateKey="loanAmount"
                    handleChange={this.handleChange}
                />
                <FormField
                    label="Safe Loan Percent:"
                    value={safeLoanPercent}
                    stateKey="safeLoanPercent"
                    handleChange={this.handleChange}
                />
                <FormField
                    label="Max Loan Amount:"
                    value={maxLoanAmount}
                    stateKey="maxLoanAmount"
                    handleChange={this.handleChange}
                />
                <FormField
                    label="USD Value of Collatoral:"
                    value={usdValueOfCollatoral}
                    stateKey="usdValueOfCollatoral"
                    handleChange={this.handleChange}
                    readOnly
                />
                <hr />
                <FormField
                    label="ETH Portfolio Balance:"
                    value={ethPortfolioBalance}
                    stateKey="ethPortfolioBalance"
                    handleChange={this.handleChange}
                />
                <FormField label="Eth Price:" value={ethPrice} stateKey="ethPrice" handleChange={this.handleChange} />
                <FormField
                    label="Percent of Portfolio You Are Comfortable Risking:"
                    value={percentPortfolioToRisk}
                    stateKey="percentPortfolioToRisk"
                    handleChange={this.handleChange}
                />
                <FormField
                    label="USD Value of Portfolio:"
                    value={usdValueOfPortfolio}
                    handleChange={this.handleChange}
                    readOnly
                />
                <FormField
                    label="USD Value of Portfolio Available as Collatoral:"
                    value={(usdValueOfPortfolio * percentPortfolioToRisk) / 100}
                    handleChange={this.handleChange}
                    readOnly
                />
            </div>
        )
    }
}

export default Calculator
