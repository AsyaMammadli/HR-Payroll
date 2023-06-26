import { Outlet } from "react-router";

const NonProtectedLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default NonProtectedLayout;
