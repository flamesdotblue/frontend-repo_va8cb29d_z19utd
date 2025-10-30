import React from 'react';
import { Stars, Target, Shield, Gauge } from 'lucide-react';

const features = [
  {
    icon: Stars,
    title: 'AI-tailored resume',
    desc: 'Rewrite bullet points to match the job description and highlight relevant impact.',
  },
  {
    icon: Target,
    title: 'Custom cover letters',
    desc: 'Generate concise, role-specific cover letters with your tone of voice.',
  },
  {
    icon: Gauge,
    title: 'ATS score analyzer',
    desc: 'Simulate keyword matching to estimate how your resume performs in ATS systems.',
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    desc: 'Your data stays secure — delete drafts anytime from your account dashboard.',
  },
];

const FeaturesGrid = () => {
  return (
    <section className="w-full bg-slate-50 py-16 dark:bg-slate-950" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How it helps you stand out</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Built with GPT-4 and modern NLP techniques to get you from job posting to polished application — fast.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <Icon className="h-5 w-5 text-violet-500" />
              <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
