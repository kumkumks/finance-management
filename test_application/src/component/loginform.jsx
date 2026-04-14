const Form = () => {
  return (
    <section className='form-page'>
      <div className='form-card'>
        <div className='form-card__intro'>
          <p className='form-card__eyebrow'>Learner portal</p>
          <h1 className='form-card__title'>Sign in to continue learning</h1>
          <p className='form-card__copy'>
            Pick up your progress, review lessons, and keep your dashboard in sync.
          </p>
        </div>

        <form className='auth-form'>
          <label className='auth-field'>
            <span>Email address</span>
            <input type='email' placeholder='you@example.com' />
          </label>

          <label className='auth-field'>
            <span>Password</span>
            <input type='password' placeholder='Enter your password' />
          </label>

          <div className='auth-row'>
            <label className='auth-remember'>
              <input type='checkbox' />
              <span>Keep me signed in</span>
            </label>

            <a className='auth-link' href='/'>Forgot password?</a>
          </div>

          <button type='submit' className='auth-button'>
            Sign in
          </button>
        </form>

        <p className='form-card__footer'>
          New here? <a href='/'>Create an account</a>
        </p>
      </div>
    </section>
  )
}

export default Form