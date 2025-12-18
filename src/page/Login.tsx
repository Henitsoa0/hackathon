import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import './Login.css'; 

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", formData);
      setMessage(res.data.message);
      setFormData({ email: "", password: "" });
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Erreur serveur");
    }
  };

  return (
    <main className="container" role="main">
      {/* Left visual panel */}
      <section className="left" aria-hidden="true">
        <div className="blob"></div>
        <div className="blob2"></div>
        <div className="ring"></div>

        <div className="left-content">
          <h1 className="welcome">Bienvenue !</h1>
          <p className="subtitle">Connectez-vous pour accéder à vos ressources éducatives et suivre votre progression.</p>
        </div>
      </section>

      {/* Right form panel */}
      <section className="right" aria-label="Login form">
        <div className="form-card">
          <h2 className="form-title">Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn">Se connecter</button>

            {message && <p className="assistive">{message}</p>}

            <p className="below">
              Nouveau ici ? <a href="/register" aria-label="Register">Créer un compte</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
