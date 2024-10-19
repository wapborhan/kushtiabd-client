const Select = ({ name, setData, disableCon, data }) => {
  return (
    <select
      name={name}
      className="p-2 bg-primary rounded-md border-2 w-full"
      onChange={(e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];
        const id = selectedOption.getAttribute("id");
        const name = e.target.value;
        setData({ id, name });
      }}
      disabled={!disableCon}
    >
      <option selected className="capitalize">
        {name}
      </option>
      {data &&
        data.map(({ id, name }) => {
          return (
            <option value={name} id={id} key={name}>
              {name}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
