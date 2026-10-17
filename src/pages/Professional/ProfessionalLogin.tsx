import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { LoginFormData } from '../../types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Professional.css';

const initialFormData: LoginFormData = {
  username: '',
  password: '',
  token: '',
};

function ProfessionalLogin() {
  useDocumentTitle('Profissional Login | Angelita Santos');

  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (isAuthenticated) {
    return <Navigate to='/profissional/detalhes' replace />;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const field = event.target.name as keyof LoginFormData;
    const value = event.target.value;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [field]: value,
    }));

    setErrorMessage('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const isValidLogin = login(formData);

    if (!isValidLogin) {
      setErrorMessage(
        'Usuário, senha ou token não correspondem às credenciais de demonstração.',
      );
      return;
    }

    navigate('/profissional/detalhes');
  }

  return (
    <main className='login-page'>
      <section className='login-card'>
        <Link className='back-link' to='/profissional'>
          <span aria-hidden='true'>←</span>Voltar para experiências
        </Link>

        <span className='login-icon' aria-hidden='true'>🔒</span>

        <p className='hero-eyebrow'>Área demonstrativa</p>

        <h1>Acesso profissional</h1>

        <p className='login-description'>
          Informe as credenciais de demonstração para visualizar conteúdos
          adicionais da trajetória profissional.
        </p>

        <form className='login-form' onSubmit={handleSubmit}>
          <div className='form-field'>
            <label htmlFor='username'>Usuário</label>

            <input
              id='username'
              name='username'
              type='text'
              value={formData.username}
              onChange={handleChange}
              placeholder='Digite seu usuário'
              autoComplete='username'
              required
            />
          </div>

          <div className='form-field'>
            <label htmlFor='password'>Senha</label>

            <input
              id='password'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Digite sua senha'
              autoComplete='current-password'
              required
            />
          </div>

          <div className='form-field'>
            <label htmlFor='token'>Token de acesso</label>

            <input
              id='token'
              name='token'
              type='text'
              value={formData.token}
              onChange={handleChange}
              placeholder='Digite seu token'
              autoComplete='off'
              required
            />
          </div>

          {errorMessage && (<p className='form-error' role='alert'>{errorMessage}</p>)}

          <button className='login-button' type='submit'>Entrar na área detalhada<span aria-hidden='true'>→</span></button>
        </form>

        <p className='login-notice'>
          Este login é apenas uma demonstração visual. Não utilize informações confidenciais ou credenciais reais.
        </p>
      </section>
    </main>
  );
}

export default ProfessionalLogin;
