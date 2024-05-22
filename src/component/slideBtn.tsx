import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
interface SlideBtnProps {
  isLeft: boolean;
  onClick: () => void;
}
function SlideBtn({ isLeft, onClick }: SlideBtnProps) {
  return (
    <div
      className="w-10 h-10 rounded-full bg-white border-gray-300 border shadow-sm flex justify-center items-center"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={isLeft ? faChevronLeft : faChevronRight}
      ></FontAwesomeIcon>
    </div>
  );
}

export default SlideBtn;
