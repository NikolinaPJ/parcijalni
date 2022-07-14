import "./InputElement.css";
import Button from "./Button";



export function InputElement({ label, type }) {

  return (
    <label>
      <div className="label">{label}</div>
      <input className="input" type={type} />
      <Button type="submit" >GO!</Button>
    </label>
    
  );
}