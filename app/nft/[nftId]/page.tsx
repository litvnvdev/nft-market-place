type NftDetailsProps = {
  title: string;
  id: number;
  params: { nftId: string };
};
export default function NftDetails({ params, id, title }: NftDetailsProps) {
  console.log(params);
  return (
    <>
      <section>
        <h1 className="text-cyan-50">Here is NFT №{params.nftId}</h1>
        <h2>{title}</h2>
      </section>
    </>
  );
}
