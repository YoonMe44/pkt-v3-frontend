import Link from "next/link";
interface RedButtonProps {
  title?: string;
}
const RedButton: React.FC<RedButtonProps> = ({ title }) => {
  return (
    <div className="flex justify-center">
      <button className="redBtn">
        <span className="shadow"></span>
        <span className="edge"></span>
        <Link href="/courses/1" className="front">
          {title}
        </Link>
      </button>
    </div>
  );
};
export default RedButton;
