import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.js'

export default function ForgotPasswordPage () {
  function submitForgotPassword () {

  }

  return (
    <div>

      <h1>Forgot password</h1>

      <ForgotPasswordForm
        onSubmit={submitForgotPassword}
      />

    </div>
  )
}
