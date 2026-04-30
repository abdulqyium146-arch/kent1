interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
  heading?: string
  subheading?: string
}

export default function ProcessSteps({
  steps,
  heading = 'How It Works',
  subheading = 'A straightforward process from first contact to written report.',
}: ProcessStepsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{heading}</h2>
          <p className="text-slate-500 text-lg">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-200 to-brand-100"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                {step.number}
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
