import "../styles/globals.css";
import Loading from "../components/Loading";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
function MyApp({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth);
  if(loading)return <Loading />
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
