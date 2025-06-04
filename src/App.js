import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-700 p-4 text-white shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Company</h1>
      <ul className="flex space-x-6 text-sm">
        <li><Link className="hover:underline" to="/">Home</Link></li>
        <li><Link className="hover:underline" to="/about">About Us</Link></li>
        <li><Link className="hover:underline" to="/careers">Careers</Link></li>
        <li><Link className="hover:underline" to="/contact">Contact</Link></li>
        <li><Link className="hover:underline" to="/faq">FAQ</Link></li>
        <li><Link className="hover:underline" to="/privacy">Privacy Policy</Link></li>
      </ul>
    </div>
  </nav>
);

const PageWrapper = ({ title, children }) => (
  <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="text-gray-700 text-base leading-relaxed">{children}</div>
  </div>
);

const Home = () => <PageWrapper title="Welcome">Welcome to Our Company Website</PageWrapper>;
const About = () => <PageWrapper title="About Us">About our mission and team.</PageWrapper>;
const Contact = () => <PageWrapper title="Contact">Contact us at contact@example.com</PageWrapper>;
const FAQ = () => <PageWrapper title="FAQ">Frequently Asked Questions</PageWrapper>;
const Privacy = () => <PageWrapper title="Privacy Policy">Our privacy policy.</PageWrapper>;

const Careers = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Form submitted", Object.fromEntries(formData));
  };

  return (
    <PageWrapper title="Apply for Internship">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white shadow-lg p-6 rounded-lg">
        <input
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          type="email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="degree"
          placeholder="Your Degree"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="resume"
          type="file"
          className="border border-gray-300 rounded-md p-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Submit Application
        </button>
      </form>
    </PageWrapper>
  );
};

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Router>
);

export default App;
