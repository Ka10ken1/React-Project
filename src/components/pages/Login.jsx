import { useState } from "react";
import "./css/Login.css";
import { useTranslation } from "react-i18next";
import SupaBase from "./SupaBase";
import { Link } from "react-router-dom";

const supabase = SupaBase();

function InputField({ label, type, id, name, required, value, onChange }) {
    return (
        <div className="input">
            <label htmlFor={id}>
                {label}:
            </label>
            <input
                type={type}
                id={id}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

function LoginForm() {
    const [t, _] = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { user, error } = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) {
                setError("incorrect values");
            } else {
                alert('User signed in:', user);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form" onSubmit={handleLogin}>
            <InputField label={t("Email")} type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label={t("Password")} type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#4CAF50", color: "white", cursor: "pointer" }} disabled={loading}>
                {loading ? 'Logging in...' : t("Login")}
            </button>
        </form>
    );
}

function Login() {
    const [t, _] = useTranslation()
    return <div className="sign">
        <h1 style={{ marginLeft: "160px" }}>{t("Login")}</h1>
        <LoginForm />
        <Link to="/signup" className="sign-up">Sign-up</Link>
    </div>
}

export default Login;

