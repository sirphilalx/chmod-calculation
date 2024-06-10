const Chmod = (props) => {
  const permissions = ["Read", "Write", "Execute"];

  return (
    <div className="flex flex-col sm:flex-col  p-4 w-[200px] sm:w-[200px] border rounded shadow-sm items-center">
      <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
      <div className="flex flex-col space-y-2 ">
        {permissions.map((permission, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`${props.title}-${permission.toLowerCase()}`}
              name={`${props.title}-${permission.toLowerCase()}`}
            />
            <label htmlFor={`${props.title}-${permission.toLowerCase()}`}>
              {permission}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chmod;
