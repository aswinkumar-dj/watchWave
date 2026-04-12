const skeletonItems = Array.from({ length: 8 });

const FeedSkeletonCard = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-black/10 p-2">
      <div className="animate-pulse">
        <div className="aspect-video w-full rounded-xl bg-base-300/60"></div>
        <div className="space-y-3 p-3">
          <div className="h-4 w-11/12 rounded bg-base-300/60"></div>
          <div className="h-4 w-3/4 rounded bg-base-300/40"></div>
          <div className="h-3 w-2/3 rounded bg-base-300/40"></div>
          <div className="flex gap-3">
            <div className="h-3 w-20 rounded bg-base-300/40"></div>
            <div className="h-3 w-16 rounded bg-base-300/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedSkeleton = ({ padded = false }) => {
  const wrapperClassName = padded
    ? "w-full px-3 pb-6 pt-18 sm:px-4 lg:px-6 xl:px-8"
    : "";

  return (
    <div className={wrapperClassName}>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
        {skeletonItems.map((_, index) => (
          <FeedSkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeedSkeleton;
