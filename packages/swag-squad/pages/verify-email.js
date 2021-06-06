import VerifyEmailForm from '../components/forms/VerifyEmailForm.js'

export default function VerifyEmailPage () {

  function submitForgotPassword () {

  }

  return (
    <div>

      <h1>Verify email</h1>

      <VerifyEmailForm
        onSubmit={submitForgotPassword}
      />

    </div>
  )
}
