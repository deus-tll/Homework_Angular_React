import { Outlet } from "react-router-dom";
import { MainNavigation } from "./MainNavigation";

export const RootLayout = () => {
  const appName = 'Worldwide Library';
  return(
    <div className="container mt-4">
      <header className="mb-4">
        <h1 className="text-center">{appName}</h1>
        <MainNavigation />
      </header>

      <main style={{ minHeight: 'calc(100vh - 230px)' }}>
        <Outlet />
      </main>

      <footer className=" mt-4">
        <p>&copy; {new Date().getFullYear()} {appName}</p>
      </footer>
    </div>
  );
}