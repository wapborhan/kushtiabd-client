import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    { id: 1 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  return (
    <>
      <div className="search">search</div>
      <div className="services">
        <div className="grid grid-cols-3 gap-4">
          {services.map(({ id }) => {
            return <ServiceCard key={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
