// "use client";

// import { submitFormData } from "@/app/action/contact";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const ContactForm: React.FC = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Clear specific field error when typing
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors: {
//       name: string;
//       email: string;
//       phone: string;
//       company: string;
//       message: string;
//     } = {
//       name: "",
//       email: "",
//       phone: "",
//       company: "",
//       message: "",
//     };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//       isValid = false;
//     }
//     if (!formData.company.trim()) {
//       newErrors.company = "Company is required";
//       isValid = false;
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isSubmitting) return;

//     const valid = validateForm();
//     if (!valid) return;

//     setIsSubmitting(true);

//     try {
//       await submitFormData("8eadd7c4-7e60-4879-ab29-5a710328946b", formData);
//       toast.success("Your message has been sent successfully!");

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Submit error:", error);
//       toast.error("Your message could not be sent. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="col-md-6 col-sm-12">
//       <div className="footer-form">
//         <h4>Enquire</h4>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={errors.name ? "error-input" : ""}
//           />
//           {/* {errors.name && <p className="error-text">{errors.name}</p>} */}

//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? "error-input" : ""}
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             placeholder="Phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className={errors.phone ? "error-input" : ""}
//           />

//           {/* Company */}
//           <input
//             type="text"
//             placeholder="Company"
//             name="company"
//             value={formData.company}
//             onChange={handleChange}
//             className={errors.company ? "error-input" : ""}
//           />

//           {/* Message */}
//           <textarea
//             placeholder="Message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className={errors.message ? "error-input" : ""}
//           />

//           <button className="submitBtn" type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Sending..." : "Send a Message"}
//           </button>
//         </form>
//       </div>

//       <style>{`
//         .error-input {
//           border-bottom: 1px solid red !important;
//         }
//         .error-text {
//           color: red;
//           font-size: 12px;
//           margin: 4px 0 10px 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactForm;

"use client";

import { submitFormData } from "@/app/action/contact";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // ---------- Handle Input ----------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // PHONE VALIDATION — only numbers + max 10 digits
    if (name === "phone") {
      const onlyNums = value.replace(/\D/g, "");
      if (onlyNums.length > 10) return;
      setFormData((prev) => ({ ...prev, phone: onlyNums }));
      setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const valid = validateForm();
    if (!valid) return;

    setIsSubmitting(true);

    try {
      await submitFormData("8eadd7c4-7e60-4879-ab29-5a710328946b", formData);
      toast.success("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      // toast.error("Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="col-md-6 col-sm-12">
      <div className="footer-form">
        <h4>Enquire</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : "bg-none"}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />

          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
            maxLength={10}
          />

          <input
            type="text"
            placeholder="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={errors.company ? "error-input" : ""}
          />

          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          />

          <button className="submitBtn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send a Message"}
          </button>
        </form>
      </div>

      <style>{`
        .error-input {
          border-bottom: 1px solid red !important;
        }
        .error-text {
          color: red;
          font-size: 12px;
          margin: 4px 0 10px 0;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
