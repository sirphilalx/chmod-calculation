const Board = () => {
  return (
    <div className="flex flex-col w-full sm:w-[650px] justify-center items-center py-8 bg-color-grey px-4 rounded border mt-10">
      <div className="flex flex-col gap-4 justify-center items-center sm:flex-row w-full">
        <h2 className="text-bold text-2xl">Linux Permissions:</h2>
        <div className="flex flex-col sm:flex-row items-center space-x-2 gap-4 w-full">
          <input
            type="number"
            id="permisions"
            name="code"
            placeholder="753"
            className="border rounded w-full
           p-2 outline-none"
          />
          <input
            type="text"
            id="permisions"
            name="code"
            placeholder="-rwx-rw-wx"
            className="border w-full rounded
           p-2"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl mt-6 mb-2">Chmod Calculator</h3>
        <p>
          Chmod Calculator is a free utility to calculate the numeric (octal) or
          symbolic value for a set of file or folder permissions in Linux
          servers.
        </p>
        <h3 className="text-xl mt-6 mb-2">How to use</h3>
        <p>
          Check the desired boxes or directly enter a valid numeric value (e.g.
          777) or symbolic notation (e.g. rwxrwxrwx) to see its value in other
          formats.
        </p>
        <h3 className="text-xl mt-6 mb-2">File Permissions</h3>
        <p>
          File permissions in Linux file system are managed in three distinct
          user classes: user/owner, group and others/public. Each class can have
          read, write and execute permissions. File permission can be
          represented in a symbolic or numeric (octal) format.
        </p>
      </div>
    </div>
  );
};

export default Board;
