import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios";
import logo from '../assets/icons/ellielogo1.png'
import '../sassStyles/pages/Payment.scss'
import Loader from '../utilities/Loader'


const appearance = {
    theme: 'none',
    variables: {
        fontFamily: 'Sohne, system-ui, sans-serif',
        fontWeightNormal: '500',
        borderRadius: '8px',
        colorBackground: '#eae8ec',
        colorPrimary: '#eae8ec',
        colorPrimaryText: '#1A1B25',
        colorText: '#410000',
        colorTextSecondary: 'darkred',
        colorTextPlaceholder: 'gray',
        colorIconTab: 'gray',
        colorLogo: 'dark'
    },
    rules: {
        '.Input, .Block': {
            backgroundColor: '#eae8ec',
            border: '1.5px solid darkred',
            boxShadow: '0px 2px 2px #bbbbbb',
        },
        '.Tab': {
            backgroundColor: '#eae8ec',
            borderBottom: '1px solid #c2b9cc',
            borderTop: '2px solid #ffffff',
            boxShadow: '0px 2px 2px #bbbbbb'
        },

        '.Tab--selected': {
            border: '1px solid darkred',
            boxShadow: '0px 2px 2px #bbbbbb'
        }
    }
};


function Payment() {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [complete, setComplete] = useState(false)

    
    useEffect(() => {
        const getKey = async () => {
            const res = await axios.get('/config')
            const publishableKey = res.data.publishableKey
            setStripePromise(loadStripe(publishableKey));
        }
        getKey()

    }, []);

    useEffect(() => {
        const getKey = async () => {
            const res = await axios.post('/create-payment-intent', {})
            const clientSecret = res.data.clientSecret
            setClientSecret(clientSecret);
        }
        getKey()
    }, []);


    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            setComplete(true)
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);


    return (
        <>
            <main>
                {!complete && <Loader />}
                { complete && <div className="checkoutWrapper">
                    <div className="subscriptionBox">
                        <div className="ellie_logo"><img src={logo} alt="icon" className="logo_img" /></div>
                        <div className="subscriptionBox_header">Subscription payment</div>
                        <div className="subscriptionBox_subscription">
                            <div className="price"><h1>€ 9,95</h1></div>
                            <div className="p3mths">
                                <span>Ellie's Glossy magazine and newsletter</span>
                                <span>Payment term every three months</span>
                            </div>
                        </div>
                        <div className="thankyou">Thank you for subscribing!</div>
                    </div>

                    <div className="checkoutBox">
                        {clientSecret && stripePromise && (
                            <Elements key={clientSecret} stripe={stripePromise} options={{ clientSecret, appearance }}>
                                <CheckoutForm />
                            </Elements>
                        )}
                    </div>
                </div>}
            </main>

        </>
    );
}

export default Payment;