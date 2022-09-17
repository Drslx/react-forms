import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  /* 4 - Controlled inputs */

  /* 3 - Gerenciamento de dados */
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enviando");
    console.log(name, email, bio, role);

    /* 5- Limpar form */
    setName("");
    setEmail("");
    setBio("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Funcao no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
