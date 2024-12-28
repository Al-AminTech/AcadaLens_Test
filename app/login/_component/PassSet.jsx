import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export default function PasswordUpdated() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold flex items-center justify-center gap-2">
            Password updated
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </h1>
          <p className="text-lg text-teal-700">
            Your password has been updated, kindly login using your new password
          </p>
        </div>
        <Button 
          className="w-full py-6 text-lg bg-teal-900 hover:bg-teal-800 text-white rounded-md"
          onClick={() => window.location.href = '/login'}
        >
          Back to login
        </Button>
      </div>
    </div>
  )
}