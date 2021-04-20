import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCardForm from './StripeCardForm';

const stripePromise = loadStripe("pk_test_51IiGxiI5xZZUnf2n4YG3ibR2elrb7ZOafXxFIac2aGaje05OTRGBlWmZxrynBjPCYAwW2lGIGrBWf3OxuNHrJjyM00SFG0738d");

const StripeForm = ({children}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                {children}
            </Elements>
        </div>
    );
};

export default StripeForm;