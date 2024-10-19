import Box from "../../components/shared/Box";

const StockReport = () => {
  const cardData = [
    { id: 1, groupName: "A+" },
    { id: 2, groupName: "B+" },
    { id: 3, groupName: "O+" },
    { id: 4, groupName: "AB+" },
    { id: 1, groupName: "A-" },
    { id: 2, groupName: "B-" },
    { id: 3, groupName: "O-" },
    { id: 4, groupName: "AB-" },
  ];

  return (
    <div>
      <Box title={`এখন রক্তের ডোনার সংখ্যাঃ ১৩০ জন`}>
        <div className="box">
          <h1 className="text-xl">গ্রুপ অনুযায়ী</h1>
          <div className="grid grid-cols-4 p-3 justify-center items-center">
            {cardData.map(({ groupName, id }) => {
              return (
                <div
                  className="group flex gap-3 justify-center items-center p-2 border-2"
                  key={id}
                >
                  <div className="name text-primary font-bold">{groupName}</div>
                  <div className="stock ">19</div>
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default StockReport;
