import React, { useState } from "react";
import { Mail, Copy, Check, Quote } from "lucide-react";

const InfoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "ocorthosports@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-4 pb-12 md:pt-6 md:pb-16 flex flex-col items-center">
      {/* Main Announcement Card */}
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header Banner */}
        <div className="bg-orange-600 p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1"></div>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-black mb-2 tracking-tight">
            Practice Closure Notice
          </h1>
          <p className="text-black/90 text-sm md:text-base font-medium uppercase tracking-wider">
            Effective Immediately
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          {/* Personal Note Section */}
          <div className="relative">
            <Quote className="absolute -top-4 -left-2 w-10 h-10 text-brand-orange/20 transform -scale-x-100" />
            <div className="pl-4 md:pl-8 border-l-4 border-brand-orange/30 py-2">
              <p className="text-lg md:text-xl text-gray-900 leading-relaxed font-serif italic mb-6">
                "It is with great sorrow that I must close my practice here in
                Orange County, CA. It has been an honor and a pleasure to serve
                my patients here as I have for the past 25 years. I wish
                everyone the best."
              </p>
              <div className="flex items-center">
                <div className="h-px w-8 bg-gray-300 mr-3"></div>
                <p className="text-gray-900 font-semibold font-serif">
                  Dr. Bradley Greenbaum
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Contact Information */}
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 flex flex-col justify-center">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                How to Contact Us
              </h3>
              <p className="text-gray-900 leading-relaxed">
                We will continue to monitor our email. Please reach out to us at
                the address provided here for any communication.
              </p>
            </div>

            <div className="md:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Contact Email
                </span>
                <Mail className="w-4 h-4 text-brand-orange" />
              </div>

              <a
                href={`mailto:${email}`}
                className="text-base md:text-lg font-medium text-brand-dark hover:text-brand-orange transition-colors mb-4 break-all"
              >
                {email}
              </a>

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg transition-all shadow-sm active:scale-95"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copied ? "Email Copied" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Footer Note */}
      <div className="mt-8 text-center max-w-lg">
        <p className="text-gray-800 text-sm">
          Note: For urgent medical emergencies, please dial 911 or visit your
          nearest emergency room immediately.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
