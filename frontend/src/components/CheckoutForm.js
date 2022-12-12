import React, { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement, AddressElement } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'

const options = {
    fields: {
        billingDetails: {
            name: 'never'
        },
    }
}

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    const navigate= useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsProcessing(true)

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`
            },

            redirect: "if_required"   // if not using a card then redirect to selected bank
        })

        if (error) {
            setMessage(error.message)
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setMessage("Payment status: " + paymentIntent.status)
            navigate('/completion')
        } else {
            setMessage('Unexpected state')
        }

        setIsProcessing(false)

    }

    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <AddressElement options={{ mode: 'billing' }} />
                <PaymentElement options={options} />
                <button disabled={isProcessing} id="submit" className="checkout_btn">
                    <span id="button-text">
                        {isProcessing ? "Processing..." : "Pay now"}
                    </span>
                </button>
                {message && <div id="payment-message">{message}</div>}
            </form>
        </>
    )
}

export default CheckoutForm