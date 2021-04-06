import React from "react";
import Button from "parts/Button";
import { Link } from "react-router-dom";
import plus from "assets/blackPlus.svg";

function AddButton({ to }: { to: string }) {
  return (
    <div style={{ padding: "15px", paddingTop: 0 }}>
      <Link to={to}>
        <Button icon={plus}>Добавить</Button>
      </Link>
    </div>
  );
}
export default AddButton;
