import { Outlet } from "@tanstack/react-router";
import styles from "./global.layout.module.css";
import { Header } from "@/components/widgets/Header.tsx";
import { AuthProvider } from "@/components/providers/auth.provider.tsx";

export const GlobalLayout = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </AuthProvider>
    </>
  );
};
