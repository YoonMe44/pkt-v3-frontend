import Link from "next/link";
interface RedButtonProps {
  title?: string;
  link?: string;
  disabled?: boolean;
  uploadProgress?: number;
  onClick?: (e:any) => void;
}
const RedButton: React.FC<RedButtonProps> = ({ title, link, onClick, disabled, uploadProgress = 0 }) => {
  return (
    <div className="">
      <button className="redBtn relative" disabled={disabled} onClick={onClick}>
        <span className="shadow"></span>
        <span className="edge"></span>
        {uploadProgress === 100 ? <Link href={link || "#"} className="front">Processing...</Link> : <Link href={link || "#"} className="front">
          {disabled ? "Uploading " : title}  {uploadProgress > 0 && <span>{uploadProgress}%</span>}
        </Link>}

      </button>
    </div>
  );
};
export default RedButton;
