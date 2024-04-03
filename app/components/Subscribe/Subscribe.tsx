import SubscribeInput from "./SubscribeInput";

const Subscribe = () => {
  return (
    <section className="py-5">
      <div className="container py-12 max-w-[72rem] h-[27rem] bg-neutral-700 rounded-3xl flex">
        <div className=" container bg-[url(/subscribe.png)] bg-center bg-cover w-[26rem] rounded-3xl"></div>
        <div className="container flex-col gap-4 text-cyan-50 max-w-[26rem]">
          <h1 className="text-5xl font-semibold">Join our weekly digest</h1>
          <p className="text-xl mt-5">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <SubscribeInput /> 
          {/* TODO: PopUp about success recive messsage on click */}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
