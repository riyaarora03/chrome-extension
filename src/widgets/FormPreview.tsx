import React from "react";

interface ReactGoogleFormPreviewProps {
  width: number;
  height: number;
  formLink: string;
}

const ReactGoogleFormPreview: React.FC<ReactGoogleFormPreviewProps> = ({
  width,
  height,
  formLink,

}) => {
  const handleRedirect = () => {
    window.open(formLink, "_blank");
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
      onClick={handleRedirect}
    >
      <iframe
        src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebolute.com%2Fblog%2Fbusiness-promotion%2Fhow-to-create-feedback-form-on-google-forms%2F&psig=AOvVaw3tOPpP1y5CzejJTuLjUAU1&ust=1721977342650000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiht8_PwYcDFQAAAAAdAAAAABAK`}
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

export default ReactGoogleFormPreview;
