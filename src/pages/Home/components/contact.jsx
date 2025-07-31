import { useState } from "react";
import {
  MdArrowOutward,
  MdEmail,
  MdPerson,
  MdMessage,
  MdSend,
} from "react-icons/md";
import StarBorder from "../../../components/blocks/Animations/StarBorder/StarBorder";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const TO_EMAIL = process.env.REACT_APP_EMAILJS_TO_EMAIL;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: TO_EMAIL,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="text-white py-12 sm:py-16 lg:py-20 bg-[#060a21] flex flex-col gap-8 items-center px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Have a project in mind? I'd love to hear about it. Send me a message
          and let's create something amazing together.
        </p>
      </div>

      {/* Contact Form and Info Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 backdrop-blur-sm">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
              <MdMessage className="text-blue-400" />
              Send Message
            </h3>
            <p className="text-gray-400">
              Fill out the form below and I'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex text-sm font-medium text-gray-300 items-center gap-2"
              >
                <MdPerson className="text-blue-400" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex text-sm font-medium text-gray-300 items-center gap-2"
              >
                <MdEmail className="text-blue-400" />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex text-sm font-medium text-gray-300 items-center gap-2"
              >
                <MdMessage className="text-blue-400" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-vertical"
                placeholder="Tell me about your project, ideas, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.name.trim() ||
                !formData.email.trim() ||
                !formData.message.trim()
              }
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <MdSend className="group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-3 bg-green-600/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                ✅ Message sent successfully! I'll get back to you within 24
                hours.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-3 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                ❌ Failed to send message. Please try again or contact me
                directly at oufkirhamza08@gmail.com
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Info Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#060a21] to-[#121a44] border-2 border-[#1e26504b] overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
                <MdEmail className="text-blue-400" />
                Get In Touch
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Open to collaboration opportunities</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <a
                    href="mailto:contact@hamza.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    oufkirhamza08@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Response Time
                  </h4>
                  <p className="text-gray-300">Within 24 hours</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <StarBorder
                  as="a"
                  href="mailto:oufkirhamza08@gmail.com"
                  className="custom-class inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-medium"
                  color="cyan"
                  speed="8s"
                >
                  Direct Email <MdArrowOutward />
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
