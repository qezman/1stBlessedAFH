import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
};
type FormData = typeof INITIAL_FORM;
type FormErrors = Partial<FormData>;

function validate(form: FormData): FormErrors {
  const e: FormErrors = {};
  if (!form.name.trim()) e.name = "Please enter your name.";
  if (!form.email.trim()) e.email = "Please enter your email address.";
  else if (!/\S+@\S+\.\S+/.test(form.email))
    e.email = "Please enter a valid email.";
  if (!form.reason) e.reason = "Please select a reason for your enquiry.";
  if (!form.message.trim()) e.message = "Please include a message.";
  return e;
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="animate-[successIn_0.4s_ease_both] bg-[#F0FFF8] border border-[#A3CFBB] rounded-lg p-10 text-center flex flex-col items-center gap-5">
      <style>{`@keyframes successIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }`}</style>
      <div className="w-14 h-14 rounded-full bg-[#1A7F4E] flex items-center justify-center flex-shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12l5 5L19 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-[#0B1628] tracking-tight">
        Message received!
      </h3>
      <p className="text-[15px] font-light text-gray-600 leading-[1.75] max-w-[360px]">
        Thank you for reaching out. We'll be in touch within one business day —
        usually much sooner. If you need an immediate response, please call us
        at{" "}
        <a
          href="tel:2063030549"
          className="text-[#1A3358] underline underline-offset-2"
        >
          206-303-0549
        </a>
        .
      </p>
      <button
        onClick={onReset}
        className="mt-2 bg-transparent border border-[#A3CFBB] rounded px-6 py-2.5 text-[13px] text-[#1A7F4E] cursor-pointer hover:bg-[#E6F7EF] transition-colors"
      >
        Send another message
      </button>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSending(true);
    // TODO: replace with real endpoint e.g. Formspree
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
  };

  const fieldClass = (name: keyof FormErrors) =>
    cn(
      "w-full font-sans text-[15px] font-light text-[#0B1628] bg-white border rounded px-4 py-3 outline-none transition-all duration-150 placeholder:text-gray-400 placeholder:font-light",
      errors[name]
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-gray-200 focus:border-[#1A3358] focus:ring-2 focus:ring-[rgba(26,51,88,0.08)]",
    );

  if (sent)
    return (
      <SuccessState
        onReset={() => {
          setSent(false);
          setForm(INITIAL_FORM);
        }}
      />
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700 tracking-wide">
            Full name *
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={fieldClass("name")}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700 tracking-wide">
            Email address *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            className={fieldClass("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email}</span>
          )}
        </div>
      </div>

      {/* Phone + Reason */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700 tracking-wide">
            Phone number{" "}
            <span className="text-gray-400 font-light">(optional)</span>
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(206) 000-0000"
            className={cn(fieldClass("phone"), "border-gray-200")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700 tracking-wide">
            Reason for enquiry *
          </label>
          <select
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className={cn(
              fieldClass("reason"),
              "cursor-pointer appearance-none",
              "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236C757D' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_16px_center] pr-10",
            )}
          >
            <option value="" disabled>
              Select a reason…
            </option>
            <option value="tour">Schedule a tour</option>
            <option value="availability">Ask about availability</option>
            <option value="care">Care needs assessment</option>
            <option value="pricing">Pricing & costs</option>
            <option value="general">General question</option>
            <option value="other">Other</option>
          </select>
          {errors.reason && (
            <span className="text-xs text-red-500">{errors.reason}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-gray-700 tracking-wide">
          Your message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us a bit about your loved one, their needs, and any questions you have. There are no wrong things to share."
          className={cn(
            fieldClass("message"),
            "resize-y min-h-[130px] leading-[1.7]",
          )}
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message}</span>
        )}
      </div>

      <p className="text-[12px] font-light text-gray-400 leading-relaxed">
        Your information is used only to respond to your enquiry. We don't share
        it with third parties.
      </p>

      <button
        type="submit"
        disabled={sending}
        className="w-full flex items-center justify-center gap-2.5 bg-[#1A3358] hover:bg-[#122240] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-[15px] tracking-wide px-7 py-4 rounded transition-colors duration-200"
      >
        {sending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
