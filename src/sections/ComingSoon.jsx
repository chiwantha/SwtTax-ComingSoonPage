import Stock from "../assets/images/stock.gif";
import CountdownTimer from "../components/CountdownTimer";
import whatsapp from "../assets/icons/whatsapp.png";
import Button from "../components/Button";
import CopyToClipboard from "../components/CopyToClipboard";

const ComingSoon = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-gradient-to-l from-violet-950 to-blue-800 hover:bg-gradient-to-r">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="w-60 sm:w-96 md:max-w-xl">
          <img src={Stock} alt="K-CHord Stock" className="bg-contain" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-blue-300">WELCOME</h1>
          <CountdownTimer />
          <p className="max-w-sm pl-5 pr-5 text-center text-blue-300">
            SWT TAX Pvt Ltd delivers reliable financial solutions on time, every
            time. Stay tuned for our upcoming release.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4 pl-5 pr-5">
            <Button
              label="WhatsApp"
              bgColor={"bg-green-400"}
              icon={whatsapp}
              href={`https://api.whatsapp.com/send?phone=447459500796&text=Welcome%20To%20SWT%20Accounting%20`}
            />
            <CopyToClipboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
