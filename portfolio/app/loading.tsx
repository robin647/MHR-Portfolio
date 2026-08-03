export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-signal/20 border-t-signal" />
        </div>
        <p className="font-mono text-xs text-ink-dim">loading…</p>
      </div>
    </div>
  );
}
