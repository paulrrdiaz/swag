import SignInForm from '../components/forms/SignInForm.js'

export default function SignInPage () {

  function login () {

  }

  return (
    <div>

      <h1>Login</h1>

      <SignInForm
        onSubmit={login}
      />

    </div>
  )
}
