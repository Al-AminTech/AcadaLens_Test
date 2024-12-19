'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreatePassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your password validation and submission logic here
    console.log('Password submitted:', password)
  }

  return (
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

      <form onSubmit={handleSubmit} className="space-y-6">
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
        >
          Continue
        </Button>
      </form>
    </div>
  )
}

