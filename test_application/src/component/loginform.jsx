import { useMemo, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  rememberMe: false,
  termsAccepted: false,
}

const Login = () => {
  const [mode, setMode] = useState('login')
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const isLoginMode = useMemo(() => mode === 'login', [mode])

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: '',
      }))
    }
  }

  const resetStateForMode = (nextMode) => {
    setMode(nextMode)
    setFormData(initialForm)
    setErrors({})
    setSuccessMessage('')
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!isLoginMode && !formData.name.trim()) {
      nextErrors.name = 'Full name is required.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    }

    if (!formData.password.trim()) {
      nextErrors.password = 'Password is required.'
    } else if (!isLoginMode && formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.'
    }

    if (!isLoginMode && formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }

    if (!isLoginMode && !formData.termsAccepted) {
      nextErrors.termsAccepted = 'Please accept the terms to continue.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    setSuccessMessage(
      isLoginMode
        ? `Welcome back, ${formData.email}!`
        : `Account created for ${formData.name}!`
    )
  }

  return (
    <section className="auth-page">
      <div className="auth-card" role="region" aria-label="Authentication form">
        <div className="auth-header">
          <p className="auth-eyebrow">Secure Access</p>
          <h1>{isLoginMode ? 'Welcome Back' : 'Create Your Account'}</h1>
          <p className="auth-subtitle">
            {isLoginMode
              ? 'Sign in to continue managing your dashboard.'
              : 'Join now and start using all features in minutes.'}
          </p>
        </div>

        <div className="auth-toggle" role="tablist" aria-label="Select authentication mode">
          <button
            className={`auth-toggle-btn ${isLoginMode ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-selected={isLoginMode}
            onClick={() => resetStateForMode('login')}
          >
            Login
          </button>
          <button
            className={`auth-toggle-btn ${!isLoginMode ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-selected={!isLoginMode}
            onClick={() => resetStateForMode('signup')}
          >
            Sign Up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {!isLoginMode && (
            <div className="field-wrap">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Alex Morgan"
                value={formData.name}
                onChange={handleInputChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
          )}

          <div className="field-wrap">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="field-wrap">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder={isLoginMode ? 'Enter your password' : 'At least 8 characters'}
              value={formData.password}
              onChange={handleInputChange}
              aria-invalid={Boolean(errors.password)}
            />
            {errors.password && <span className="field-error">{errors.password}</span>}
          </div>

          {!isLoginMode && (
            <div className="field-wrap">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Repeat your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                aria-invalid={Boolean(errors.confirmPassword)}
              />
              {errors.confirmPassword && (
                <span className="field-error">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          {isLoginMode ? (
            <label className="inline-check" htmlFor="rememberMe">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              Remember me on this device
            </label>
          ) : (
            <div>
              <label className="inline-check" htmlFor="termsAccepted">
                <input
                  id="termsAccepted"
                  name="termsAccepted"
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                />
                I agree to the Terms and Privacy Policy
              </label>
              {errors.termsAccepted && (
                <span className="field-error">{errors.termsAccepted}</span>
              )}
            </div>
          )}

          <button className="auth-submit" type="submit">
            {isLoginMode ? 'Login' : 'Create Account'}
          </button>

          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </section>
  )
}

export default Login