import { useNavigate } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  const navigate = useNavigate();

  usePageMeta({
    title: "404 – Page Not Found | Kevotalia Technology",
    description: "The page you are looking for does not exist.",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        background: "var(--bg)",
      }}
    >
      <h1 style={{ fontSize: "96px", color: "var(--highlight-1)" }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ maxWidth: "420px", marginTop: "10px" }}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <button
        className="btn-primary"
        style={{ marginTop: "30px" }}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </button>
    </div>
  );
}
