import Cookies from 'js-cookie';

export const signinApi = async (username:string, password:string) => {
  const data = await fetch('http://localhost:3000/auth/login', {
    method: 'post',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  return await data.json();
};

export const registerApi = async (name:string, username:string, password:string) => {
  const data = await fetch('http://localhost:3000/users/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      username: username,
      password: password,
    }),
  });
  return await data.json();
};

export const createApi = async (label?:string, description?:string) => {
  const data = await fetch('http://localhost:3000/todo/create', {
    method: 'post',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      label: label,
      description: description,
    }),
  });
  return await data.json();
};

export const viewApi = async () => {
  const data = await fetch('http://localhost:3000/todo/view', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return await data.json();
};

export const updateApi = async (label?:string, description?:string, id?:string) => {
  const data = await fetch(`http://localhost:3000/todo/update/${id}`, {
    method: 'put',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      label: label,
      description: description,
    }),
  });
  return await data.json();
};

export const deleteApi = async (id:string) => {
  const data = await fetch(`http://localhost:3000/todo/delete/${id}`, {
    method: 'delete',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return await data.json();
};

export const detailApi = async (id:string)=>{
  const data = await fetch(`http://localhost:3000/todo/view/${id}`, {
    method: 'get',
    headers: { 
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return await data.json()
}

export const completeApi = async (complete:boolean, id:string) => {
  const data = await fetch(`http://localhost:3000/todo/complete/${id}`, {
    method: 'put',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      complete: complete,
    }),
  });
  return await data.json();
};