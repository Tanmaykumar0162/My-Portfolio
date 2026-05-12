import type { NextPageContext } from "next";

type ErrorPageProps = {
  statusCode?: number;
};

function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#06070d",
        color: "#f8fafc",
        fontFamily: "var(--font-inter), sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ color: "#f6c76b", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Portfolio
        </p>
        <h1 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", margin: "1rem 0 0.75rem" }}>
          {statusCode ? `${statusCode}` : "Unexpected error"}
        </h1>
        <p style={{ color: "#d1d7e4", maxWidth: "36rem", lineHeight: 1.7 }}>
          The page could not be rendered. Please head back to the homepage and try again.
        </p>
      </div>
    </main>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
