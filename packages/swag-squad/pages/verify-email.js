import VerifyEmailForm from '../components/forms/VerifyEmailForm.js'

export default function VerifyEmailPage () {
  function verifyEmail () {

  }

  return (
    <div>

      <h1>Verify email</h1>

      <VerifyEmailForm
        onSubmit={verifyEmail}
      />

    </div>
  )
}
