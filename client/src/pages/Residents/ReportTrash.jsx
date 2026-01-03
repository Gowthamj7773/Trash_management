import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
Camera, 
Trash, 
Location, 
RightArrow, 
DownArrow, 
Add,
Check
} from "../../assets/icons/icons";
import ToastNotification from "../../components/Notification/ToastNotification";
import { ToastContainer } from "react-toastify";
import ReportSubmittedModal from "../../components/Modals/Residents/ReportSubmittedModal";

// Mock data at component top level
const trashTypes = [
'GARBAGE_PILE',
'OVERFLOWING_BIN',
'UNCOLLECTED_WASTE',
'CONSTRUCTION_DEBRIS',
'PLASTIC_WASTE',
'DEAD_ANIMAL',
'SEWAGE_WASTE',
'BURNING_WASTE',
'ILLEGAL_DUMPING',
'WATER_BODY_DUMPING',
'ROADSIDE_LITTER',
'MARKET_WASTE',
'PUBLIC_PLACE_ISSUE',
'COMMERCIAL_VIOLATION',
'OTHERS'
];

function ReportTrash() {
const navigate = useNavigate();
const fileInputRef = useRef(null);

const [selectedImage, setSelectedImage] = useState(null);
const [locationText, setLocationText] = useState("");
const [selectedType, setSelectedType] = useState("");
const [details, setDetails] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [showModal, setShowModal] = useState(false);

function handleFileUpload(e) {
const file = e.target.files[0];
if (file) {
    setSelectedImage(URL.createObjectURL(file));
    ToastNotification("Image uploaded successfully", "success");
}
}

function handleCapture() {
// Mocking camera capture trigger
ToastNotification("Opening system camera...", "info");
if (fileInputRef.current) {
    fileInputRef.current.click();
}
}

function handleDetectLocation() {
ToastNotification("Detecting GPS coordinates...", "info");
setTimeout(function() {
    setLocationText("24, Main Street, San Francisco, CA");
    ToastNotification("Location detected", "success");
}, 1500);
}

function handleSubmit() {
if (!selectedImage) {
    ToastNotification("Please provide a photo as evidence", "error");
    return;
}
if (!selectedType) {
    ToastNotification("Please select a trash type", "error");
    return;
}
if(!locationText){
    ToastNotification("Please set your location", "error");
    return;
}

setIsSubmitting(true);
// Mock API call
setTimeout(function() {
    setIsSubmitting(false);
    setShowModal(true);
}, 1000);
}

return (
<div className="min-h-screen bg-background p-4 md:p-6 animate-in fade-in duration-500">
    <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT SECTION: Image Evidence (Reduced Primary) */}
        <div className="lg:col-span-7 bg-white border border-secondary rounded-xl p-5 shadow-sm space-y-5">
        <div className="border-b border-secondary pb-4">
            <h1 className="text-lg font-bold text-primary">Upload evidence</h1>
            <p className="text-xs text-gray-500 mt-1">A clear photo helps city teams respond faster.</p>
        </div>

        <div className="relative group border-2 border-dashed border-secondaryLight rounded-xl h-80 flex flex-col items-center justify-center bg-background/50 hover:bg-secondary/20 transition-all overflow-hidden">
            {selectedImage ? (
            <img src={selectedImage} alt="Evidence" className="w-full h-full object-cover" />
            ) : (
            <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondaryDark shadow-sm">
                <Camera isPressed={false} isDarkTheme={false} />
                </div>
                <div>
                <p className="text-sm font-bold text-primary">Drag & drop image here</p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">or</p>
                </div>
            </div>
            )}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
            <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileUpload} 
            />
            <button 
            onClick={function() { fileInputRef.current.click(); }}
            className="bg-primaryLight text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm shadow-primaryLight/20"
            >
            <Add size={16} isPressed={false} isDarkTheme={true} />
            Upload image
            </button>
            <button 
            onClick={handleCapture}
            className="bg-primary text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm shadow-primary/20"
            >
            <Camera size={16} isPressed={false} isDarkTheme={true} />
            Capture photo
            </button>
        </div>
        </div>

        {/* RIGHT SECTION: Form Details */}
        <div className="lg:col-span-5 space-y-5">
        
        {/* Location Section */}
        <div className="bg-white border border-secondary rounded-xl p-5 shadow-sm space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</label>
            
            <button 
            onClick={handleDetectLocation}
            className="w-full flex items-center justify-between p-3 bg-background border border-secondary rounded-lg hover:border-primaryLight transition-all group"
            >
            <div className="flex items-center gap-3">
                <Location size={18} isPressed={false} isDarkTheme={false} />
                <span className="text-sm font-medium text-primary">Auto-detect my location</span>
            </div>
            <RightArrow size={14} isPressed={false} isDarkTheme={false} />
            </button>

            <div className="relative">
            <input 
                type="text" 
                value={locationText}
                onChange={function(e) { setLocationText(e.target.value); }}
                placeholder="Or search / enter address..."
                className="w-full p-3 bg-background border border-secondary rounded-lg text-sm focus:border-primaryLight focus:outline-none transition-colors"
            />
            </div>
        </div>

        {/* Trash Type Section */}
        <div className="bg-white border border-secondary rounded-xl p-5 shadow-sm space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trash type</label>
            <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Trash size={18} isPressed={false} isDarkTheme={false} />
            </div>
            <select 
                value={selectedType}
                onChange={function(e) { setSelectedType(e.target.value); }}
                className="w-full p-3 pl-11 bg-background border border-secondary rounded-lg text-sm appearance-none focus:border-primaryLight focus:outline-none transition-colors cursor-pointer"
            >
                <option value="">Select type</option>
                {trashTypes.map(function(type) {
                return (
                    <option key={type} value={type}>
                    {type.toLowerCase().replace(/_/g, ' ')}
                    </option>
                );
                })}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <DownArrow size={14} isPressed={false} isDarkTheme={false} />
            </div>
            </div>
        </div>

        {/* Details Section */}
        <div className="bg-white border border-secondary rounded-xl p-5 shadow-sm space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Details</label>
            <textarea 
            rows="4"
            value={details}
            onChange={function(e) { setDetails(e.target.value); }}
            placeholder="Describe what you see, approximate size, and any safety concerns..."
            className="w-full p-3 bg-background border border-secondary rounded-lg text-sm focus:border-primaryLight focus:outline-none transition-colors resize-none"
            ></textarea>
        </div>

        <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-primaryLight text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-primaryLight/20 hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-50"
        >
            {isSubmitting ? "Processing..." : "Submit report"}
        </button>
        </div>

    </div>
    </div>

    {showModal && <ReportSubmittedModal onClose={function() { setShowModal(false); }} />}
    <ToastContainer/>
</div>
);
}

export default ReportTrash;