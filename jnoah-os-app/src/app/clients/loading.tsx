import { Skeleton, ClientCardSkeleton } from "@/components/ui/Skeleton";

export default function ClientsLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-2 w-8" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-4 w-full max-w-lg" />
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="rf-card p-4 space-y-3">
        <Skeleton className="h-10 w-full" />
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-8 w-16" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ClientCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
