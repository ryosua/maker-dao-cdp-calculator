import React from 'react'
import FormField from 'components/FormField'

const Calculator = () => {
    return (
        <div className="calculator">
            <FormField label="Loan Amount:" value={0} />
            <FormField label="Safe Loan Percent:" value={0} />
            <FormField label="Max Loan Amount:" value={0} />
            <FormField label="USD Value of Collatoral:" value={0} />
            <hr />
            <FormField label="USD Value of Portfolio Available as Collatoral:" value={0} />
            <FormField label="Percent of Portfolio You Are Comfortable Risking:" value={0} />
            <FormField label="USD Value of Portfolio:" value={0} />
            <FormField label="Eth Price:" value={0} />
            <FormField label="ETH Portfolio Balance:" value={0} />
        </div>
    )
}

export default Calculator
