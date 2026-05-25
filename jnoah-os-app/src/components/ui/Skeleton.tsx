type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`rf-skeleton rounded-[var(--rf-radius)] ${className}`}
      aria-hidden
    />
  );
}

export function ClientCardSkeleton() {
  return (
    <div className="rf-card p-5 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-4">
        <Skeleton className="w-[52px] h-[52px] shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
      <div className="pt-3 border-t border-[var(--rf-border)] space-y-2 mt-auto">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <Skeleton className="h-4 w-24 mt-4" />
    </div>
  );
}

export function GoalCardSkeleton() {
  return (
    <div className="rf-card p-5 sm:p-6 space-y-3">
      <div className="flex gap-2">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-6 w-4/5" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
      <Skeleton className="h-2 w-full mt-2" />
    </div>
  );
}

export function CommandCenterSkeleton() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-pulse">
      <div className="space-y-2">
        <Skeleton className="h-2 w-8" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-4 w-full max-w-xl" />
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="grid sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
      <Skeleton className="h-40 w-full" />
      <div className="grid sm:grid-cols-2 gap-4">
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-36 w-full" />
      </div>
    </div>
  );
}

export function ClientProfileSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-4 w-48" />
      <div className="rf-card p-6 flex gap-5">
        <Skeleton className="w-[72px] h-[72px] shrink-0" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-full max-w-md" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
      <div className="rf-card">
        <div className="flex gap-2 p-3 border-b border-[var(--rf-border)]">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-8 w-24" />
          ))}
        </div>
        <div className="p-8 space-y-3">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
    </div>
  );
}
