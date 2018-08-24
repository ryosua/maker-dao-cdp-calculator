import React from 'react'
import FormField from 'components/FormField'
import isFinite from 'lodash/isFinite'

class Calculator extends React.Component {
    state = {
        loanAmount: 0,
        safeLoanPercent: 0,
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
        const { loanAmount, safeLoanPercent, percentPortfolioToRisk, ethPrice, ethPortfolioBalance } = this.state
        const usdValueOfPortfolio = ethPrice * ethPortfolioBalance
        const maxLoanAmount = loanAmount / (safeLoanPercent / 100)
        const usdValueOfCollatoral = maxLoanAmount * 1.5
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
                <FormField label="Max Loan Amount:" value={isFinite(maxLoanAmount) ? maxLoanAmount : 0} readOnly />
                <FormField
                    label="USD Value of Collatoral:"
                    value={isFinite(usdValueOfCollatoral) ? usdValueOfCollatoral : 0}
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
                <FormField label="USD Value of Portfolio:" value={usdValueOfPortfolio} readOnly />
                <FormField
                    label="USD Value of Portfolio Available as Collatoral:"
                    value={(usdValueOfPortfolio * percentPortfolioToRisk) / 100}
                    readOnly
                />
            </div>
        )
    }
}

export default Calculator
