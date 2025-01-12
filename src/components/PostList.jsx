import { useEffect, useState } from "react";
import { findAll } from "../services/PostAPI";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setPosts(response.data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await findAll();
        setPosts(data);
      } catch (error) {
        setError(error);
        console.error("Error:", error);
      }
    };
    fetchPosts();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Listado de Doctores</h1>
        <table className="min-w-full bg-black border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Edad</th>
              <th className="py-2 px-4 border-b">Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.nombre}</td>
                <td className="py-2 px-4 border-b">{item.especialidad}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Mostrar Listado de Doctores</button>
      </div>
    </div>
  );
}
