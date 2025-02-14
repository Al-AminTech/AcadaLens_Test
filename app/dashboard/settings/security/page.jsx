'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { AlertCircle, Check } from 'lucide-react'

export default function Component() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [validations, setValidations] = useState({
    length: false,
    special: false,
    number: false,
    different: false,
  })

  const validatePassword = (password) => {
    setValidations({
      length: password.length > 7,
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /\d/.test(password),
      different: password !== currentPassword,
    })
  }

  const handleNewPasswordChange = (e) => {
    const value = e.target.value
    setNewPassword(value)
    validatePassword(value)
  }

  return (
    <div className='shadow-xl rounded-lg bg-white w-full md:w-[60rem] p-10 min-h-screen m-0 md:m-5'>
      <div className=''>
      <div className=''>
        <h1 className="text-2xl font-bold tracking-tight">Password</h1>
        <p className="text-sm text-muted-foreground mt-2">
          In order to protect your account, make sure your password:
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2 text-sm">
            {validations.length ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-muted-foreground" />
            )}
            is longer than 7 characters
          </li>
          <li className="flex items-center gap-2 text-sm">
            {validations.special ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-muted-foreground" />
            )}
            At least one special character
          </li>
          <li className="flex items-center gap-2 text-sm">
            {validations.number ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-muted-foreground" />
            )}
            At least one number
          </li>
          <li className="flex items-center gap-2 text-sm">
            {validations.different ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-muted-foreground" />
            )}
            Can&apos;t be the same as previous
          </li>
        </ul>
      </div>
      <div className="space-y-4 pt-12">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className=" w-full md:w-96 "
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
             className=" w-full md:w-96 "
          />
        </div>
        <Button
          className="w-full md:w-96 bg-[#005C73]"
          disabled={!Object.values(validations).every(Boolean)}
        >
          Change Password
        </Button>
      </div>
    </div>
    </div>
  )
}