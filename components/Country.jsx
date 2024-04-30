import React from "react";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://restcountries.com/v3.1/all");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

const Country = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="dashboard">
      {data.map((post) => (
        <div className="country">
          <div key={post.name.common}>
            <h1>{post.name.common}</h1>
            <img src={post.flags.png} alt={post.flags} />
            <h4>Population: {post.population.toLocaleString()}</h4>
            <h4>Timezone: {post.timezones}</h4>
            <h4>Borders: {post.borders}</h4>
            <Link href={`/${post.name.common}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
