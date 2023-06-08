import { Skeleton } from "../../components/ui/skeleton";

export default function Loading() {
  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div
          className="bg-white p-8 col-span-4 xl:col-span-4 md:col-span-2"
          key={id}
        >
          <Skeleton className="h-6 w-1/2"></Skeleton>
          <Skeleton className="h-6 w-1/4 mb-4"></Skeleton>

          <Skeleton className="rounded-md w-full h-80 bg-gray-400"></Skeleton>
        </div>
      ))}
    </main>
  );
}
