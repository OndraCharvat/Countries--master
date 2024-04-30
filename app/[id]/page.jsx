async function getInfoData(params) {
  console.log(params);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${params.id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
const Detail = async ({ params }) => {
  console.log(params);
  const data = await getInfoData(params);
  return (
    <div className="dashboard">
      {data.map((post) => (
        <div className="country">
          <div key={post.name.common}>
            <h1>{post.name.common}</h1>
            <img src={post.flags.png} alt={post.flags} />
            <h4>Population: {post.population.toLocaleString()}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
