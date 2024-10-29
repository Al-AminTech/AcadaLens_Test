"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Bell, Search } from "lucide-react";
import React, { useState } from "react";
// import { Card, CardContent, Button, Input, Label, RadioGroup, RadioGroupItem } from "@/components/ui/card";
// import { Search, Bell } from "./icons"; // Ensure you replace these imports with your actual components

const SubscriptionComponent = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2)); // Ensure it doesn't exceed the max step
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1)); // Ensure it doesn't go below 1

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Subscription</h1>
          <div className="flex items-center">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <Bell className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {step === 1 ? (
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <a href="#" className="text-blue-600 hover:underline">&lt; Select Plan</a>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-200 mx-1"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-200 mx-1"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-800">
                  <span className="mr-2">👤</span>
                  Hi Agbede, your subscription will expire on June 18th, 2024
                </p>
              </div>

              <h2 className="text-lg font-semibold mb-4">Subscription payment</h2>

              <RadioGroup defaultValue="card" className="flex space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardName">Card Name</Label>
                    <Input id="cardName" placeholder="Card Name" />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="Card Number" />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <Label htmlFor="expDate">Exp Date</Label>
                      <Input id="expDate" placeholder="MM/YY" />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="CVV" />
                    </div>
                  </div>
                </div>

                <Card className="bg-blue-50">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Platinum</h3>
                    <p className="text-2xl font-bold mb-4">₦15,000 <span className="text-sm font-normal">/Monthly</span></p>
                    <h4 className="font-semibold mb-2">Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> 100 Outgoing Transfers/Mo
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> 3 Competitors
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> 2 Business Mastercards
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Premium Support
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> International Payments
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> AI Integrations
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span>Subscription fee</span>
                  <span>₦ 15,000</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₦ 15,000</span>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <a href="#" className="text-blue-600 hover:underline">&lt; Payment Information</a>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1 h-1 bg-blue-600 mx-1"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-200 mx-1"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-800">
                  <span className="mr-2">👤</span>
                  Hi Agbede, your subscription will expire on June 18th, 2024
                </p>
              </div>

              <h2 className="text-lg font-semibold mb-4">Subscription payment</h2>

              <RadioGroup defaultValue="card" className="flex space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem  value="card" id="card" />
                  <Label htmlFor="card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>

              <div className="space-y-4 mb-6">
                <div className="border rounded-md p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-8 bg-red-500 rounded mr-4"></div>
                    <div>
                      <div className="font-semibold">•••• •••• •••• 9876</div>
                      <div className="text-sm text-gray-500">Senni Ahmed Agboola</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">12/24</div>
                </div>
                <div className="border rounded-md p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-8 bg-blue-500 rounded mr-4"></div>
                    <div>
                      <div className="font-semibold">•••• •••• •••• 1235</div>
                      <div className="text-sm text-gray-500">Senni Ahmed Agboola</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">05/27</div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={handleBack}>Back</Button>
                <Button>Next</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SubscriptionComponent;
