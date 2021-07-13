import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';
import { useState } from 'react';
import { signinApi } from '../../api/index';
import Cookies from 'js-cookie';

interface SignInForm {
  username?: string;
  password?: string;
}
const SignIn = () => {
  const [formData, setFormData] = useState<SignInForm>();
  const history = useHistory();

  const updateInput = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    if (!formData?.username || !formData?.password) {
      alert('input fields cannot be empty');
    } else {
      e.preventDefault();
      const data = await signinApi(formData?.username, formData?.password);
      if (data.success === 'true') {
        Cookies.set('token', data.access_token);
        history.push('/todo');
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Please Sign In</h2>
          <input
            name="username"
            type="username"
            placeholder="Username"
            value={formData?.username || ''}
            onChange={updateInput}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={formData?.password || ''}
            onChange={updateInput}
          />
          <button className="submitButton" type="submit" onClick={handleSubmit}>
            Sign In
          </button>
          <Link to="/register" className="link">
            New User?
          </Link>
          <h2>&nbsp;</h2>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
