import React from 'react';
import { FileText, Mail, CheckCircle2 } from 'lucide-react';

const OutputBlock = ({ title, icon: Icon, content }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div className="mb-3 flex items-center gap-2">
      <Icon className="h-4 w-4 text-violet-500" />
      <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">{title}</h3>
    </div>
    <div className="prose prose-sm max-w-none text-slate-800 dark:prose-invert dark:text-slate-100">
      {content ? (
        <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed">{content}</pre>
      ) : (
        <p className="text-sm text-slate-500">Your draft will appear here after generation.</p>
      )}
    </div>
  </div>
);

const ATSPanel = ({ score, matched, missing }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div className="mb-3 flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">ATS Score (simulated)</h3>
    </div>
    <div className="mb-3">
      <div className="text-2xl font-semibold text-slate-900 dark:text-white">{score}%</div>
      <p className="text-xs text-slate-500">Keyword alignment based on your resume and the job description.</p>
    </div>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div>
        <div className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Matched keywords</div>
        <div className="flex flex-wrap gap-2">
          {matched.length ? (
            matched.map((k) => (
              <span key={k} className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-600 dark:text-emerald-400">{k}</span>
            ))
          ) : (
            <span className="text-xs text-slate-500">No matches yet</span>
          )}
        </div>
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Missing keywords</div>
        <div className="flex flex-wrap gap-2">
          {missing.length ? (
            missing.map((k) => (
              <span key={k} className="rounded-full bg-amber-500/10 px-2 py-1 text-xs text-amber-600 dark:text-amber-400">{k}</span>
            ))
          ) : (
            <span className="text-xs text-slate-500">None</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const OutputPreview = ({ tailoredResume, coverLetter, ats }) => {
  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Results</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Preview your AI-tailored documents and ATS score.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            <OutputBlock title="Tailored Resume" icon={FileText} content={tailoredResume} />
            <OutputBlock title="Cover Letter" icon={Mail} content={coverLetter} />
          </div>
          <div>
            <ATSPanel score={ats.score} matched={ats.matched} missing={ats.missing} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputPreview;
