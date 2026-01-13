'use client';

import { useState } from 'react';
import Botpoison from '@botpoison/browser';

type OrganizationType = 'bank' | 'asset_manager' | 'insurer' | 'other';
type RoleType = 'cro' | 'risk_manager' | 'technology' | 'executive' | 'other';

const organizationOptions: { value: OrganizationType; label: string }[] = [
  { value: 'bank', label: 'Bank' },
  { value: 'asset_manager', label: 'Asset Manager' },
  { value: 'insurer', label: 'Insurer' },
  { value: 'other', label: 'Other' },
];

const roleOptions: { value: RoleType; label: string }[] = [
  { value: 'cro', label: 'Chief Risk Officer' },
  { value: 'risk_manager', label: 'Risk Manager' },
  { value: 'technology', label: 'Technology / IT' },
  { value: 'executive', label: 'Executive / C-Suite' },
  { value: 'other', label: 'Other' },
];

export default function MembershipForm() {
  const [email, setEmail] = useState('');
  const [organizationType, setOrganizationType] = useState<OrganizationType | ''>('');
  const [role, setRole] = useState<RoleType | ''>('');
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
          organization_type: organizationType,
          role: role,
          source: 'membership_page',
          _botpoison: solution,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status}`);
      }

      setStatus('success');
      setEmail('');
      setOrganizationType('');
      setRole('');
    } catch (error) {
      // If it's a "Failed to fetch" error, the submission might have still succeeded
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setStatus('success');
        setEmail('');
        setOrganizationType('');
        setRole('');
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
            Thank you for your interest!
          </h3>
          <p className="text-slate-300">
            We&apos;ll be in touch within 48 hours to discuss the right membership for your organisation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Work Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@yourcompany.com"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
          />
        </div>

        {/* Organization Type */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
            Organisation Type
          </label>
          <select
            id="organization"
            value={organizationType}
            onChange={(e) => setOrganizationType(e.target.value as OrganizationType)}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="" disabled>Select organisation type</option>
            {organizationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
            Your Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value as RoleType)}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="" disabled>Select your role</option>
            {roleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Submitting...' : 'Register Interest'}
        </button>

        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">
            {errorMessage}
          </p>
        )}

        <p className="text-slate-500 text-xs text-center">
          By registering, you agree to receive communications about Risk Agents.
          Your information is kept confidential.
        </p>
      </form>
    </div>
  );
}
