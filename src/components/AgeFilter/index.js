import "./ageFilter.scss";

function index({ handleFilter }) {
  return (
    <div className="buttons">
      <button name="all" onClick={(name) => handleFilter(name)}>
        All
      </button>
      <button name="Dark" onClick={(name) => handleFilter(name)}>
        Dark
      </button>
      <button name="Feudal" onClick={(name) => handleFilter(name)}>
        Feudal
      </button>
      <button name="Castle" onClick={(name) => handleFilter(name)}>
        Castle
      </button>
      <button name="Imperial" onClick={(name) => handleFilter(name)}>
        Imperial
      </button>
    </div>
  );
}

export default index;
