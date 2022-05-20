import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'


function AddEventView() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading  = useSelector(state => state.events.loading)
  

  const initialValues = { title: '', place: '', date: '', time: '', description: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    dispatch(addEvent(formValues))
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    
    if (!values.title) {
      errors.title = "Title is required";
    } else if (values.title.length < 4) {
      errors.title = "Title must be more than 4 characters";
    }
    if (!values.place) {
      errors.place = "Place is required";
    }
   
    if (!values.date) {
      errors.date = "Date is required";
    }
    if (!values.time) {
      errors.time = "Time is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    } else if (values.description.length < 4) {
      errors.description = "Password must be more than 4 characters";
    } 
    return errors;
  };

  useEffect(() => {
    if(!loading && isSubmit) {
      navigate('/')
    }
  }, [loading, isSubmit, navigate])
  
  return (
    <div className="container">
    

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>title</label>
            <input type="text" name="title" value={formValues.title} onChange={handleChange}/>
          </div>
          <p>{formErrors.title}</p>

          <div className="field">
            <label>place</label>
            <input type="text" name="place" value={formValues.place} onChange={handleChange}/>
          </div>
          <p>{formErrors.place}</p>
          

          <div className="field">
            <label>Date</label>
            <input type="date" name="date" value={formValues.date} onChange={handleChange}/>
          </div>
          <p>{formErrors.date}</p>
          
          <div className="field">
            <label>Time</label>
            <input
              type="time" name="time" value={formValues.time} onChange={handleChange} />
          </div>
          <p>{formErrors.time}</p>

          <div className="field">
            <label>description</label>
            <input
              type="text" name="description" value={formValues.description} onChange={handleChange} />
          </div>
          <p>{formErrors.description}</p>

          <button className='mb-4 btn btn-block text-light gradient-color'> { loading ?'Loading...': 'Add Event'}</button>
        </div>
      </form>
    </div>
  );
}

export default AddEventView