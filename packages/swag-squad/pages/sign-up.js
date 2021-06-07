import SignUpForm from '../components/forms/SignUpForm.js'

export default function SignUpPage () {
  function signUp () {

  }

  return (
    <div>

      <h1>Sign up</h1>

      <SignUpForm
        onSubmit={signUp}
      />

    </div>
  )
}
