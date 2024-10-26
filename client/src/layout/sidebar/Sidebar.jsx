import Weather from "../../components/widget/Weather";

const Sidebar = () => {
  return (
    <div className="space-y-4 sticky top-28 mb-3 pt-3">
      <Weather />
    </div>
  );
};

export default Sidebar;
