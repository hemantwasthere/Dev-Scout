"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { badgeVariants } from "./ui/badge";

interface TagsListProps {
  tags: string[];
  className: string;
}

const TagsList: React.FC<TagsListProps> = ({ tags, className }) => {
  const router = useRouter();

  return (
    <div className={cn(className)}>
      <div className="flex gap-2 flex-wrap">
        {tags?.map((tag) => (
          <button
            className={cn(badgeVariants())}
            key={tag}
            onClick={() => {
              router.push(`/browse?search=${tag}`);
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export { TagsList };
