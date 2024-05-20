import Link from "next/link";

type Props = {
  tag: string;
};

export function Tag({ tag }: Props) {
  return (
    <Link href="#">
      <div className="px-3 py-1 bg-neutral-700 rounded-2xl text-cyan-50">
        {tag}
      </div>
    </Link>
  );
}
