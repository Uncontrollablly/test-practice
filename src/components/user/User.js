import { useEffect, useState } from "react";

export default function User({ id = 1 }) {
  const [user, setUser] = useState(null);

  async function fetchUserData(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  if (!user) {
    return <>加载中...</>;
  }

  return (
    <details>
      <summary>{user.name}</summary>
      phone: <strong>{user.phone}</strong>
      <br />
      email: {user.email}
    </details>
  );
}
