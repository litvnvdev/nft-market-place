import SubscribeInput from "./SubscribeInput";

const Subscribe = () => {
  return (
    <section className="mt-20 px-8 py-8">
      <div className="container flex flex-col md:flex-row md:gap-12 md:max-w-[72rem] items-center px-8 py-12 bg-neutral-700 rounded-3xl ">
        <div className="bg-[url(/subscribe.png)] bg-center bg-cover w-11/12 h-[23rem] rounded-3xl"></div>
        <div className="mt-4 flex-col items-center gap-4 text-cyan-50 max-w-[26rem]">
          <h1 className="text-4xl font-semibold">Join our weekly digest</h1>
          <p className="text-lg mt-5">
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
