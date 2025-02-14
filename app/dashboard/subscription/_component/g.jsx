'use client'

import { useState } from 'react'
import { CreditCard } from 'lucide-react'

export default function PaymentForm() {
  const [state, setState] = useState({
    step: 1,
    paymentMethod: 'credit-card'
  })

  const nextStep = () => {
    setState(prev => ({ ...prev, step: Math.min(prev.step + 1, 3) }))
  }

  const prevStep = () => {
    setState(prev => ({ ...prev, step: Math.max(prev.step - 1, 1) }))
  }

  const setPaymentMethod = (method) => {
    setState(prev => ({ ...prev, paymentMethod: method }))
  }

  return (
    <div className="max-w-[1000px] mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <button className="text-xl">&lt;</button>
        <h1 className="text-xl font-semibold">
          {state.step === 1 ? 'Select Plan' : 'Payment Information'}
        </h1>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 items-center mb-8">
        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
        <div className="w-16 border-t-2 border-cyan-500"></div>
        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
        <div className="w-16 border-t-2 border-cyan-500"></div>
        <div className={`w-3 h-3 rounded-full ${state.step >= 3 ? 'bg-cyan-500' : 'bg-gray-200'}`}></div>
        <div className="w-16 border-t-2 border-gray-200"></div>
        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
      </div>

      {/* User Info Banner */}
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          <p className="text-gray-600">
            Hi Agboola, you're subscribed user, your subscription will expire on{' '}
            <span className="text-cyan-500">June 16th, 2024</span>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-6">
            {state.step === 1 ? 'Subscription payment' : 'Payment Information'}
          </h2>
          
          {state.step === 1 && (
            <>
              {/* Payment Method Selection */}
              <div className="flex gap-4 mb-8">
                <button
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                    state.paymentMethod === 'credit-card' 
                      ? 'bg-cyan-800 text-white' 
                      : 'border border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('credit-card')}
                >
                  <CreditCard size={20} />
                  Credit Card
                </button>
                <button
                  className={`px-6 py-3 rounded-lg ${
                    state.paymentMethod === 'paypal' 
                      ? 'bg-cyan-800 text-white' 
                      : 'border border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  PayPal
                </button>
              </div>

              {state.paymentMethod === 'credit-card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg"
                      placeholder="Card Number"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Card Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg"
                      placeholder="Sanni Ahmed Agboola"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Exp Date</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg"
                        placeholder="12/29"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">CVV</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg"
                        placeholder="***"
                      />
                    </div>
                  </div>
                </div>
              )}

              {state.paymentMethod === 'paypal' && (
                <div className="space-y-6">
                  <p>You will be redirected to PayPal to complete your payment.</p>
                </div>
              )}
            </>
          )}

          {state.step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block mb-2">Card Number</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  value="**** **** **** 1235"
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-2">Card Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  value="Sanni Ahmed Agboola"
                  readOnly
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Exp Date</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    value="12/29"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2">CVV</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    value="***"
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}

          {state.step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block mb-2">Card Number</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  value="**** **** **** 1235"
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-2">Card Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  value="Sanni Ahmed Agboola"
                  readOnly
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Exp Date</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    value="12/29"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2">CVV</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    value="***"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Billing Address</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="4 Odeyemi Street, Off Unilorin permanent site, Sanrab, Tanke, Ilorin."
                />
              </div>
            </div>
          )}

          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>N 15,000</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>----</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>N 15,000</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              className="px-8 py-3 border border-cyan-800 text-cyan-800 rounded-lg"
              onClick={prevStep}
            >
              {state.step === 1 ? 'Back' : 'Cancel'}
            </button>
            <button 
              className="px-8 py-3 bg-cyan-800 text-white rounded-lg"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-blue-50 p-6 rounded-xl h-fit">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl">Platinum</h3>
            <div>
              <span className="text-2xl font-semibold">N15,000</span>
              <span className="text-gray-600">/Monthly</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">Explore AcadaLens for free</p>
          
          <h4 className="text-xl mb-4">Features</h4>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>✓ 100 Outgoing Transfers/Mo</span>
              <span>✓ 3 Competitors</span>
            </li>
            <li className="flex justify-between">
              <span>✓ 2 Business Mastercards</span>
              <span>✓ Premium Support</span>
            </li>
            <li className="flex justify-between">
              <span>✓ International Payments</span>
              <span>✓ AI Integrations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

