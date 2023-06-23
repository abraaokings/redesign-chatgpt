import HomeInputBtn from "../components/HomeInputBtn";

const HomeInput = () => {
  return (
    <div className="input-container">
      <form>
        <input
          type="text"
          placeholder='Example: "Explain quantum computing in simple terms"'
        />
        <button>
          <HomeInputBtn />
        </button>
      </form>
    </div>
  );
};

export default HomeInput;
