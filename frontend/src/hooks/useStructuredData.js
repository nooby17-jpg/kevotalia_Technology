import { useEffect } from "react";

export default function useStructuredData(schema) {
  useEffect(() => {
    const scriptId = "structured-data";

    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema, null, 2);

    return () => {
      if (script) script.remove();
    };
  }, [schema]);
}
