import "tailwindcss/tailwind.css";
import "@styles/globals.css";
import NavBar from "@components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen text-white">
      <NavBar />
      <div style={{ height: "90vh" }}>
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
