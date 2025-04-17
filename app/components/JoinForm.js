'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useFormStore } from '../store/formStore';
import { useRouter } from 'next/navigation';

export default function JoinForm() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepAnswers, setStepAnswers] = useState({
    step1: null,
    step2: null,
    step3: null,
    step4: null,
    step5: null
  });
  const [submitted, setSubmitted] = useState(false);

  const { formData, updateFormField, setFormData } = useFormStore();
  const router = useRouter();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const formattedCountries = data
          .filter(country => country.idd.root)
          .map(country => ({
            name: country.name.common,
            flag: country.flags.svg,
            code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        
        setCountries(formattedCountries);
        const us = formattedCountries.find(c => c.name === 'United States');
        setSelectedCountry(us);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(1);
  };

  const handleStepSubmit = (step, answer) => {
    setStepAnswers(prev => ({
      ...prev,
      [`step${step}`]: answer
    }));
    
    if (step === 2 && answer === 'no') {
      // Handle US-based business requirement
      return;
    } else if (step === 5) {
      setCurrentStep(6); // Progress to step 6
    } else {
      setCurrentStep(step + 1);
    }
  };

  const handleFinalSubmit = async () => {
    try {
      const finalData = {
        ...formData,
        ...stepAnswers
      };

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      // Set submitted to true regardless of email success
      setSubmitted(true);
      
      if (response.ok) {
        console.log('Form submitted successfully');
        // Optional: redirect after a delay
        // setTimeout(() => {
        //   router.push('/success');
        // }, 3000);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Still show thank you message even if email fails
      setSubmitted(true);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <form onSubmit={handleSubmit} className="space-y-12">
            <div>
              <label htmlFor="firstName" className="text-white text-sm mb-2 block">First Name*</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Jane"
                className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-white text-sm mb-2 block">Last Name*</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Smith"
                className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-white text-sm mb-2 block">Phone Number*</label>
              <div className="flex gap-4 relative">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 border-b border-white pb-2 min-w-[120px] text-white"
                  >
                    {selectedCountry && (
                      <>
                        <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4" />
                        <span className="text-gray-400">+{selectedCountry.code}</span>
                        <span className="text-gray-400 ml-1">▼</span>
                      </>
                    )}
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-[300px] max-h-[300px] overflow-y-auto bg-[#0A3B2E] border border-[#1EEB7A] rounded-lg z-50">
                      {countries.map((country) => (
                        <button
                          key={country.name}
                          type="button"
                          className="flex items-center gap-3 w-full p-3 hover:bg-[#1EEB7A] hover:text-[#0A3B2E] text-white"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <img src={country.flag} alt={country.name} className="w-6 h-4" />
                          <span>{country.name}</span>
                          <span className="text-gray-400">+{country.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(201) 555-0123"
                  className="flex-1 bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-white text-sm mb-2 block">Email*</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="company" className="text-white text-sm mb-2 block">Company*</label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Acme Corporation"
                className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1EEB7A] text-[#0A3B2E] py-4 rounded-full mt-12 text-lg font-bold"
            >
              Submit
            </button>
          </form>
        );
      case 1:
        return (
          <div className="space-y-8">
            <h2 className="text-[#1EEB7A] text-[42px] leading-tight mb-12" style={{fontFamily: 'Arial-Regular'}}>
              Tell us more about yourself<br />
              and your business.
            </h2>
            
            <div className="pl-8">
              <div className="flex items-start gap-4 text-white text-2xl mb-8" style={{fontFamily: 'Arial-Regular'}}>
                <span className="text-[#1EEB7A]">1 →</span>
                <p>Are you looking for payment<br />processing for your business?</p>
              </div>
              <div className="flex flex-col gap-4 ml-12">
                <button 
                  type="button"
                  onClick={() => setStepAnswers(prev => ({ ...prev, step1: 'yes' }))}
                  className={`w-[120px] py-2 rounded-full border border-[#1EEB7A] ${
                    stepAnswers.step1 === 'yes' 
                      ? 'bg-[#1EEB7A] text-[#0A3B2E]' 
                      : 'text-[#1EEB7A]'
                  } hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors`}
                >
                  Yes
                </button>
                <button 
                  type="button"
                  onClick={() => setStepAnswers(prev => ({ ...prev, step1: 'no' }))}
                  className={`w-[120px] py-2 rounded-full border border-[#1EEB7A] ${
                    stepAnswers.step1 === 'no' 
                      ? 'bg-[#1EEB7A] text-[#0A3B2E]' 
                      : 'text-[#1EEB7A]'
                  } hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors`}
                >
                  No
                </button>
                <button
                  onClick={() => stepAnswers.step1 && handleStepSubmit(1, stepAnswers.step1)}
                  className="w-[120px] bg-[#1EEB7A] text-[#0A3B2E] py-2 rounded-full mt-4 font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <h2 className="text-[#1EEB7A] text-[40px] leading-tight mb-12" >
              Tell us more about yourself<br />
              and your business.
            </h2>
            
            <div className="pl-8">
              <div className="flex items-start gap-4 text-white text-2xl mb-8">
                <span className="text-[#1EEB7A]">2 →</span>
                <p>Is your business based in<br />the United States?</p>
              </div>
              <div className="flex flex-col gap-4 ml-12">
                <button 
                  type="button"
                  onClick={() => setStepAnswers(prev => ({ ...prev, step2: 'yes' }))}
                  className={`w-[120px] py-2 rounded-full border border-[#1EEB7A] ${
                    stepAnswers.step2 === 'yes' 
                      ? 'bg-[#1EEB7A] text-[#0A3B2E]' 
                      : 'text-[#1EEB7A]'
                  } hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors`}
                >
                  Yes
                </button>
                <button 
                  type="button"
                  onClick={() => setStepAnswers(prev => ({ ...prev, step2: 'no' }))}
                  className={`w-[120px] py-2 rounded-full border border-[#1EEB7A] ${
                    stepAnswers.step2 === 'no' 
                      ? 'bg-[#1EEB7A] text-[#0A3B2E]' 
                      : 'text-[#1EEB7A]'
                  } hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors`}
                >
                  No
                </button>
                <button
                  onClick={() => stepAnswers.step2 && handleStepSubmit(2, stepAnswers.step2)}
                  className="w-[120px] bg-[#1EEB7A] text-[#0A3B2E] py-2 rounded-full mt-4 font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-[#1EEB7A] text-[32px] sm:text-[38px] lg:text-[42px] leading-tight mb-8 sm:mb-12">
              Tell us more about yourself<br />
              and your business.
            </h2>
            
            <div className="pl-4 sm:pl-8">
              <div className="flex items-start gap-4 text-white text-xl sm:text-2xl mb-6 sm:mb-8">
                <span className="text-[#1EEB7A]">3 →</span>
                <p className="pr-4">What is your annual processing volume?</p>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 ml-8 sm:ml-12">
                {[
                  { label: '<$250K', value: 'under250k' },
                  { label: '$250K - $1M', value: '250kTo1m' },
                  { label: '$1M - $25M', value: '1mTo25m' },
                  { label: '$25M+', value: 'over25m' },
                  { label: 'Not Sure', value: 'notSure' }
                ].map((option) => (
                  <button 
                    key={option.value}
                    type="button"
                    onClick={() => setStepAnswers(prev => ({ ...prev, step3: option.value }))}
                    className={`w-full max-w-[280px] py-2 px-6 rounded-full border border-[#1EEB7A] text-left ${
                      stepAnswers.step3 === option.value 
                        ? 'bg-[#1EEB7A] text-[#0A3B2E]' 
                        : 'text-[#1EEB7A]'
                    } hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors text-sm sm:text-base`}
                  >
                    {option.label}
                  </button>
                ))}
                <button
                  onClick={() => stepAnswers.step3 && handleStepSubmit(3, stepAnswers.step3)}
                  className="w-[120px] bg-[#1EEB7A] text-[#0A3B2E] py-2 rounded-full mt-4 font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8">
            <h2 className="text-[#1EEB7A] text-[42px] leading-tight mb-12">
              Tell us more about yourself<br />
              and your business.
            </h2>
            
            <div className="pl-8">
              <div className="flex items-start gap-4 text-white text-2xl mb-8">
                <span className="text-[#1EEB7A]">4 →</span>
                <p>What type of business do you do?</p>
              </div>
              <div className="flex flex-col gap-4 ml-12">
                <input
                  type="text"
                  value={stepAnswers.step4 || ''}
                  onChange={(e) => setStepAnswers(prev => ({ ...prev, step4: e.target.value }))}
                  placeholder="Type your answere here..."
                  className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                />
                <button
                  onClick={() => stepAnswers.step4 && handleStepSubmit(4, stepAnswers.step4)}
                  className="w-[120px] bg-[#1EEB7A] text-[#0A3B2E] py-2 rounded-full mt-4 font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-[#1EEB7A] text-[32px] sm:text-[38px] lg:text-[42px] leading-tight mb-8 sm:mb-12">
              Tell us more about yourself<br />
              and your business.
            </h2>
            
            <div className="pl-4 sm:pl-8">
              <div className="flex items-start gap-4 text-white text-xl sm:text-2xl mb-6 sm:mb-8">
                <span className="text-[#1EEB7A]">5 →</span>
                <p className="pr-4">Is it e-commerce or brick-and-mortar?</p>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 ml-8 sm:ml-12">
                {[
                  { label: 'E-commerce', value: 'ecommerce' },
                  { label: 'Brick-and-Mortar', value: 'brick-and-mortar' },
                  { label: 'Both', value: 'both' }
                ].map((option) => (
                  <button 
                    key={option.value}
                    type="button"
                    onClick={() => setStepAnswers(prev => ({ ...prev, step5: option.value }))}
                    className={`w-full max-w-[280px] py-2 px-6 rounded-full border border-[#1EEB7A] text-left ${
                      stepAnswers.step5 === option.value 
                        ? 'bg-[#1EEB7A] text-[#0A3B2E]' 
                        : 'text-[#1EEB7A]'
                    } hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors text-sm sm:text-base`}
                  >
                    {option.label}
                  </button>
                ))}
                <button
                  onClick={() => stepAnswers.step5 && handleStepSubmit(5, stepAnswers.step5)}
                  className="w-[120px] bg-[#1EEB7A] text-[#0A3B2E] py-2 rounded-full mt-4 font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8">
            <h2 className="text-[#1EEB7A] text-[42px] leading-tight mb-12" style={{ fontFamily: 'Charter-Regular' }}>
              Tell us more about yourself<br />
              and your business.
            </h2>
            
            <div className="pl-8">
              <div className="flex items-start gap-4 text-white text-2xl mb-8">
                <span className="text-[#1EEB7A]">6 →</span>
                <p style={{ fontFamily: 'Arial-Regular' }}>What is your job title?</p>
              </div>
              <div className="flex flex-col gap-4 ml-12">
                <input
                  type="text"
                  value={stepAnswers.step6 || ''}
                  onChange={(e) => setStepAnswers(prev => ({ ...prev, step6: e.target.value }))}
                  placeholder="Type your answere here..."
                  className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                />
                <button
                  onClick={handleFinalSubmit}
                  className="w-[120px] bg-[#1EEB7A] text-[#0A3B2E] py-2 rounded-full mt-4 font-medium" style={{ fontFamily: 'Arial-Regular' }}
                >
                  Submit
                </button>
              </div>

              {submitted && (
                <div className="mt-12">
                  <p className="text-[#1EEB7A] text-2xl mb-4" style={{ fontFamily: 'Charter-Regular' }}>
                    Thank you for your interest in joining<br />
                    the Merchant Rebellion.
                  </p>
                  <p className="text-[#1EEB7A] text-xl" style={{ fontFamily: 'Charter-Regular' }}>
                    We will review your information and<br />
                    contact you as soon as possible.
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A3B2E] flex flex-col">
      <nav className="flex justify-between px-4 sm:px-16 py-6 mt-4 sm:mt-10">
        <div className="text-white text-xl sm:text-2xl">THE REBELLION</div>
        <div className="hidden sm:block text-white text-2xl">SPEAK NOW</div>
        <div className="text-[#1EEB7A] text-xl sm:text-2xl">JOIN US</div>
      </nav>

      <div className="flex flex-col sm:flex-row px-4 sm:px-16 relative">
        <div className="w-full sm:w-1/2 pt-8 sm:pt-16 text-center sm:text-left">
          <h1 className="text-[70px] sm:text-[120px] leading-[0.9] font-bold md:text-[100px]">
            <span className="text-[#1EEB7A]">JOIN OUR<br />
            REBELLION<br /></span>
            <span className="text-white">TODAY!</span>
          </h1>
          
          <div className="mt-8 sm:mt-16">
            <p className="text-[#1EEB7A] text-lg sm:text-xl">
              Call now for U.S.-based<br />
              single-ring concierge service
            </p>

            <a href="tel:1-800-941-1544" className="inline-block mt-6">
              <div className="border border-[#1EEB7A] text-[#1EEB7A] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg sm:text-xl">
                Call 1 (800) 941-1544
              </div>
            </a>
          </div>

          <div className="flex justify-center sm:justify-start gap-4 sm:gap-6 mt-8 sm:mt-16">
            <Image src="/instagram.svg" alt="Instagram" width={46} height={46} />
            <Image src="/facebookicon.svg" alt="Facebook" width={46} height={46} />
            <Image src="/xicon.svg" alt="X" width={46} height={46} />
            <Image src="/linkedinicon.svg" alt="LinkedIn" width={46} height={46} />
          </div>
        </div>

        <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
          <div className="relative h-[800px]">
            {/* Border Design */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 bottom-0 w-[2px] h-[calc(100%-120px)] bg-[#1EEB7A]" />
              <div className="absolute right-0 bottom-0 w-[2px] h-[calc(100%-120px)] bg-[#1EEB7A]" />
              <div className="absolute top-[80px] left-0 right-0">
                <div className="absolute top-0 left-0 w-[40px] h-[40px] border-l-2 border-t-2 border-[#1EEB7A] rounded-tl-[40px]" />
                <div className="absolute top-0 right-0 w-[40px] h-[40px] border-r-2 border-t-2 border-[#1EEB7A] rounded-tr-[40px]" />
                <div className="absolute top-0 left-[40px] right-[40px] h-[2px] bg-[#1EEB7A]" />
              </div>
            </div>

            {/* Form Content */}
            <div className={`px-12 ${currentStep === 5 ? 'pt-24' : 'pt-32'} h-full ${currentStep === 5 ? '' : 'overflow-y-auto'}`} style={{fontFamily: 'Arial-Regular'}}>
              {currentStep === 0 ? (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div>
                    <label htmlFor="firstName" className="text-white text-sm mb-2 block">First Name*</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Jane"
                      className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="text-white text-sm mb-2 block">Last Name*</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Smith"
                      className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-white text-sm mb-2 block">Phone Number*</label>
                    <div className="flex gap-4 relative">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center gap-2 border-b border-white pb-2 min-w-[120px] text-white"
                        >
                          {selectedCountry && (
                            <>
                              <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4" />
                              <span className="text-gray-400">+{selectedCountry.code}</span>
                              <span className="text-gray-400 ml-1">▼</span>
                            </>
                          )}
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute left-0 top-full mt-2 w-[300px] max-h-[300px] overflow-y-auto bg-[#0A3B2E] border border-[#1EEB7A] rounded-lg z-50">
                            {countries.map((country) => (
                              <button
                                key={country.name}
                                type="button"
                                className="flex items-center gap-3 w-full p-3 hover:bg-[#1EEB7A] hover:text-[#0A3B2E] text-white"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <img src={country.flag} alt={country.name} className="w-6 h-4" />
                                <span>{country.name}</span>
                                <span className="text-gray-400">+{country.code}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(201) 555-0123"
                        className="flex-1 bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-white text-sm mb-2 block">Email*</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="text-white text-sm mb-2 block">Company*</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corporation"
                      className="w-full bg-transparent border-b border-white text-white pb-2 focus:outline-none focus:border-[#1EEB7A] placeholder-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1EEB7A] text-[#0A3B2E] py-4 rounded-full mt-12 text-lg font-bold"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <div className={currentStep === 5 ? '' : 'pt-8'}>
                  {renderStepContent()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 