const WatchPageSkeleton = () => {
  return (
    <div className="w-full px-3 pb-6 pt-18 sm:px-4 lg:px-6 xl:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 animate-pulse space-y-4">
          <div className="aspect-video w-full rounded-2xl bg-base-300/60"></div>
          <div className="space-y-3 px-1 sm:px-0">
            <div className="h-7 w-11/12 rounded bg-base-300/60"></div>
            <div className="h-5 w-2/5 rounded bg-base-300/40"></div>
          </div>
          <div className="rounded-2xl bg-black/20 p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="h-6 w-40 rounded bg-base-300/50"></div>
              <div className="h-10 w-36 rounded bg-base-300/40"></div>
            </div>
          </div>
          <div className="rounded-2xl bg-black/20 p-4 space-y-3">
            <div className="h-5 w-32 rounded bg-base-300/50"></div>
            <div className="h-4 w-full rounded bg-base-300/40"></div>
            <div className="h-4 w-10/12 rounded bg-base-300/30"></div>
            <div className="h-4 w-9/12 rounded bg-base-300/30"></div>
          </div>
          <div className="space-y-3 pt-2">
            <div className="h-6 w-28 rounded bg-base-300/50"></div>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl bg-black/20 p-3"
              >
                <div className="h-10 w-10 rounded-full bg-base-300/40"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-24 rounded bg-base-300/40"></div>
                  <div className="h-4 w-full rounded bg-base-300/30"></div>
                  <div className="h-4 w-3/4 rounded bg-base-300/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="min-w-0 rounded-2xl bg-black/20 p-3 sm:p-4">
          <div className="animate-pulse space-y-3">
            <div className="h-6 w-28 rounded bg-base-300/50"></div>
            <div className="h-72 rounded-xl bg-base-300/40 md:h-80 xl:h-[495px]"></div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="h-10 flex-1 rounded-lg bg-base-300/40"></div>
              <div className="h-10 w-full rounded-lg bg-base-300/30 sm:w-24"></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WatchPageSkeleton;
