import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate(); //이동객체
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  //유저객체 안의 변수를 구조분해
  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/users", user);
    navigate("/"); //홈으로
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">유저 추가</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input
                value={name}
                onChange={onInputChange}
                type="text"
                id="name"
                className="form-control"
                placeholder="이름 입력"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input
                value={username}
                onChange={onInputChange}
                type="text"
                id="username"
                className="form-control"
                placeholder="유저네임 입력"
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input
                value={email}
                onChange={onInputChange}
                type="email"
                id="email"
                className="form-control"
                placeholder="이메일 입력"
                name="email"
              />
            </div>
            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-primary px-3 mx-2"
              >
                추가
              </button>
              <Link to="/" className="btn btn-outline-danger px-3 mx-2">
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
