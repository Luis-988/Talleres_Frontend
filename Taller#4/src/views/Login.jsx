import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import FormField from '../components/FormField.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const hasEmptyFields = email.trim() === '' || password.trim() === '';

  function handleSubmit(event) {
    event.preventDefault();
    if (hasEmptyFields) return;
    setSubmitted(true);
  }

  return (
    <main className="page">
      <section className="login" aria-labelledby="login-title">
        <SectionHeading
          id="login-title"
          title="Iniciar sesión"
          subtitle="Accede a tu cuenta de ReactAcademy"
        />
        <form className="login__form" onSubmit={handleSubmit}>
          <FormField
            id="email"
            label="Correo"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={submitted}
            placeholder="tu@correo.com"
            autoComplete="email"
          />
          <FormField
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={submitted}
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <button className="button login__submit" type="submit" disabled={hasEmptyFields || submitted}>
            {submitted ? 'Enviado' : 'Entrar'}
          </button>
          <p className="login__microcopy">
            Esto es solo una interfaz: no se valida ni se guarda ningún dato.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
