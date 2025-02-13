'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'

export default function CreatePassword() {
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/
    return passwordRegex.test(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Validate password
    if (!validatePassword(password)) {
      setError('Password must be at least 5 characters long and contain at least one uppercase letter, one number, and one special character')
      return
    }

    setError('')
    setLoading(true)

    try {
      const response = await axios.post('https://academiabackend-1-1ekf.onrender.com/user/resetpassword', {
        token,
        password,
        confirmPassword
      })
      console.log('Password reset successful:', response.data)
    } catch (error) {
      console.error('Error resetting password:', error)
      setError('Failed to reset password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
   <div className='loginbg'>
     <div className="w-full max-w-md mx-auto p-6">
      <div className="space-y-2 mb-8">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          Create new password
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </h1>
        <p className="text-teal-700">
          Your new password should be different from the previous password
        </p>
      </div>

      {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="token">Reset Token</Label>
          <Input
            id="token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="border-muted-foreground/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-muted-foreground/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-muted-foreground/20"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-teal-900 hover:bg-teal-800"
          disabled={loading}
        >
          {loading ? 'Resetting Password...' : 'Continue'}
        </Button>
      </form>
    </div>
   </div>
  )
}
