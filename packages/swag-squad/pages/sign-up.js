import SignUpForm from '../components/forms/SignUpForm.js'

export default function SignUpPage () {

  function login () {

  }

  return (
    <div>

      <h1>Sign up</h1>

      <SignUpForm
        onSubmit={login}
      />

    </div>
  )
}
