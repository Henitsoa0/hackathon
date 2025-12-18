import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import './Register.css';


interface FormData {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
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
      const res = await axios.post("http://localhost:5000/api/users/register", formData);
      setMessage(res.data.message);
      setFormData({ nom: "", prenom: "", email: "", password: "" });
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
          <h1 className="welcome"></h1>
          <p className="subtitle">Inscrivez-vous pour explorer vos ressources éducatives et suivre votre progression.</p>
        </div>
      </section>

      {/* Right form panel */}
      <section className="right" aria-label="Sign in form">
        <div className="form-card">
          <h2 className="form-title">S'inscrire</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="text"
                name="nom"
                className="input"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <input
                type="text"
                name="prenom"
                className="input"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>

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

           

            <button type="submit" className="btn">S'inscrire</button>

            {message && <p className="assistive">{message}</p>}

            <p className="below">
              Déjà membre ?
              <a href="/login"  aria-label="Se connecter"> Se connecter</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
