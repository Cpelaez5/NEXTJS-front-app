'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert"
import { useAuth } from '../../../lib/useAuth'


type FormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>()
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()
  const { registerUser } = useAuth();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await registerUser(data)
      console.log('RESULTADO: '+result+' SUCCESS: '+result.success)
      if (result.success) {
        router.push('/auth/login') // Redirect to login page after successful registration
      } else {
        setServerError(result.message)
      }
    } catch (error) {
      setServerError('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your details to register</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...register('username', { required: 'Username is required' })}
                placeholder="Enter your username"
              />
              {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: (value) => value === watch('password') || 'Passwords do not match'
                })}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
            </div>
            {serverError && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{serverError}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/auth/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}