import { useState } from 'react'

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)
  const submit = (event) => { event.preventDefault(); setSubscribed(true) }
  return <section className="newsletter"><p className="eyebrow">A note from us</p><h2>A little more good in your inbox.</h2><p>New rituals, thoughtful reads, and 10% off your first order.</p>{subscribed ? <p className="newsletter-success" role="status">You're on the list. Look out for a note from us soon.</p> : <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required /><button type="submit">SIGN ME UP →</button></form>}</section>
}