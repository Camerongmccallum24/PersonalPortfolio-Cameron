
import { cn } from "@/lib/utils";

interface TimelineProps {
  data: {
    title: string;
    content: React.ReactNode;
  }[];
}

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8">
          <div className="absolute left-0 top-0 h-full w-px bg-muted" />
          <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary" />
          {item.content}
        </div>
      ))}
    </div>
  );
}
