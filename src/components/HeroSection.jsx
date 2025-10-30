import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const HeroSection = ({ onGetStarted }) => {
  return (
    <section className="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(125,76,219,0.25),rgba(0,0,0,0)_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 md:pt-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-violet-100">AI-powered job application assistant</span>
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Tailor your resume and cover letter to every job in seconds
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Paste your resume and a job description. We highlight relevant skills, draft a custom cover letter, and estimate your ATS score so you can apply with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              <Rocket className="h-4 w-4" />
              Get started
            </button>
            <a
              href="#features"
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              See how it works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
