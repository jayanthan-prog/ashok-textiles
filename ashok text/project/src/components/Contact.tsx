import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Get in touch with us for any inquiries or support
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Contact Information</h3>
            <dl className="mt-3 space-y-6">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <MapPin className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-sm leading-6 text-gray-600">
                  123 Textile Road,<br />
                  Industrial Area,<br />
                  Your City, State 123456
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-sm leading-6 text-gray-600">
                  <a href="tel:+1234567890" className="hover:text-indigo-600">
                    +1 (234) 567-890
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-sm leading-6 text-gray-600">
                  <a href="mailto:info@ashoktextilemills.com" className="hover:text-indigo-600">
                    info@ashoktextilemills.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}