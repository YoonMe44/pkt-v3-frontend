import React, { useState } from 'react';

const Contact = () => {
    
    return (
      <div className="sm:w-1/2 md:w-1/2 lg:w-3/4 mx-auto border-solid border-2 flex flex-wrap rounded-xl py-20 px-10 bg-[rgba(255,255,255,0.17)] shadow-md inset-shadow-md">

        <div className="bg-slate-400 w-2/3">
          <div>
            <i className="md:text-lg text-red-main mt-4">Sent a Message</i>
            <p className="text-sm text-slate-500 font-medium">
            You can fill in the information below and inquire about what you want to know. You can also inquire through the phone number
            </p>
            <form>
              <div className="flex flex-wrap justify-between gap-4">
              <div className="flex w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="flex flex-col w-full sm:w-1/2">
                <label htmlFor="interest">Interest In:</label>
                <select
                  id="interest"
                  name="interest"
                  placeholder="Interested In"
                  required
                >
                  <option value="">Select One</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>

                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                />
              </div>
            </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
    
        <div className="bg-slate-300 w-1/3">
          cc
        </div>
    
        <div className="bg-slate-200 w-full">
          bb
        </div>
      </div>
    );
    
 };

 export default Contact;
