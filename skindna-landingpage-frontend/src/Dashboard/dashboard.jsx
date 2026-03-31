import React, { useEffect, useState } from "react";
import API from "../api/axiousconfig"; // <-- import your axios instance

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all appointments
  const fetchAppointments = async () => {
    try {
      const res = await API.get("/get-all");
      setAppointments(res.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete appointment
  const deleteAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;

    try {
      await API.delete(`/${id}`);
      setAppointments(appointments.filter((appt) => appt.id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading appointments...</div>;
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen poppins-regular">
      <h1 className="text-3xl font-bold text-[#B91C1C] mb-6">Admin Dashboard</h1>

      {appointments.length === 0 ? (
        <p className="text-gray-600">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-[#008285] text-white text-left">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{appt.id}</td>
                  <td className="px-4 py-3">{appt.name}</td>
                  <td className="px-4 py-3">{appt.number}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => deleteAppointment(appt.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-800 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
