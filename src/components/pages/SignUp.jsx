import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./css/Signup.css";
import SupaBase from "./SupaBase";
import UserInfo from "./UserInfo";

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

function SignUpForm({ onSuccess }) {
    const [t, _] = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (password !== repassword) {
                console.error('Passwords do not match');
                return;
            }
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });
            if (error) {
                console.error('Error signing up:', error.message);
            } else {
                console.log('User signed up:', user);
                onSuccess(name, email);
            }
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <form className="form" onSubmit={handleSignUp}>
            <InputField label={t("Name")} type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
            <InputField label={t("Email")} type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label={t("Password")} type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputField label={t("Rewrite Password")} type="password" id="repassword" name="repassword" required value={repassword} onChange={(e) => setRepassword(e.target.value)} />
            <button type="submit" className="sign-but">
                {t("SignUp")}
            </button>
        </form>
    );
}

function SignUp() {
    const [t, _] = useTranslation();
    const [userInfo, setUserInfo] = useState(null);

    const handleSuccess = (name, email) => {
        setUserInfo({ name, email });
    };

    return (
        <div className="sign">
            <h1 style={{ textAlign: "center" }}>{t("SignUp")}</h1>
            {!userInfo ? (
                <SignUpForm onSuccess={handleSuccess} />
            ) : (
                <UserInfo name={userInfo.name} email={userInfo.email} />
            )}
        </div>
    );
}

export default SignUp;

