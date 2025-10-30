import React, { useMemo, useRef, useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import UploadSection from './components/UploadSection.jsx';
import OutputPreview from './components/OutputPreview.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';

function extractKeywords(text, max = 12) {
  if (!text) return [];
  const stop = new Set([
    'the','and','for','with','that','have','this','from','your','you','are','was','were','will','shall','into','onto','about','over','under','above','below','but','not','our','their','they','them','there','here','such','able','also','etc','like','very','more','most','some','any','each','every','other','than','then','when','what','where','which','while','who','whom','whose','why','how','a','an','of','to','in','on','as','by','at','is','it','be','or','we','i'
  ]);
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9+.#/\-\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && w.length > 2 && !stop.has(w));

  const freq = new Map();
  tokens.forEach((t) => freq.set(t, (freq.get(t) || 0) + 1));
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, max)
    .map(([w]) => w);
}

function toneTransform(text, tone) {
  if (!text) return '';
  switch (tone) {
    case 'concise':
      return text
        .split(/\n+/)
        .map((line) => line.replace(/\b(responsible for|worked on|helped|assisted)\b/gi, 'led').replace(/\b(very|highly|extremely)\b/gi, '').trim())
        .filter(Boolean)
        .slice(0, 8)
        .join('\n');
    case 'creative':
      return text.replace(/\b(achieved|built|created|led|designed)\b/gi, (m) => `${m} ✨`);
    default:
      return text;
  }
}

function App() {
  const [resumeText, setResumeText] = useState('');
  const [jobText, setJobText] = useState('');
  const [tone, setTone] = useState('professional');

  const [tailoredResume, setTailoredResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [ats, setAts] = useState({ score: 0, matched: [], missing: [] });

  const getStartedRef = useRef(null);

  const jobKeywords = useMemo(() => extractKeywords(jobText, 14), [jobText]);

  const handleAnalyze = () => {
    const resumeTokens = new Set(
      resumeText
        .toLowerCase()
        .replace(/[^a-z0-9+.#/\-\s]/g, ' ')
        .split(/\s+/)
        .filter(Boolean)
    );
    const matched = jobKeywords.filter((k) => resumeTokens.has(k));
    const missing = jobKeywords.filter((k) => !resumeTokens.has(k));
    const score = Math.round((matched.length / (matched.length + missing.length || 1)) * 100);
    setAts({ score, matched, missing });
  };

  const handleGenerate = () => {
    // Tailored resume: add a highlights section based on matched keywords
    const base = toneTransform(resumeText, tone);
    const highlights = jobKeywords
      .filter((k) => base.toLowerCase().includes(k))
      .slice(0, 8)
      .map((k) => `• Emphasized experience with ${k}`)
      .join('\n');

    const tailored = [
      '— Tailored Highlights —',
      highlights || '• Add examples that reflect the job keywords shown in your ATS panel.',
      '',
      base,
    ].join('\n');

    // Simple cover letter draft using tone
    const role = (jobText.match(/\b(title|role|position):?\s*(.+)/i) || [])[2] || 'the role';
    const company = (jobText.match(/\b(company|org|organization):?\s*(.+)/i) || [])[2] || 'your company';

    const openingByTone = {
      professional: `I'm excited to apply for ${role} at ${company}. With experience aligning closely to your needs — ${jobKeywords.slice(0, 5).join(', ')} — I can contribute from day one.`,
      concise: `Applying for ${role} at ${company}. Relevant strengths: ${jobKeywords.slice(0, 6).join(', ')}.`,
      creative: `Thrilled by the vision behind ${company}, I'd love to bring my spark to ${role} — especially across ${jobKeywords.slice(0, 5).join(', ')}.`,
    };

    const closingByTone = {
      professional: 'Thank you for your time — I look forward to the opportunity to discuss how I can help your team succeed.',
      concise: 'Thanks for your time. Open to discuss fit.',
      creative: 'Thanks for reading — can’t wait to explore how we can build something remarkable together!',
    };

    const letter = [
      openingByTone[tone],
      '',
      'Selected impact:',
      '• Led projects with measurable outcomes and cross-functional collaboration.',
      '• Optimized workflows, improving quality and speed.',
      '• Communicated clearly with stakeholders and delivered on deadlines.',
      '',
      closingByTone[tone],
      '',
      'Sincerely,',
      'Your Name',
    ].join('\n');

    setTailoredResume(tailored);
    setCoverLetter(letter);
    handleAnalyze();
  };

  const scrollToGetStarted = () => {
    const el = document.getElementById('get-started');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection onGetStarted={scrollToGetStarted} />
      <UploadSection
        resumeText={resumeText}
        setResumeText={setResumeText}
        jobText={jobText}
        setJobText={setJobText}
        tone={tone}
        setTone={setTone}
        onGenerate={handleGenerate}
        onAnalyze={handleAnalyze}
      />
      <OutputPreview tailoredResume={tailoredResume} coverLetter={coverLetter} ats={ats} />
      <FeaturesGrid />
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        Built for job seekers — powered by modern AI and NLP.
      </footer>
    </div>
  );
}

export default App;
