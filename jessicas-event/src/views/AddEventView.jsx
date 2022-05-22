import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'


function AddEventView() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading  = useSelector(state => state.events.loading)
  
 
  const [formErrors, setFormErrors] = useState({});
  const [eventAdded, setEventAdded] = useState(false)

  const [formValues, setFormValues] = useState({
    id: '',
    title: '',
    description: '',
    place: '',
    date: '',
    time: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    dispatch(addEvent(formValues));
    setEventAdded(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === '') {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "You must enter a title";
    } else if (values.title.length < 4) {
      errors.title = "Title must be more than 4 characters";
    }
    if (!values.place) {
      errors.place = "You must enter a place";
    }
   
    if (!values.date) {
      errors.date = "Date is required";
    }
    if (!values.time) {
      errors.time = "Time is required";
    }
    if (!values.description) {
      errors.description = "You must enter a description";
    } else if (values.description.length < 4) {
      errors.description = "Password must be more than 4 characters";
    } 
    return errors;
  };

  useEffect(() => {
    if(!loading  && validate && eventAdded) {
      navigate('/')
    }
  }, [loading, validate, eventAdded, navigate])
  
  return (
  <div className='mt-5 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded'>
      <h2  className='text-center mb-4'>Add Event</h2>
      <form onSubmit={handleSubmit} className='pe-5 ps-5 d-flex justify-content-center'>

        <div className="row">
          <div className="col-lg-12 mb-4 pe-lg-2" >
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name='title' onChange={handleChange} value={formValues.title} className='form-control' />
            <p className='error text-danger'>{formErrors.title}</p>
          </div> 
          <div className="col-lg-12 mb-4 pe-lg-2" >
            <label htmlFor="place">Place: </label>
            <input type="text" id='place' name='place' onChange={handleChange} value={formValues.place} className='form-control' />
            <p className='error text-danger'>{formErrors.place}</p>
          </div> 
          <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2" >
            <label htmlFor="date">Date: </label>
            <input type="date" id='date' name='date' onChange={handleChange} value={formValues.date} className='form-control' />       
            <p className='error text-danger'>{formErrors.date}</p>
          </div>
          <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2">
            <label htmlFor="time">Time: </label>       
            <input type="time" id='time' name='time' onChange={handleChange} value={formValues.time} className='form-control' />
            <p className='error text-danger'>{formErrors.time}</p>
          </div>
          <div className="col-lg-12  mb-4 pe-lg-2">
            <label htmlFor="eventDesc">Event description: </label>       
            <textarea type="text" id='description' name='description' onChange={handleChange} value={formValues.description} className='form-control' />
            <p className='error text-danger'>{formErrors.description}</p>
          </div>
          <div>
            <button className='mb-4 btn btn-block text-light gradient-color'> { loading ?'Loading...': 'Add Event'}</button>
          </div>
        </div>
      </form>
  </div>
  );
}

export default AddEventView