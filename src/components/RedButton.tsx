import Link from "next/link";
interface RedButtonProps {
  title?: string;
  link?: string;
  onClick?: () => void;
}
const RedButton: React.FC<RedButtonProps> = ({ title,link,onClick}) => {
  return (
    <div className="">
      <button className="redBtn" onClick={onClick}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <Link href={link || "#"} className="front">
          {title}
        </Link>
      </button>
    </div>
  );
};
export default RedButton;
