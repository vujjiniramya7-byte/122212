// Runtime config — replaced by entrypoint.sh at container start
// Do NOT hardcode the backend URL here; it is injected at runtime via BACKEND_URL env var.
window.__NNRG_CONFIG__ = {
  backendUrl: "https://nnrg-backend.onrender.com"
};
