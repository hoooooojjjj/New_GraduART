import Router from "./components/Router";
import "./GlobalColors.css";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>

    );
}

export default App;