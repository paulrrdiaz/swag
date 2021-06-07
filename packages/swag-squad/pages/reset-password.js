import ResetPasswordForm from '../components/forms/ResetPasswordForm.js'

export default function ResetPasswordPage () {
  function resetPassword () {

  }

  return (
    <div>

      <h1>Reset password</h1>

      <ResetPasswordForm
        onSubmit={resetPassword}
      />

    </div>
  )
}
