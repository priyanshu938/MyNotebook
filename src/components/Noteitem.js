import React from "react";

const Noteitem = ({ note }) => {
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash-alt mx-2"></i>
            <i className="far fa-edit mx-2"></i>
          </div>
          <p className="card-text">
            {note.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. A eveniet molestiae optio voluptatum officia!
            Dolor voluptate molestias beatae, pariatur consequuntur fugiat!
            Expedita, voluptatum, eaque soluta repellendus ducimus accusantium
            reiciendis voluptatem, similique totam doloremque vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
