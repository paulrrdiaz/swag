import LoginForm from '../components/forms/LoginForm.js'

export default function LoginPage () {

  function login () {

  }

  return (
    <div>

      <h1>Login</h1>

      <LoginForm
        onSubmit={login}
      />

    </div>
  )
}
