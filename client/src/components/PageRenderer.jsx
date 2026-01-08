import { useState } from "react";

export default function PageRenderer({ link }) {
  const [url, setUrl] = useState(link);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Load a Web Page</h2>
      {console.log(link, url)}
      {}
      {url && (
        <div style={{ marginTop: "20px" }}>
          <h3>Page Preview:</h3>
          <iframe
            src={link}
            style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
            title="Page Preview"
          />
        </div>
      )}
    </div>
  );
}
