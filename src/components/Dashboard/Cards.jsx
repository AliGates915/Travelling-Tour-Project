import PropTypes from 'prop-types';
import { FaArrowCircleRight } from "react-icons/fa";


const UserCard = ({ type, num, color, Img }) => {
    return (
        <div className={`rounded-[4px] ${color} flex-1 min-w-[130px] h-[110px]`}>
        <div className="p-2">
            <div className="flex justify-between items-center">
                <div >
                    <span className="text-xl font-semibold my-2 text-white">{num}</span><br />
                    <span className="text-[14px] font-medium text-white">{type}s</span>
                </div>
                <span className=''> {Img}  {/* Render the Img prop directly */}
                </span>
            </div>
        </div>
        <div className=" mt-1 flex justify-center items-center bg-opacity-10 bg-black p-2 gap-1 cursor-pointer hover:bg-opacity-50 transition">
                <span className="text-white font-normal">More info</span>
                <FaArrowCircleRight className="text-white" />
            </div>
        </div>
    );
};

UserCard.propTypes = {
    type: PropTypes.string.isRequired,
    num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.string.isRequired,
    Img: PropTypes.element.isRequired,  // Make sure the Img is a React element
};

export default UserCard;
