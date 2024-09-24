import React from "react";

interface ReactGoogleSpreadsheetPreviewProps {
  width: number;
  height: number;
  spreadsheetLink: string;
  spreadsheetId: string;
}

const ReactGoogleSpreadsheetPreview: React.FC<ReactGoogleSpreadsheetPreviewProps> = ({
  width,
  height,
  spreadsheetLink,
  spreadsheetId,
}) => {
  const handleRedirect = () => {
    window.open(spreadsheetLink, "_blank");
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
      onClick={handleRedirect}
    >
      <iframe
        src={`https://docs.google.com/spreadsheets/d/e/${spreadsheetId}/pubhtml?gid=0&single=true&widget=true&headers=false`}
       
        width={width * 2}
        height={height * 2}
        style={{
          transform: "scale(0.5)",
          transformOrigin: "0 0",
        }}
      ></iframe>
    </div>
  );
};

export default ReactGoogleSpreadsheetPreview;
