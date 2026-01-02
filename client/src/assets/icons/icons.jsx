import { BiHomeAlt } from "react-icons/bi";
import { LuMap } from "react-icons/lu";
import { BiPlusCircle } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { RiChat1Line } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";

// login/signUp
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

import { MdOutlineCameraAlt } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FiCrosshair } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { MdOutlinePeople } from "react-icons/md";
import { ImEarth } from "react-icons/im"; // near language swithing
import { MdBrightnessMedium } from "react-icons/md"; // dark/light
import { GrCertificate } from "react-icons/gr"; //certificate
import { IoSearch } from "react-icons/io5";

// arrows
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


// trashman
import { FaStar } from "react-icons/fa"; //ratings
import { MdQrCodeScanner } from "react-icons/md"; //QR

const size = 25;
const defaultColor = "black";
const DarkThemeColor = "#fff";
const OnpressColor = "#1E8E54";

// reusable function
function Icons(props) {
    var IconComponent = props.Icon;
    var color = props.isPressed
        ? props.OnpressColor || OnpressColor
        : props.isDarkTheme
        ? props.DarkThemeColor || DarkThemeColor
        : props.defaultColor || defaultColor;
    
    return <IconComponent size={size} color={color} />;
}

export function Home({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={BiHomeAlt} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Map({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={LuMap} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Add({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={BiPlusCircle} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Settings({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={LuSettings} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function FeedBack({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={RiChat1Line} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Task({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FaTasks} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Stats({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={ImStatsBars} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Notification({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={IoMdNotificationsOutline} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function LogOut({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FiLogOut} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Mobile({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={AiOutlineMobile} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Email({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={MdOutlineEmail} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Camera({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={MdOutlineCameraAlt} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function People({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={MdOutlinePeople} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Language({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={ImEarth} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Brightness({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={MdBrightnessMedium} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Certificate({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={GrCertificate} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Search({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={IoSearch} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Location({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FiCrosshair} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Trash({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FiTrash2} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Check({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FaCheck} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function Star({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FaStar} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function QR({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={MdQrCodeScanner} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

// arrows
export function ChevronRight({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FaChevronRight} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function ChevronLeft({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FaChevronLeft} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function ChevronUp({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FaChevronUp} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}

export function ChevronDown({ isPressed = false, isDarkTheme = false, defaultColor = "black", DarkThemeColor = "#fff", OnpressColor = "#1E8E54" }) {
    return <Icons Icon={FaChevronDown} isPressed={isPressed} isDarkTheme={isDarkTheme} defaultColor={defaultColor} DarkThemeColor={DarkThemeColor} OnpressColor={OnpressColor} />;
}