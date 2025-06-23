import React, { useState } from "react";

const InputWizard = ({ onRecommend, onBack }) => {
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState("");
  const [description, setDescription] = useState("");

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRecommend({ interests, description });
  };

  return (
    <div className="wizard-container">
      <div className="wizard-steps">
        <div className={`wizard-step ${step === 0 ? "active" : ""}`}>1</div>
        <div className={`wizard-step ${step === 1 ? "active" : ""}`}>2</div>
      </div>
      <form className="wizard-form" onSubmit={handleSubmit}>
        {step === 0 && (
          <div className="wizard-panel">
            <label>What are your interests? (comma separated)</label>
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g. programming, design, marketing"
              required
            />
            <div className="wizard-actions">
              <button type="button" onClick={onBack} className="back-btn">Back</button>
              <button type="button" onClick={handleNext} className="next-btn">Next</button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="wizard-panel">
            <label>Describe your ideal career in your own words</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a paragraph about what you want in a career"
              rows={5}
              required
            />
            <div className="wizard-actions">
              <button type="button" onClick={handlePrev} className="back-btn">Back</button>
              <button type="submit" className="next-btn">Get Recommendations</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default InputWizard; 