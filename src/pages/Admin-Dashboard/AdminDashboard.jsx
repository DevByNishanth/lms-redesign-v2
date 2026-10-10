import AdminVendorBreakdown from "./AdminVendorBreakdown"
import TotalStudentsCount from "./TotalStudentsCount"

const AdminDashboard = () => {
  return (
    <>
      <div className="statcard-container grid grid-cols-12 gap-4">
        <TotalStudentsCount />
        <AdminVendorBreakdown />
      </div>

    </>
  )
}

export default AdminDashboard
