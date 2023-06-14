export default function Pokemon() {
  let pokeNum = Math.floor(Math.random() * 151 + 1);
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;
  return (
    <div>
      <h1 className="po">Pokemon #{pokeNum}</h1>
      <img src={url} alt="" />
    </div>
  );
}
