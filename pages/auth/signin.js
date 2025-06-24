import { useSearchParams } from 'next/navigation';

export default function SignInPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div>
      <h1>Sign In</h1>
      {error === 'OAuthAccountNotLinked' && (
        <p style={{ color: 'red' }}>
          This email is already linked with another sign-in method. Please use the original provider you signed up with.
        </p>
      )}
      {/* Your sign-in buttons go here */}
    </div>
  );
}
