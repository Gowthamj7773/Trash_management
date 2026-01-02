import { toast } from "react-toastify";

function ToastNotification(message, type = "default") {
switch (type) {
    case "success":
    toast.success(message);
    break;

    case "error":
    toast.error(message);
    break;

    case "warning":
    toast.warn(message);
    break;

    case "info":
    toast.info(message);
    break;

    default:
    toast(message);
    break;
}
}

export default ToastNotification;
