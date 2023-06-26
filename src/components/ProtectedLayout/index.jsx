import { Outlet } from "react-router";

const ProtectedLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default ProtectedLayout;
