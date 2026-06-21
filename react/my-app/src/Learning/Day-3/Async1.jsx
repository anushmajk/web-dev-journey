import React, { useEffect, useState } from 'react'

const Async1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setData(json.slice(0, 99))
    }
    catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <p>Loading....</p>
  return (
    <div>
      <h1>Post</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        )
        )}
      </ul>
    </div>
  );
};

export default Async1