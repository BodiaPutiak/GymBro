import './index.scss'
import PricingChart from '../HomePage/PricingChart';



function PricingPage() {
    return (
        <>
            <div className="banner">
                <h2>Pricing</h2>
            </div>

            <PricingChart marginClass = 'pricing-page'/>
        </>
    )
}

export default PricingPage;