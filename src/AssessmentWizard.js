import React, { useState } from "react";

const DOMAIN_OPTIONS = [
  { value: "aiml", label: "AI/ML" },
  { value: "webdev", label: "Web Development" },
  { value: "cybersec", label: "Cybersecurity" },
  { value: "appdev", label: "App Development" },
  { value: "datasci", label: "Data Science" },
  { value: "softeng", label: "Software Engineer" }
];

const DOMAIN_LANGUAGES = {
  aiml: [
    { value: "python", label: "Python" },
    { value: "r", label: "R" },
    { value: "julia", label: "Julia" },
    { value: "java", label: "Java" }
  ],
  webdev: [
    { category: "Frontend", options: [
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JavaScript" },
      { value: "react", label: "React" },
      { value: "vue", label: "Vue.js" }
    ]},
    { category: "Backend", options: [
      { value: "node", label: "Node.js" },
      { value: "python", label: "Python (Django/Flask)" },
      { value: "php", label: "PHP" },
      { value: "java", label: "Java (Spring)" },
      { value: "ruby", label: "Ruby on Rails" }
    ]},
    { category: "Database", options: [
      { value: "mysql", label: "MySQL" },
      { value: "mongodb", label: "MongoDB" },
      { value: "postgres", label: "PostgreSQL" }
    ]}
  ],
  cybersec: [
    { value: "python", label: "Python" },
    { value: "c", label: "C" },
    { value: "bash", label: "Bash" },
    { value: "powershell", label: "PowerShell" }
  ],
  appdev: [
    { value: "java", label: "Java (Android)" },
    { value: "kotlin", label: "Kotlin" },
    { value: "swift", label: "Swift (iOS)" },
    { value: "dart", label: "Dart (Flutter)" },
    { value: "reactnative", label: "React Native" }
  ],
  datasci: [
    { value: "python", label: "Python" },
    { value: "r", label: "R" },
    { value: "sql", label: "SQL" },
    { value: "scala", label: "Scala" }
  ],
  softeng: [
    { value: "cpp", label: "C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "csharp", label: "C#" },
    { value: "go", label: "Go" }
  ]
};

const EXPERIENCES = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" }
];

const AssessmentWizard = ({ onSubmit, onBack }) => {
  const [step, setStep] = useState(0);
  const [domains, setDomains] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [experience, setExperience] = useState("");

  // Handle domain selection (multiple)
  const handleDomainChange = (domain) => {
    setDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );
    setLanguages([]); // Reset languages if domains change
  };

  // Handle language selection (multiple, across all selected domains)
  const handleLangChange = (lang) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ domains, languages, experience });
  };

  // Gather all language/category options for selected domains
  const getLanguageOptions = () => {
    let options = [];
    domains.forEach((domain) => {
      const langs = DOMAIN_LANGUAGES[domain];
      if (langs) options = options.concat(langs);
    });
    return options;
  };

  // UI helpers for pill/checkbox
  const pillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid #fff3',
    borderRadius: 20,
    padding: '10px 22px',
    margin: '10px 14px 10px 0',
    fontWeight: 500,
    color: '#fff',
    fontSize: '1.05rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px #0001',
    transition: 'background 0.2s, color 0.2s',
    whiteSpace: 'nowrap',
    minWidth: 90,
    minHeight: 38,
  };
  const pillChecked = {
    background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
    color: '#fff',
    border: '2px solid #fff',
  };
  const groupBox = {
    background: 'rgba(255,255,255,0.13)',
    borderRadius: 18,
    padding: '28px 32px',
    margin: '0 auto 28px auto',
    boxShadow: '0 4px 24px #6a11cb22',
    border: '2px solid #6a11cb44',
    minHeight: 120,
    maxWidth: 700,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };
  const groupTitle = {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.18rem',
    marginBottom: 14,
    marginTop: 8,
    letterSpacing: 0.5,
  };
  const pillRow = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0,
    alignItems: 'center',
    width: '100%',
    minHeight: 38,
  };
  const domainGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 18,
    margin: '16px 0',
    width: '100%',
    maxWidth: 500,
  };

  return (
    <div className="wizard-container">
      <div className="wizard-steps">
        <div className={`wizard-step ${step === 0 ? "active" : ""}`}>1</div>
        <div className={`wizard-step ${step === 1 ? "active" : ""}`}>2</div>
        <div className={`wizard-step ${step === 2 ? "active" : ""}`}>3</div>
      </div>
      <form className="wizard-form" onSubmit={handleSubmit}>
        {step === 0 && (
          <div className="wizard-panel">
            <label>Choose your domain(s) of interest:</label>
            <div style={domainGrid}>
              {DOMAIN_OPTIONS.map((d) => (
                <label key={d.value} style={{ ...pillStyle, ...(domains.includes(d.value) ? pillChecked : {}), justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    name="domains"
                    value={d.value}
                    checked={domains.includes(d.value)}
                    onChange={() => handleDomainChange(d.value)}
                    style={{ marginRight: 8 }}
                  /> {d.label}
                </label>
              ))}
            </div>
            <div className="wizard-actions">
              <button type="button" onClick={onBack} className="back-btn">Back</button>
              <button type="button" onClick={handleNext} className="next-btn" disabled={domains.length === 0}>Next</button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="wizard-panel">
            <label style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: 12, display: 'block' }}>Choose your preferred language(s) / technologies:</label>
            <div style={groupBox}>
              {getLanguageOptions().map((item, idx) => (
                item.category ? (
                  <div key={item.category} style={{ width: '100%', marginBottom: 18 }}>
                    <div style={groupTitle}>{item.category}:</div>
                    <div style={pillRow}>
                      {item.options.map((opt) => (
                        <label key={opt.value} style={{ ...pillStyle, ...(languages.includes(opt.value) ? pillChecked : {}) }}>
                          <input
                            type="checkbox"
                            name="languages"
                            value={opt.value}
                            checked={languages.includes(opt.value)}
                            onChange={() => handleLangChange(opt.value)}
                            style={{ marginRight: 8 }}
                          /> {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                ) : null
              ))}
              {/* Non-categorized options (for domains like AI/ML, Cybersec, etc.) */}
              {getLanguageOptions().filter((item) => !item.category).length > 0 && (
                <div style={{ width: '100%' }}>
                  <div style={pillRow}>
                    {getLanguageOptions().filter((item) => !item.category).map((item) => (
                      <label key={item.value} style={{ ...pillStyle, ...(languages.includes(item.value) ? pillChecked : {}) }}>
                        <input
                          type="checkbox"
                          name="languages"
                          value={item.value}
                          checked={languages.includes(item.value)}
                          onChange={() => handleLangChange(item.value)}
                          style={{ marginRight: 8 }}
                        /> {item.label}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="wizard-actions">
              <button type="button" onClick={handlePrev} className="back-btn">Back</button>
              <button type="button" onClick={handleNext} className="next-btn" disabled={languages.length === 0}>Next</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="wizard-panel">
            <label>Select your experience level:</label>
            <div style={{ display: 'flex', gap: 16, margin: '16px 0' }}>
              {EXPERIENCES.map((e) => (
                <label key={e.value} style={{ ...pillStyle, ...(experience === e.value ? pillChecked : {}) }}>
                  <input
                    type="radio"
                    name="experience"
                    value={e.value}
                    checked={experience === e.value}
                    onChange={() => setExperience(e.value)}
                    required
                    style={{ marginRight: 8 }}
                  /> {e.label}
                </label>
              ))}
            </div>
            <div className="wizard-actions">
              <button type="button" onClick={handlePrev} className="back-btn">Back</button>
              <button type="submit" className="next-btn" disabled={!experience}>Get Recommendations</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AssessmentWizard; 