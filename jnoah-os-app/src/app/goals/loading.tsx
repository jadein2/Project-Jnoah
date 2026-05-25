import { Skeleton, GoalCardSkeleton } from "@/components/ui/Skeleton";

export default function GoalsLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-2 w-8" />
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-4 w-full max-w-lg" />
      </div>
      <Skeleton className="h-20 w-full" />
      <GoalCardSkeleton />
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <GoalCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
