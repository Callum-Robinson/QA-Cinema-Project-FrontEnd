const FilmSelection = () => {
  return (
    <div>
      <label for="dropdown" id="model">
        Select Film:
      </label>
      <select id="dropdown">
        <option value="A Quiet Place">A Quiet Place</option>
        <option value="Being John Malkovich">Being John Malkovich</option>
        <option value="Blade Runner">Blade Runner</option>
        <option value="Carol">Carol</option>
        <option value="Dune">Dune</option>
        <option value="Get Out">Get Out</option>
        <option value="John Wick">John Wick</option>
        <option value="The Man Who Fell To Earth">The Man Who Fell To Earth</option>
        <option value="The Thing">The Thing</option>
      </select>
    </div>
  );
};

export default FilmSelection;
