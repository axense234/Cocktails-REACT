// Context
import { useGlobalContext } from "../context";

const Form = () => {
  const { alert, textValue, handleFilter } = useGlobalContext();

  return (
    <form id='form-container'>
      <label htmlFor='search-bar'>Search Your Favorite Cocktailz</label>
      <input
        type='text'
        id='search-bar'
        style={{ borderColor: alert ? "red" : "white" }}
        value={textValue}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </form>
  );
};

export default Form;
