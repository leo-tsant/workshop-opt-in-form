import { useState, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  linkedInUrl: string;
}

export default function OptInForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    linkedInUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.linkedInUrl.trim()) {
      setError('LinkedIn profile URL is required');
      return false;
    }
    if (!formData.linkedInUrl.includes('linkedin.com')) {
      setError('Please enter a valid LinkedIn profile URL');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new Error('Webhook URL is not configured');
      }

      await axios.post(webhookUrl, formData);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred while submitting the form');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="card w-full animate-fade-in text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">Thank You!</h2>
          <p className="text-text-secondary mb-6">
            Your access request has been submitted successfully. We'll review your application and get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-secondary"
          >
            Submit Another Request
          </button>
        </div>
    );
  }

  return (
    <div className="card w-full animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-white">Request Access</h2>

        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg text-error text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-text-primary">
                First Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                disabled={loading}
                placeholder="John"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-text-primary">
                Last Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                disabled={loading}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">
              Email <span className="text-error">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={loading}
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="linkedInUrl" className="block text-sm font-medium mb-2 text-text-primary">
              LinkedIn Profile URL <span className="text-error">*</span>
            </label>
            <input
              type="url"
              id="linkedInUrl"
              value={formData.linkedInUrl}
              onChange={(e) => handleInputChange('linkedInUrl', e.target.value)}
              disabled={loading}
              placeholder="https://www.linkedin.com/in/johndoe"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="spinner mr-2"></div>
                Submitting...
              </>
            ) : (
              'Request Access'
            )}
          </button>
        </form>
    </div>
  );
}
