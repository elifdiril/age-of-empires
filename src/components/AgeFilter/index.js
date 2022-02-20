import "./ageFilter.scss";

function index({ handleFilter }) {
  return (
    <div className="buttons">
      <button name="all" onClick={(name) => handleFilter(name)}>
        All
      </button>
      <button name="dark" onClick={(name) => handleFilter(name)}>
        Dark
      </button>
      <button name="feudal" onClick={(name) => handleFilter(name)}>
        Feudal
      </button>
      <button name="castle" onClick={(name) => handleFilter(name)}>
        Castle
      </button>
      <button name="imperial" onClick={(name) => handleFilter(name)}>
        Imperial
      </button>
    </div>
  );
}

export default index;
