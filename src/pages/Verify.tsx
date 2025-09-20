import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Verify = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  const { user } = useAuth();

  const handleResendVerification = () => {
    // In a real app, this would call an API to resend verification email
    setVerificationSent(true);
    setTimeout(() => setVerificationSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Verify Your Account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Please verify your CUET email address to access the platform
            </p>
          </div>

          <div className="mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-blue-800 dark:text-blue-200">
                  Verification email sent to: <strong>{user?.email}</strong>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We've sent a verification link to your CUET email address. Please check your inbox and click the link to verify your account.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Next steps:
                </h3>
                <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>1. Check your CUET email inbox</li>
                  <li>2. Look for an email from CUET Reuse Hub</li>
                  <li>3. Click the verification link</li>
                  <li>4. Return here and refresh the page</li>
                </ol>
              </div>

              <button
                onClick={handleResendVerification}
                disabled={verificationSent}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                {verificationSent ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Verification Email Sent!
                  </span>
                ) : (
                  'Resend Verification Email'
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Having trouble? Contact support at{' '}
              <a href="mailto:support@cuetreusehub.edu.bd" className="text-blue-600 hover:text-blue-500">
                support@cuetreusehub.edu.bd
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;