const DonarCrad = () => {
  return (
    <div className="border-2 border-primary p-5 rounded-md relative">
      <div className="status absolute top-0 right-0 bg-primary rounded-bl px-4 py-1">
        <span className="text-white font-bold">Available</span>
      </div>
      <div className="flex gap-6 items-center">
        <div className="img w-2/12 h-2/6">
          <img
            src="http://service.scouts.gov.bd/profile_img/1548126508-11.jpg"
            alt="IMG"
            className="  rounded-full border-2 border-secondary"
          />
          <h1 className="text-lg text-center pt-3">B+</h1>
        </div>
        <div className="details">
          <h1 className="text-xl">Borhan Uddin</h1>
          <h1 className="text-lg">
            মোবাইল: <span>01620557840</span>
          </h1>
          <h1 className="text-lg">
            ঠিকানা: <span>ভেরামারা</span>
          </h1>
          <div className="social">
            <ul className="flex justify-between">
              <li>FB</li>
              <li>FB</li>
              <li>FB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonarCrad;
