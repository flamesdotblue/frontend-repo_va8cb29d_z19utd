import React from 'react';
import { FileText, ClipboardPaste, Wand2, Type } from 'lucide-react';

const tones = [
  { key: 'professional', label: 'Professional' },
  { key: 'concise', label: 'Concise' },
  { key: 'creative', label: 'Creative' },
];

const UploadSection = ({ resumeText, setResumeText, jobText, setJobText, tone, setTone, onGenerate, onAnalyze }) => {
  return (
    <section className="relative w-full bg-slate-50 py-12 dark:bg-slate-950" id="get-started">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Your materials</h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ClipboardPaste className="h-4 w-4" /> Paste text into the fields below
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Resume</span>
            </div>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="min-h-[200px] w-full resize-y rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-violet-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Paste your resume text here..."
            />
          </div>

          <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 flex items-center gap-2">
              <Type className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Job description</span>
            </div>
            <textarea
              value={jobText}
              onChange={(e) => setJobText(e.target.value)}
              className="min-h-[200px] w-full resize-y rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-violet-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Paste the job description here..."
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 dark:text-slate-300">Tone:</span>
            <div className="flex items-center gap-2">
              {tones.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTone(t.key)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                    tone === t.key
                      ? 'border-violet-500 bg-violet-500 text-white shadow'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onAnalyze}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              ATS Analyze
            </button>
            <button
              onClick={onGenerate}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              <Wand2 className="h-4 w-4" /> Generate drafts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
