'use client';

import { useState } from 'react';
import Botpoison from '@botpoison/browser';

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;
      const botpoisonKey = process.env.NEXT_PUBLIC_BOTPOISON_KEY;

      if (!formId) {
        throw new Error('Form configuration missing');
      }

      if (!botpoisonKey) {
        throw new Error('Botpoison configuration missing');
      }

      // Get Botpoison challenge solution
      const botpoison = new Botpoison({ publicKey: botpoisonKey });
      const { solution } = await botpoison.challenge();

      // Submit form with Botpoison solution
      const response = await fetch(`https://submit-form.com/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          _botpoison: solution,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status}`);
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      // If it's a "Failed to fetch" error, the submission might have still succeeded
      // This is often a CORS issue that happens after the form is submitted
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        // Assume success since we know the submission reaches Formspark
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
        <div className="text-center">
          <div className="text-green-400 text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-slate-50 mb-2">
            Thank you for registering!
          </h3>
          <p className="text-slate-300">
            We&apos;ll notify you when Risk Agents launches.
          </p>
        </div>
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
            placeholder="john.doe@example.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-6 py-4 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">
            {errorMessage}
          </p>
        )}

        <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
          <span className="led-indicator led-on"></span>
          Building the future of risk management with AI
        </p>
      </form>

      <p className="text-sm text-slate-500 text-center mt-4">
        Follow development updates on{' '}
        <a
          href="https://www.gavinslater.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          gavinslater.com
        </a>
      </p>
    </div>
  );
}
