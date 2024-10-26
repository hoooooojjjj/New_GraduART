import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Department from "./pages/Department/Department";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <Routes>
            <Route exact path="/*" element={<Landing />} />
            <Route exact path="/:department" element={<Department />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;