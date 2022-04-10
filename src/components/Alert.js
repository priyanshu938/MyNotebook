import React from "react";

export const Alert = ({ message }) => {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        {message}
      </div>
    </div>
  );
};
