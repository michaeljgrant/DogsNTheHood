import * as firebase from "firebase";

export const LoginAuthenticator = (email, password) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  }, []);
};
