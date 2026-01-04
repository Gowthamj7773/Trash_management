import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideTab from "../components/SideTab/SideTab";
import Login from "../pages/Login/Login";

//residents
import Home from "../pages/Residents/Home";
import Map from "../pages/Residents/Map";
import ReportTrash from "../pages/Residents/ReportTrash";
import Feedback from "../pages/Residents/Feedback";

// Mock User - Change role to test: "Resident", "TrashMan", "SuperVisor", "SanittaryInspector", "MHO"
const mockUser = { role: "Resident", name: "Alex Rivera" };

function Navigator() {
return (
    <Router>
    <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Unauthorized Redirect */}
        {!mockUser?.role && <Route path="*" element={<Navigate to="/login" replace />} />}

        {/* ROLE-BASED PROTECTED ROUTES */}
        <Route path="/" element={<SideTab user={mockUser} />}>
        
        {/* RESIDENT ROUTES */}
        {mockUser?.role === "Resident" && (
            <>
            <Route index element={<Home/>} />
            <Route path="map" element={<Map/>} />
            <Route path="report-trash" element={<ReportTrash/>} />
            <Route path="statistics" element={<div>Resident Statistics</div>} />
            <Route path="quiz" element={<div>Pollution Quiz Content</div>} />
            <Route path="feedback" element={<Feedback/>} />
            <Route path="settings" element={<div>User Settings</div>} />
            </>
        )}

        {/* TRASH MAN ROUTES */}
        {mockUser?.role === "TrashMan" && (
            <>
            <Route index element={<div>TrashMan Daily Overview</div>} />
            <Route path="routes-timing" element={<div>Route Timings Map</div>} />
            <Route path="immediate-tasks" element={<div>Task List</div>} />
            <Route path="photo-upload" element={<div>Camera Upload Interface</div>} />
            <Route path="statistics" element={<div>Work Statistics</div>} />
            <Route path="feedback" element={<div>Report Issues</div>} />
            <Route path="settings" element={<div>Worker Settings</div>} />
            </>
        )}

        {/* SUPERVISOR & SANITARY INSPECTOR ROUTES (Shared Logic) */}
        {(mockUser?.role === "SuperVisor" || mockUser?.role === "SanittaryInspector") && (
            <>
            <Route index element={<div>Management Dashboard</div>} />
            <Route path="search-workers" element={<div>Worker Directory</div>} />
            <Route path="attendance" element={<div>Attendance Logs</div>} />
            <Route path="immediate-tasks" element={<div>Task Assignment</div>} />
            <Route path="statistics" element={<div>Region Statistics</div>} />
            <Route path="settings" element={<div>Admin Settings</div>} />
            </>
        )}

        {/* MHO ROUTES */}
        {mockUser?.role === "MHO" && (
            <>
            <Route index element={<div>Health Officer Dashboard</div>} />
            <Route path="immediate-tasks" element={<div>Priority Tasks</div>} />
            <Route path="statistics" element={<div>City-wide Analytics</div>} />
            <Route path="zones" element={<div>Zone Management</div>} />
            <Route path="settings" element={<div>System Settings</div>} />
            </>
        )}
        </Route>

        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Router>
);
}

export default Navigator;