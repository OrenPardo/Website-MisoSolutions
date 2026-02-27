export default function DashboardPreview() {
  return (
    <section className="relative pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-2xl shadow-olive/10 border border-olive/10 overflow-hidden">
          {/* Mock dashboard header */}
          <div className="bg-[#f8f6f0] border-b border-olive/10 px-6 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="ml-4 flex-1 bg-cream rounded-md h-6" />
          </div>

          {/* Dashboard content placeholder */}
          <div className="p-8">
            {/* Top toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-3">
                <div className="h-8 w-24 bg-cream rounded-md" />
                <div className="h-8 w-20 bg-cream rounded-md" />
                <div className="h-8 w-28 bg-cream rounded-md" />
              </div>
              <div className="h-8 w-32 bg-olive/10 rounded-md" />
            </div>

            {/* Main content area - architectural wireframe style */}
            <div className="aspect-[16/10] bg-[#f0ede4] rounded-xl border border-olive/10 p-8 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Wireframe blocks */}
                <div className="border-2 border-olive/20 rounded-lg p-6 mb-4">
                  <div className="border border-dashed border-olive/15 rounded p-4 mb-3">
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 bg-olive/8 rounded"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="border border-dashed border-olive/15 rounded p-3">
                    <div className="h-20 bg-olive/5 rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 border border-olive/15 rounded-lg" />
                  <div className="h-16 border border-olive/15 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
