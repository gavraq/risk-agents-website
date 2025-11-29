'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formsparkId = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

    if (!formsparkId) {
      setStatus('error');
      setErrorMessage('Form configuration error. Please try again later.');
      return;
    }

    try {
      const response = await fetch(`https://submit-form.com/${formsparkId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          _source: 'Risk Agents Early Access',
          _timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-50 mb-2">You&apos;re on the list!</h3>
        <p className="text-slate-400">
          We&apos;ll notify you when Risk Agents is ready for early access.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === 'submitting'}
            className="flex-1 px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary px-6 py-3 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Joining...
              </span>
            ) : (
              'Join Waitlist'
            )}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-red-400 text-sm">{errorMessage}</p>
        )}
      </form>

      <p className="text-slate-500 text-sm mt-4">
        <span className="led-indicator led-on mr-2"></span>
        Building the future of risk management with AI
      </p>
    </div>
  );
}
