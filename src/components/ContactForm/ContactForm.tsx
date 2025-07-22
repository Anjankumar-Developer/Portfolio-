import React, { useState } from 'react';
import Button from '../Button/Button';
import { Send } from 'lucide-react';
import './ContactForm.css';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formValues.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formValues.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formValues);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after success
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <div className="contact-form-container">
      {submitSuccess ? (
        <div className="success-message">
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Your name"
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Your email address"
              className={formErrors.email ? 'error' : ''}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={formErrors.subject ? 'error' : ''}
            />
            {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              className={formErrors.message ? 'error' : ''}
            ></textarea>
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
          </div>
          <div className="form-note">
            <p><span className="form-note">In case not responded, please drop a mail. </span> </p>
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            icon={<Send size={18} />}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;