import React from 'react';
import { useState, useEffect } from 'react';
import { createApi, viewApi, deleteApi, completeApi } from '../../api/index';
import './Todo.css';
import trash from './trash.png';
import edit from './edit.png';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

interface TodoData {
  label: string;
  description: string;
  complete: boolean;
  user: string;
  date: string;
}
interface ListItems {
  label?: string;
  description?: string;
  complete?: boolean;
  user?: string;
  date?: string;
}
const Todo = () => {
  const [listitems, setListitems] = useState<ListItems>();
  const [tododata, setTodoData] = useState<TodoData[]>();

  const history = useHistory();
  useEffect(() => {
    handleDisplay();
  }, []);
  const handleDisplay = async () => {
    const data = await viewApi();
    setTodoData(data);
  };
  const updateInput = (e: any) => {
    setListitems({
      ...listitems,
      [e.target.name]: e.target.value,
    });
  };

  const handleDone = async (complete: boolean, id: string) => {
    await completeApi(complete, id);
    handleDisplay();
  };

  const handleList = (event: any) => {
    event.preventDefault();
    const data = createApi(listitems?.label, listitems?.description);
    console.log(data);
    setListitems({
      label: '',
      description: '',
    });
    handleDisplay();
    console.log(listitems);
  };
  const signOut = () => {
    Cookies.remove('token');
    history.push('/');
  };

  const handleDelete = async (id: string) => {
    const data = await deleteApi(id);
    // console.log(data);
    handleDisplay();
  };

  return (
    <div className="todo">
      <div className="todocontainer">
        <div className="todoform">
          <h2>Add Tasks Here🗒</h2>
          <input
            placeholder="Add Tasks"
            name="label"
            value={listitems?.label || ''}
            onChange={updateInput}
          />
          <textarea
            placeholder="Add Description"
            name="description"
            value={listitems?.description || ''}
            onChange={updateInput}
          />
          <button onClick={handleList}>Add Task</button>
          <button onClick={signOut}>Sign Out</button>
        </div>
        <div className="todolistview">
          <h2>Tasks</h2>
          {tododata?.map((i: any) => {
            return (
              <div key={i._id} className="todoitem">
                <div className="todoitemcontent">
                  <input
                    type="checkbox"
                    checked={i.complete}
                    onChange={() => {
                      handleDone(!i.complete, i._id);
                    }}
                  />
                  <span className={i.complete ? 'strikelabel' : ''}>{i.label}</span>

                  <span title={i.description} className="todoitemdescription">
                    {i.description.substring(0, 8)}....
                  </span>
                  <span>{i.date.substring(0, 10)}</span>
                </div>
                <div className="todoicons">
                  <Link to={`/todo/${i._id}`}>
                    <img height="25px" width="25px" src={edit} alt="edit" title="Update Todo" />
                  </Link>
                  <img
                    src={trash}
                    alt="delete"
                    title="Delete Item from Todo"
                    height="25px"
                    width="25px"
                    onClick={() => handleDelete(i._id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
