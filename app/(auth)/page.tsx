'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock } from 'lucide-react';

type Mode = 'login' | 'register';

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>('login');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const router = useRouter();

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ??
    'http://localhost:4001/api/auth';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const endpoint =
        mode === 'login'
          ? `${apiUrl}/login`
          : `${apiUrl}/register`;

      const res = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ??
            (mode === 'login'
              ? 'Login failed'
              : 'Registration failed')
        );
      }

      if (data.accessToken) {
        localStorage.setItem(
          'accessToken',
          data.accessToken
        );

        router.push('/dashboard');
      }

      setMessage(
        data.message ??
          (mode === 'login'
            ? 'Login successful'
            : 'Registration successful')
      );

      if (mode === 'register') {
        setMode('login');
        setPassword('');
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      {/* Header */}

      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-text">
          {mode === 'login'
            ? 'Welcome Back'
            : 'Create Account'}
        </h1>

        <p className="mt-4 text-base text-subtitle">
          {mode === 'login'
            ? 'Sign in to continue to your dashboard.'
            : 'Create your account to start managing your expenses.'}
        </p>
      </div>

      {/* Toggle */}

      <div className="mb-12 grid grid-cols-2 rounded-2xl bg-blue-50 p-1">
        <button
          type="button"
          onClick={() => {
            setMode('login');
            setError(null);
            setMessage(null);
          }}
          className={`h-12 rounded-xl text-sm font-semibold transition-all duration-300 ${
            mode === 'login'
              ? 'bg-[#356AE6] text-white shadow-md'
              : 'text-[#356AE6] hover:bg-blue-100'
          }`}
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => {
            setMode('register');
            setError(null);
            setMessage(null);
          }}
          className={`h-12 rounded-xl text-sm font-semibold transition-all duration-300 ${
            mode === 'register'
              ? 'bg-[#356AE6] text-white shadow-md'
              : 'text-[#356AE6] hover:bg-blue-100'
          }`}
        >
          Register
        </button>
      </div>

      {/* Form */}

      <form
        onSubmit={onSubmit}
        className="space-y-8"
      >
        {/* Username */}

        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Username
          </label>

          <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-white px-5 transition-all duration-200 focus-within:border-[#356AE6] focus-within:ring-4 focus-within:ring-blue-100">
            <User
              size={20}
              className="mr-4 text-gray-400"
            />

            <input
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              placeholder="Enter your username"
              className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
              required
            />
          </div>
        </div>

                {/* Password */}

        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-white px-5 transition-all duration-200 focus-within:border-[#356AE6] focus-within:ring-4 focus-within:ring-blue-100">
            <Lock
              size={20}
              className="mr-4 text-gray-400"
            />

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Forgot Password */}

        {mode === 'login' && (
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-medium text-[#356AE6] transition hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        )}

        {/* Submit Button */}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 h-14 w-full rounded-2xl bg-[#356AE6] text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#2E5FD0] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading
            ? mode === 'login'
              ? 'Signing In...'
              : 'Creating Account...'
            : mode === 'login'
            ? 'Sign In'
            : 'Create Account'}
        </button>

        {/* Error Message */}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Success Message */}

        {message && (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-600">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}