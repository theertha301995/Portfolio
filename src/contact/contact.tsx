import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., by sending the data to a server.

    console.log(formData);
    axios({

 

      method: 'post',

 

      url: 'http://localhost:4561/api/contact',

 

      data: formData

 

    }) .then(function (response) {

 

      console.log(response);

 

    })

    // Show success message and reset the form data
    setShowSuccess(true);

    // Reset the form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section className="py-5" id="contact">
      <div className="container-xxl py-5">
        <div className="col-12 d-flex flex-column text-center justify-content-center">
          <h2 className="text-white">CONTACT ME</h2>
          <h5 className="text-white fw-normal py-2 fst-italic">
            Interested if I'd be the right fit for your team? Fill in this form, and I will respond within 24-48 hours.
          </h5>
        </div>
        <div className="row pt-4 mt-5">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Name*"
                      required
                    />
                    <label htmlFor="floatingInput">Enter Name*</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email*"
                      required
                    />
                    <label htmlFor="floatingEmail">Enter Email*</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone*"
                      required
                    />
                    <label htmlFor="floatingPassword">Enter Phone*</label>
                  </div>
                </div>
                <div className="form-floating col-lg-6">
                  <textarea
                    className="form-control"
                    id="floatingMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave a comment here"
                    style={{ height: '205px' }}
                    required
                  ></textarea>
                  <label htmlFor="floatingMessage" className="px-4">
                    Enter Message*
                  </label>
                </div>
                <div className="col-12 mt-5 d-flex justify-content-center">
                  <button className="btn btn-lg btn-outline-light">SEND MESSAGE</button>
                </div>
              </div>
            </form>
            {/* Success Message */}
            {showSuccess && (
              <div className="alert alert-success mt-3">
                Message sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
