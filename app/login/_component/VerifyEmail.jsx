'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"

export default function VerificationCode() {
  const [code, setCode] = useState(Array(6).fill(''))
  const inputRefs = useRef([])

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)
      
      // Move to next input if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    if (/^[0-9]*$/.test(pastedData)) {
      const newCode = [...code]
      pastedData.split('').forEach((char, index) => {
        if (index < 6) newCode[index] = char
      })
      setCode(newCode)
      // Focus last filled input or first empty input
      const lastIndex = Math.min(pastedData.length, 6) - 1
      inputRefs.current[lastIndex]?.focus()
    }
  }

  const handleResend = () => {
    // Add resend logic here
    console.log('Resending code...')
  }

  const handleVerify = () => {
    const verificationCode = code.join('')
    console.log('Verifying code:', verificationCode)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-[32px] font-medium mb-2">
        Enter verification code ✨
      </h1>
      <p className="text-[#666666] mb-6">
        Enter the verification code sent to your email here
      </p>
      
      <div className="flex gap-2 mb-6">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            ref={el => inputRefs.current[index] = el}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-[52px] h-[52px] border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:border-[#006D77] focus:ring-1 focus:ring-[#006D77]"
          />
        ))}
      </div>

      <Button 
        onClick={handleVerify}
        className="w-full bg-[#006D77] hover:bg-[#005c64] text-white py-6 rounded-md mb-4"
      >
        Verify your account
      </Button>

      <div className="text-center">
        <span className="text-[#666666]">You didn't receive any code? </span>
        <button
          onClick={handleResend}
          className="text-[#006D77] hover:text-[#005c64] font-medium"
        >
          Resend Code
        </button>
      </div>
    </div>
  )
}

