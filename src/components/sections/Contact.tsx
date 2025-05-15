'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

function DiscordTag() {
    const discordTag = 'TheVi#5163'; // แก้เป็น DiscordTag ของคุณ
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(discordTag);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
    return (
      <div
        className="flex items-center gap-2 bg-card p-3 rounded-full border border-border cursor-pointer select-none"
        onClick={copyToClipboard}
      >
        <FaDiscord size={24} className="text-discord" />
        <span className="font-mono text-sm">{discordTag}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard();
          }}
          className="ml-4 bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
  }



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your server
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
          Feel free to contact me for any work or suggestions.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-muted-foreground">nattachai.pil@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Send me an email anytime!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-muted-foreground">+66 88 604 4010</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 24hr.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-muted-foreground">Bangkok, Thailand</p>
                    <p className="text-sm text-muted-foreground mt-1">Available for remote work</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold text-lg mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Thevi99" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-muted p-4 rounded-full border border-border transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nattachai-pilabut-16654735a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-muted p-4 rounded-full border border-border transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  {/* <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-muted p-3 rounded-full border border-border transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a> */}
                  <a>
                    <DiscordTag />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend />
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-500/10 border border-green-500 text-green-500 rounded-lg text-sm">
                      Your message has been sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-lg text-sm">
                      There was an error sending your message. Please try again later.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}