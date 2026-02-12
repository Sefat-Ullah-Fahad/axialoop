"use client";
import React, { useState, useId } from "react"; // useId যোগ করা হয়েছে unique id এর জন্য
import { useTranslations } from "next-intl";
import { SendHorizontal, ChevronDown, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const scrollbarStyle = `
  .custom-scrollbar::-webkit-scrollbar { width: 5px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #51CB20; border-radius: 10px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #45b51b; }
`;

// CustomSelect এ accessibility উন্নত করা হয়েছে
const CustomSelect = ({
  label,
  options,
  placeholder,
  isPhone = false,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectId = useId();

  return (
    <div
      className={`flex flex-col gap-3 relative ${isPhone ? "w-[100px]" : "w-full"}`}
    >
      <style>{scrollbarStyle}</style>
      {!isPhone && (
        <label
          htmlFor={selectId}
          className="text-[10px] font-bold text-white/50 tracking-[0.15em] uppercase ml-1"
        >
          {label}
        </label>
      )}
      <div
        id={selectId}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[#0a0a0a] border ${isOpen ? "border-[#51CB20]" : "border-white/10"} rounded-xl p-4 flex justify-between items-center cursor-pointer transition-all h-[56px] hover:border-white/20`}
      >
        <span
          className={value ? "text-white text-sm" : "text-white/40 text-sm"}
        >
          {value || placeholder}
        </span>
        <ChevronDown
          className={`text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={16}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-20"
              onClick={() => setIsOpen(false)}
            />
            <motion.ul
              role="listbox"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute top-[105%] left-0 w-full bg-[#111111] border border-white/10 rounded-xl overflow-hidden z-30 shadow-2xl max-h-52 overflow-y-auto custom-scrollbar"
            >
              {options.map((option, index) => (
                <li
                  key={index}
                  role="option"
                  aria-selected={value === option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`p-4 text-sm transition-colors cursor-pointer border-b border-white/[0.05] last:border-0
                    ${value === option ? "text-black bg-[#51CB20]" : "text-white/70 hover:bg-[#51CB20]/10 hover:text-white"}
                  `}
                >
                  {option}
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactSection = () => {
  const t = useTranslations("Contact");

  // Unique IDs for SEO & Accessibility
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const companyId = useId();
  const roleId = useId();
  const projectId = useId();
  const websiteId = useId();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "🇮🇹 +39",
    phone: "",
    company: "",
    role: "",
    service: "",
    project: "",
    revenue: "",
    website: "",
    size: "",
    investment: "",
    source: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Success! Your inquiry has been sent.");
        setFormData({
          name: "",
          email: "",
          phoneCode: "🇮🇹 +39",
          phone: "",
          company: "",
          role: "",
          service: "",
          project: "",
          revenue: "",
          website: "",
          size: "",
          investment: "",
          source: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-black text-white py-24 px-6 selection:bg-[#51CB20]/20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* SEO-friendly Badge */}
        <div className="px-5 py-1.5 border border-[#51CB20]/30 bg-[#51CB20]/5 rounded-full mb-10">
          <span className="text-[#51CB20] text-[10px] font-bold tracking-[0.25em] uppercase">
            {t("badge")}
          </span>
        </div>

        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white"
          >
            {t("titleNormal")}{" "}
            <span className="text-[#51CB20]">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </header>

        <form
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="flex flex-col gap-3">
            <label htmlFor={nameId} className="input-label">
              {t("form.name")}
            </label>
            <input
              id={nameId}
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="form-input"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <label htmlFor={emailId} className="input-label">
              {t("form.email")}
            </label>
            <input
              id={emailId}
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="form-input"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-3">
            <label htmlFor={phoneId} className="input-label">
              {t("form.phone")}
            </label>
            <div className="flex gap-2 items-center">
              <CustomSelect
                options={[
                  "🇮🇹 +39",
                  "🇬🇧 +44",
                  "🇫🇷 +33",
                  "🇩🇪 +49",
                  "🇪🇸 +34",
                  "🇺🇸 +1",
                ]}
                placeholder="🇮🇹 +39"
                isPhone={true}
                value={formData.phoneCode}
                onChange={(val) => handleChange("phoneCode", val)}
              />
              <input
                id={phoneId}
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="form-input flex-1"
              />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <label htmlFor={companyId} className="input-label">
              {t("form.company")}
            </label>
            <input
              id={companyId}
              type="text"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="form-input"
            />
          </div>

          {/* Role */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <label htmlFor={roleId} className="input-label">
              {t("form.role")}
            </label>
            <input
              id={roleId}
              type="text"
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              placeholder={
                t("placeholders.role") || "es. CEO, Marketing Manager..."
              }
              className="form-input placeholder:text-white/20"
            />
          </div>

          {/* Service */}
          <div className="md:col-span-2">
            <CustomSelect
              label={t("form.service")}
              options={["AI Transformation Partner", "Prisma Agent", "Altro"]}
              placeholder="Select a service"
              value={formData.service}
              onChange={(val) => handleChange("service", val)}
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <label htmlFor={projectId} className="input-label">
              {t("form.project")}
            </label>
            <textarea
              id={projectId}
              rows="4"
              required
              value={formData.project}
              onChange={(e) => handleChange("project", e.target.value)}
              className="form-input resize-none"
            ></textarea>
          </div>

          {/* Revenue */}
          <CustomSelect
            label={t("form.revenue")}
            options={["< 500k", "500k - 1M", "1M - 5M", "> 5M"]}
            placeholder="Select range"
            value={formData.revenue}
            onChange={(val) => handleChange("revenue", val)}
          />

          {/* Website */}
          <div className="flex flex-col gap-3">
            <label htmlFor={websiteId} className="input-label">
              {t("form.website")}
            </label>
            <input
              id={websiteId}
              type="url" // SEO: url টাইপ ব্যবহার করা ভালো
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
              placeholder="https://www.tuaazienda.it"
              className="form-input placeholder:text-white/20"
            />
          </div>

          {/* Size, Investment, Source - keeping original CustomSelect pattern */}
          <CustomSelect
            label={t("form.size")}
            options={[
              "1-10 dipendenti",
              "11-50 dipendenti",
              "51-150 dipendenti",
              "150+ dipendenti",
            ]}
            placeholder="Company size"
            value={formData.size}
            onChange={(val) => handleChange("size", val)}
          />

          <CustomSelect
            label={t("form.investment")}
            options={[
              "< 5.000 €",
              "5.000 € - 10.000 €",
              "10.000 € - 20.000 €",
              "20.000 € - 40.000 €",
              "> 40.000 €",
            ]}
            placeholder="Investment range"
            value={formData.investment}
            onChange={(val) => handleChange("investment", val)}
          />

          <div className="md:col-span-2">
            <CustomSelect
              label={t("form.source")}
              options={[
                "LinkedIn",
                "YouTube",
                "Instagram",
                "TikTok",
                "Passaparola",
              ]}
              placeholder="How did you find us?"
              value={formData.source}
              onChange={(val) => handleChange("source", val)}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-[#5B8BA5] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#4a738a] transition-all active:scale-[0.99] shadow-lg shadow-[#5B8BA5]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  {t("form.submit")}{" "}
                  <SendHorizontal size={18} strokeWidth={2.5} />
                </>
              )}
            </button>
            {status && (
              <p
                role="alert"
                className={`text-center mt-4 text-sm font-medium ${status.includes("Success") ? "text-[#51CB20]" : "text-red-500"}`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>

      <style jsx>{`
        .input-label {
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-left: 4px;
        }
        .form-input {
          width: 100%;
          background-color: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1rem;
          outline: none;
          transition: all 0.3s;
          font-size: 14px;
          height: 56px;
          color: white;
        }
        .form-input:focus {
          border-color: #51cb20;
          background-color: #111111;
          box-shadow: 0 0 0 4px rgba(81, 203, 32, 0.1);
        }
        textarea.form-input {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
