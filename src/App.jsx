import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useUserAuth } from "./context/UserAuthContext";
function App() {
  const { protect } = useUserAuth();
  return (
    <div className="dark:bg-gray-700">
      <Routes>
        {protect ? (
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          ></Route>
        ) : (
          <Route path="/" element={<Homepage />}></Route>
        )}

        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
