import PlussSvg from "../assets/plus.svg";
import "./AddCard.css";

export default function AddCard({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="AddCard" onClick={onAdd}>
      <img src={PlussSvg} alt="add" />
    </div>
  );
}
