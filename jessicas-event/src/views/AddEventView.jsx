import React from 'react'

const AddEventView = () => {
  return (
          <div className='mt-5 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded'>
          <h2  className='text-center mb-4'>Add Event</h2>
          <form  className='pe-5 ps-5 d-flex justify-content-center'>
            <div className="row">
              <div className="col-lg-12 mb-4 pe-lg-2" >
              <label htmlFor="title">Title: </label>
              <input type="text" id='title' name='title' className='form-control' />
              </div> 
              <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2" >
                <label htmlFor="date">Date: </label>       
                <input type="text" id='date' name='date' className='form-control' />
              </div>
              <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2">
                <label htmlFor="time">Time: </label>       
                <input type="text" id='time' name='time' className='form-control' />
              </div>
              <div className="col-lg-12  mb-4 pe-lg-2">
              <label htmlFor="eventDesc">Event description: </label>       
                <textarea type="text" id='eventDesc' name='eventDesc' className='form-control' />
              </div>
              
           
              <div>
                <button className='mb-4 btn btn-block text-light gradient-btn'>Add Event</button>
              </div>
              
              </div>
            </form>
        </div>
  )
}

export default AddEventView