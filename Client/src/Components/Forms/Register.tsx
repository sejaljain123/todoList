import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { registerApi } from '../../api/index';

interface RegisterForm {
  name?: string;
  username?: string;
  password?: string;
}
const Register = () => {
  const [formData, setFormData] = useState<RegisterForm>();
  const history = useHistory();
  const updateInput = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event: any) => {
    if (!formData?.name || !formData?.username || !formData?.password) {
      alert('Input Fields cannot be empty');
    } else {
      event.preventDefault();
      await registerApi(formData.name, formData.username, formData.password);
      history.push('/');
    }
  };

  return (
    <>
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Register</h2>

          <input
            name="name"
            type="name"
            placeholder="Name"
            value={formData?.name || ''}
            onChange={updateInput}
          />
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
            placeholder="Password"
            value={formData?.password || ''}
            onChange={updateInput}
          />
          <button type="submit" onClick={handleSubmit} className="submitButton">
            Register
          </button>

          <Link to="/" className="link">
            Already an User?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
