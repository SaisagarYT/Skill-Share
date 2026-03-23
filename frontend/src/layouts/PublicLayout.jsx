import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple navbar or header can go here */}
      <Outlet />
    </div>
  );
}
