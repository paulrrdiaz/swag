import SignInForm from '../components/forms/SignInForm.js'

export default function SignInPage () {
  function signIn () {

  }

  return (
    <div>

      <h1>Login</h1>

      <SignInForm
        onSubmit={signIn}
      />

    </div>
  )
}
