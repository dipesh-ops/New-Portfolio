import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { socialLinks } from "./utils/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner, FaCheck } from "react-icons/fa";
const ContactForm = () => {
  const theme = useSelector((state) => state.theme.mode);
 const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Add these debug logs
    const formData = new FormData(form.current);
    console.log('Form data:', {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message')
    });

    emailjs.sendForm(
      'service_29dgz3b',
      'template_hib84d9',
      form.current,
      'mKEVEdiWQPk4pJVuh'
    )
    .then(() => {
      setStatus('sent');
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setStatus('error');
    });
  };
  return (
    <section
      id="contact"
      className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-16 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Contact Information
            </h3>
            <div
              className={`space-y-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>Email: dipeshmeshram79@gmail.com</p>
              <p>Phone: +91 7066255961</p>
              <p>Location: Sindewahi, Maharashtra</p>
            </div>

            <h3
              className={`text-2xl font-semibold mt-8 mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon === "FaGithub" && <FaGithub size={24} />}
                  {social.icon === "FaLinkedin" && <FaLinkedin size={24} />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="user_name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="user_name"  // Must match template variable
          id="user_name"
          required
          className="w-full px-4 py-2 rounded-lg border"
        />
      </div>

      {/* Email Field - CRITICAL FOR RECIPIENT */}
      <div>
        <label htmlFor="user_email" className="block text-sm font-medium mb-2">
          Email address
        </label>
        <input
          type="email"
          name="user_email"  // Must match template variable
          id="user_email"
          required
          className="w-full px-4 py-2 rounded-lg border"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          name="message"  // Must match template variable
          id="message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded-lg border"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 
         status === 'sent' ? 'Message Sent!' : 
         status === 'error' ? 'Error - Try Again' : 'Send Message'}
      </button>

      {/* Debug output */}
      {status === 'error' && (
        <div className="text-red-500 text-sm">
          Failed to send. Check console for errors.
        </div>
      )}
    </form>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
