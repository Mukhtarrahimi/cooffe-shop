import React, { useState } from 'react';

function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [person, setPerson] = useState('');

  const infoHandler = async (event) => {
    event.preventDefault(); // prevent form reload

    try {
      const response = await fetch('http://localhost:4000/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, time, person }),
      });

      if (response.status === 201) {
        setName('');
        setEmail('');
        setTime('');
        setPerson('');
        alert('Reservation Successful 🎉');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div classNameName="container-fluid my-5">
      <div classNameName="container">
        <div classNameName="reservation position-relative overlay-top overlay-bottom">
          <div classNameName="row align-items-center">
            <div classNameName="col-lg-6 my-5 my-lg-0">
              <div classNameName="p-5">
                <div classNameName="mb-4">
                  <h1 classNameName="display-3 text-primary">30% OFF</h1>
                  <h1 classNameName="text-white">For Online Reservation</h1>
                </div>
                <p classNameName="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul classNameName="list-inline text-white m-0">
                  <li classNameName="py-2">
                    <i classNameName="fa fa-check text-primary mr-3"></i>Lorem
                    ipsum dolor sit amet
                  </li>
                  <li classNameName="py-2">
                    <i classNameName="fa fa-check text-primary mr-3"></i>Lorem
                    ipsum dolor sit amet
                  </li>
                  <li classNameName="py-2">
                    <i classNameName="fa fa-check text-primary mr-3"></i>Lorem
                    ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>

            <div classNameName="col-lg-6">
              <div
                classNameName="text-center p-5"
                style={{ background: 'rgba(51, 33, 29, .8)' }}
              >
                <h1 classNameName="text-white mb-4 mt-5">Book Your Table</h1>
                <form classNameName="mb-5" onSubmit={infoHandler}>
                  <div classNameName="form-group">
                    <input
                      type="text"
                      classNameName="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div classNameName="form-group">
                    <input
                      type="email"
                      classNameName="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div classNameName="form-group">
                    <input
                      type="text"
                      classNameName="form-control bg-transparent border-primary p-4"
                      placeholder="Time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <div classNameName="form-group">
                    <select
                      classNameName="custom-select bg-transparent border-primary px-4"
                      style={{ height: '49px' }}
                      required
                      value={person}
                      onChange={(e) => setPerson(e.target.value)}
                    >
                      <option value="">Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="4">Person 4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      classNameName="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
