import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ClassCard.css";


function ClassCard({ name, creatorName, creatorPhoto, id, style }) {
//   const history = useHistory();
//   const goToClass = () => {
//     history.push(`/class/${id}`);
//   };
  return (
    <div className="classCard" style={style}>
      <div className="classCard__upper">
        <div className="classCard__className">{name}</div>
        <div className="classCard__creatorName">{creatorName}</div>
      </div>
      <div className="classCard__middle"></div>
      <div className="classCard__lower">
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton>
      </div>
    </div>
  );
}
export default ClassCard;