export default function VideoSection() {
  return (
    <div className="card max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Learn More About DesignLoop Studio</h2>

      <div className="relative aspect-video bg-black/40 rounded-lg border border-[rgba(157,78,221,0.2)] flex items-center justify-center overflow-hidden">
        <div className="text-center p-8">
          <svg
            className="w-24 h-24 mx-auto mb-4 text-primary-purple opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-text-secondary text-lg">
            Video Coming Soon
          </p>
          <p className="text-text-muted text-sm mt-2">
            Discover how DesignLoop Studio can transform your design workflow
          </p>
        </div>
      </div>
    </div>
  );
}
