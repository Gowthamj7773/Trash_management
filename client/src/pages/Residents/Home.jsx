import { 
    Notification, 
    Camera, 
    QR, 
    Certificate, 
    Star,
    Add,
    RightArrow
} from "../../assets/icons/icons";
import MyReports from "../../components/Cards/Residents/MyReports";
import Pagination from "../../utils/Pagination";

// Mock Data declared at component top level
const mockReports = [
    { id: 1, title: "Overflowing public bin", time: "Today - 7:32 AM", location: "3rd Street Park", status: "Pending", image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=200" },
    { id: 2, title: "Plastic near riverbank", time: "Yesterday", location: "Riverside Lane", status: "Critical", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=200" },
    { id: 3, title: "Alleyway cleaned", time: "Mon", location: "Old Town Alley", status: "Resolved", image: "https://images.unsplash.com/photo-1516992654410-9309d4587e94?w=200" },
    { id: 4, title: "Broken Streetlight", time: "2 days ago", location: "North Ave", status: "Pending", image: "https://images.unsplash.com/photo-1517495306684-24558509c314?w=200" },
    { id: 5, title: "Industrial Leakage", time: "Wed", location: "Dockyard", status: "Critical", image: "https://images.unsplash.com/photo-1605600611221-1ae2e1ffb171?w=200" },
    { id: 6, title: "Drainage Blockage", time: "Thu", location: "Market St", status: "Pending", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200" },
    { id: 7, title: "Park Maintenance", time: "Fri", location: "East Park", status: "Resolved", image: "https://images.unsplash.com/photo-1516992654410-9309d4587e94?w=200" }
];

function Home() {
return (
    <div className="min-h-screen bg-background animate-in fade-in duration-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN: Main Feed */}
        <div className="lg:col-span-2 space-y-5">
            
            {/* Header Card */}
            <header className="bg-primary p-5 rounded-xl flex items-center justify-between text-white shadow-sm transition-transform active:scale-[0.99]">
            <div>
                <h1 className="text-lg md:text-xl font-bold tracking-tight">Good morning, Alex</h1>
                <p className="text-xs opacity-80 mt-1 font-medium">Your vigilance keeps the neighborhood clean and healthy.</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-white/10 px-3 py-2 rounded-lg flex items-center gap-2 border border-white/20">
                <Star size={18} isPressed={true} isDarkTheme={true} OnpressColor="#F2C94C" />
                <span className="text-xs font-bold">420 Points</span>
                </div>
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                <Notification size={20} isPressed={false} isDarkTheme={true} DarkThemeColor="white" />
                </button>
            </div>
            </header>

            {/* Map View Section */}
            <div className="w-full h-64 rounded-xl border border-secondary overflow-hidden shadow-sm relative group">
            <img 
                src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.43,37.77,13,0/800x400?access_token=mock" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="map"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded border border-secondary text-[9px] font-bold text-primary uppercase tracking-tight">
                San Francisco District
            </div>
            </div>

            {/* Reports Section */}
            <section className="bg-white border border-secondary rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-4">Recent Reports</h2>
            
            {/* Pagination Component - One Line Usage */}
            <Pagination 
                data={mockReports}
                itemsPerPage={5}
                renderItem={(report) => <MyReports key={report.id} report={report} />}
            />
            </section>
        </div>

        {/* RIGHT COLUMN: Sticky Sidebar Actions */}
        <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-6 space-y-5">
            
            {/* Quick Actions Card */}
            <div className="bg-white border border-secondary rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 bg-primary rounded-full" />
                <h2 className="text-xs font-bold text-black uppercase tracking-widest">Quick actions</h2>
                </div>
                
                <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3.5 bg-white border border-secondary rounded-lg hover:border-primaryLight transition-all active:scale-[0.98] group">
                    <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg shadow-sm group-hover:bg-primaryLight transition-colors">
                        <Camera size={18} isPressed={false} isDarkTheme={true} DarkThemeColor="white" />
                    </div>
                    <div className="text-left">
                        <p className="text-xs font-bold text-black tracking-tight">Report trash</p>
                        <p className="text-[10px] text-gray-500 font-medium">Snap and pin concern</p>
                    </div>
                    </div>
                    <RightArrow size={14} isPressed={false} isDarkTheme={false} />
                </button>

                <button className="w-full flex items-center justify-between p-3.5 bg-white border border-secondary rounded-lg hover:border-primaryLight transition-all active:scale-[0.98] group">
                    <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg shadow-sm group-hover:bg-primaryLight transition-colors">
                        <QR size={18} isPressed={false} isDarkTheme={true} DarkThemeColor="white" />
                    </div>
                    <div className="text-left">
                        <p className="text-xs font-bold text-black tracking-tight">Scan QR Code</p>
                        <p className="text-[10px] text-gray-500 font-medium">Verify collection</p>
                    </div>
                    </div>
                    <RightArrow size={14} isPressed={false} isDarkTheme={false} />
                </button>

                <button className="w-full flex items-center justify-between p-3.5 bg-white border border-secondary rounded-lg hover:border-primaryLight transition-all active:scale-[0.98] group">
                    <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg shadow-sm group-hover:bg-primaryLight transition-colors">
                        <Certificate size={18} isPressed={false} isDarkTheme={true} DarkThemeColor="white" />
                    </div>
                    <div className="text-left">
                        <p className="text-xs font-bold text-black tracking-tight">Eco Quiz</p>
                        <p className="text-[10px] text-gray-500 font-medium">Earn daily points</p>
                    </div>
                    </div>
                    <RightArrow size={14} isPressed={false} isDarkTheme={false} />
                </button>
                </div>
            </div>

            {/* Daily Eco Tip Card */}
            <div className="bg-white border border-secondary border-l-4 border-l-primary rounded-xl p-5 shadow-sm group hover:bg-secondary/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-primary/10 rounded-lg text-primary transition-transform group-hover:rotate-12">
                    <Add size={18} isPressed={false} isDarkTheme={false} />
                </div>
                <h3 className="text-xs font-bold text-black uppercase tracking-tight">Daily eco tip</h3>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-700 font-medium italic">
                "Carry a reusable bottle today and avoid using at least 3 plastic bottles."
                </p>
            </div>

            {/* Support Action */}
            <button className="w-full py-3.5 bg-secondary border border-primary/10 rounded-xl text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 active:scale-95 shadow-sm">
                Need Help? Contact Support
            </button>
            </div>
        </div>

        </div>
    </div>
    );
}

export default Home;