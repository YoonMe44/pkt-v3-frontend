import Link from "next/link";
interface RedButtonProps {
  title?: string;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
}
const RedButton: React.FC<RedButtonProps> = ({ title,link,onClick,disabled}) => {
  return (
    <div className="">
      <button className="redBtn relative" disabled={disabled} onClick={onClick}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <Link href={link || "#"} className="front">
          {disabled ? "Uploading..." : title}
        </Link>
       
      </button>
    </div>
  );
};
export default RedButton;
