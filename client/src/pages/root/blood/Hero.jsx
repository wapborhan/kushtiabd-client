const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/blood-banner.jpg)`,
        backgroundPosition: "-60px top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f34334",
      }}
      className="h-[500px] relative w-full"
    >
      <div className="flex gap-2 w-7/12 absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-2/3">
        <img src="/images/blood-banner-first.png" alt="" className="w-5/12" />
        <div className="text border-l ps-4 text-white text-2xl">
          সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই এটা সম্ভব
          হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের ৪৭%-ই আসত পেশাদার
          রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে আসে ২০-২৫% এ।
        </div>
      </div>
    </div>
  );
};

export default Hero;
