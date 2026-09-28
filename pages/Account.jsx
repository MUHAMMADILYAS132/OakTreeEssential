import { useState } from 'react'

export default function Account({ signIn = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page-width account-page">
      <header className="page-heading">
        <p className="eyebrow">Your Oak & Essential account</p>
        <h1>{signIn ? 'Welcome back.' : 'Your account.'}</h1>
        <p>Sign in to keep your orders and everyday essentials together.</p>
      </header>
      {submitted ? (
        <p className="account-notice" role="status">Account sign-in is not connected in this preview yet.</p>
      ) : (
        <form className="account-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="account-email">Email address</label>
            <input id="account-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="account-password">Password</label>
            <input id="account-password" name="password" type="password" autoComplete="current-password" required />
          </div>
          <button className="button" type="submit">Sign in <span aria-hidden="true">→</span></button>
        </form>
      )}
    </section>
  )
}