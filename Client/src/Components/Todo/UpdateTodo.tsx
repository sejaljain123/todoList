import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { detailApi, updateApi } from '../../api/index';
import { useEffect, useState } from 'react';
interface Details {
  label?: string;
  description?: string;
  _id?: string;
}

const UpdateTodo = () => {
  const { id }: any = useParams();
  const history = useHistory();
  const [details, setDetails] = useState<Details>();
  useEffect(() => {
    handleDetail();
  }, []);

  const handleDetail = async () => {
    const data = await detailApi(id);
    console.log(data);
    setDetails(data);
  };
  const updateInput = (e: any) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = async (event: any) => {
    event.preventDefault();
    await updateApi(details?.label, details?.description, details?._id);
    history.push('/todo');
  };

  const back = () => {
    history.push('/todo');
  };
  return (
    <div className="todo">
      <div className="todoform">
        <h2>Update your Todo ✍</h2>
        <input
          placeholder="Add Tasks"
          name="label"
          value={details?.label || ''}
          onChange={updateInput}
        />
        <textarea
          placeholder="Add Description"
          name="description"
          value={details?.description || ''}
          onChange={updateInput}
        />
        <button onClick={(e) => handleUpdate(e)}>Update Task</button>
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
};

export default UpdateTodo;
