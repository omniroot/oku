import { Outlet } from "@tanstack/react-router";

export const GlobalLayout = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
