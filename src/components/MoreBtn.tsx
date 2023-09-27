
const MoreBtn = () => {
    return (
      <div className="w-[100px] mx-auto mt-4">
        <a href="/news/1" className="cta">
          <span>More</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    );
}
export default MoreBtn;