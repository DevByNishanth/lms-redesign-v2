import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Faculty-Dashboard/Dashboard"
import AdminDashboard from "./pages/Admin-Dashboard/AdminDashboard"

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App