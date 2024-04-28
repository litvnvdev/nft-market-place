type TagProps = {
    tag: string;
}

export function Tag({tag}:TagProps) {
  return (
    <div className="w-full flex justify-start items-center">
      <p className="rounded-3xl py-2 px-4 bg-zinc-700 text-sm text-cyan-50 uppercase font-semibold">
        {tag}
      </p>
    </div>
  );
}
