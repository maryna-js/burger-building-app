import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    return await fetch('/api/protected')
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      });
  };

  const submitCallback = (event: FormEvent) => {
    event.preventDefault();
    handleLogin()
      .then(() => {
        navigate('/app');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <form className="form-container" onSubmit={submitCallback}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value="xm" disabled />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" value="exercise" disabled />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
