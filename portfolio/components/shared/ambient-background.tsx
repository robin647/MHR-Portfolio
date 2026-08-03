export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -left-40 top-32 h-[420px] w-[420px] animate-float rounded-full bg-signal/10 blur-[120px]" />
      <div className="absolute -right-32 top-[38%] h-[380px] w-[380px] animate-float rounded-full bg-violet/10 blur-[130px] [animation-delay:-3s]" />
      <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] animate-float rounded-full bg-signal/[0.06] blur-[110px] [animation-delay:-1.5s]" />
    </div>
  );
}
