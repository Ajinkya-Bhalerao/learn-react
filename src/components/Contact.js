const Contact = () => {
  return (
    <div className="font-bold p-2 m-2">
      <h1 className="text-3xl">Contact Us</h1>
      <form>
        <input
          type="text"
          className="m-2 p-2 border rounded-lg"
          placeholder="Enter Name..."
        />
        <input
          type="textarea"
          className="m-2 p-2 border rounded-lg"
          placeholder="Enter message..."
        />
        <button className="px-4 py-2 text-m text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
