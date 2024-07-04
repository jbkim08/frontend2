import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  //[{유저1},{유저2},{유저3}...]
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/users");
    setUsers(result.data);
  };
  //처음 한번 유저데이터 가져오기
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container">
      <table className="table border shadow text-center my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((u, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
