import React, { useState } from "react";
import { 
  People, 
  Email, 
  Mobile, 
  Language, 
  Brightness, 
  Certificate, 
  LogOut, 
  RightArrow, 
  Notification,
  Star,
  Trash,
  Check,
  X
} from "../../assets/icons/icons";
import  ToastNotification  from "../../components/Notification/ToastNotification";
import ThemeStore from "../../store/ThemeStore";

const MOCK_SETTINGS_DATA = {
  user: {
    name: "Alex Thompson",
    role: "Administrator",
    email: "alex.t@saasplatform.com",
    avatar: null // avatar is null show first letter from name
  },
  sections: [
    {
      title: "App Preferences",
      items: [
        { id: "notif", label: "Notifications", icon: Notification, desc: "Manage push and email alerts" },
        { id: "lang", label: "Language", icon: Language, desc: "English (US)" },
        { id: "theme", label: "Appearance", icon: Brightness, desc: "Light Mode" },
      ]
    },
    {
      title: "Security & Legal",
      items: [
        { id: "cert", label: "Certificates", icon: Certificate, desc: "View earned badges and credentials" },
        { id: "plan", label: "Subscription", icon: Star, desc: "Professional SaaS Plan" },
      ]
    }
  ]
};

function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(MOCK_SETTINGS_DATA.user);
  const [formData, setFormData] = useState({ ...MOCK_SETTINGS_DATA.user });
  const { isDarkTheme, toggleTheme } = ThemeStore();

  function handleNavigation(label) {
    ToastNotification(`Opening ${label} settings`, "success");
  }

  function handleLogout() {
    ToastNotification("Securely logging out...", "success");
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
    if (!isEditing) setFormData({ ...user });
  }

  function handleSaveProfile() {
    setUser({ ...formData });
    setIsEditing(false);
    ToastNotification("Profile updated successfully", "success");
  }

  function handleDeleteAccount() {
    ToastNotification("Account deletion request sent", "warning");
  }

  return (
    <div className={isDarkTheme ? "dark" : ""}>
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto pb-20">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-secondaryDark">Settings</h1>
          <p className="text-sm text-secondaryDark/60">Configure your workspace and personal account preferences.</p>
        </div>

        {/* Profile Card / Functional Edit Form */}
        <div className="bg-white rounded-veryLarge border border-secondary mb-8 shadow-sm overflow-hidden ">
          {!isEditing ? (
            <div className="p-6 flex items-center gap-4 animate-in fade-in">
              <div className="relative">
                {user.avatar ? (
                  <img src={user.avatar} alt="Profile" className="w-16 h-16 rounded-full border-2 border-secondary object-cover" />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center border-2 border-primaryLight/20">
                    <span className="text-white text-2xl font-bold">{user.name[0]}</span>
                  </div>
                )}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-success border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-secondaryDark">{user.name}</h2>
                <p className="text-sm text-secondaryDark/50">{user.role}</p>
              </div>
              <button 
                onClick={() => toggleEdit()}
                className="px-4 py-2 bg-secondary text-primary text-sm font-semibold rounded-medium hover:scale-[0.99] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-secondaryDark">Update Profile</h3>
                <button onClick={() => toggleEdit()} className="text-secondaryDark/40 hover:text-error transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-primaryLight uppercase ml-1">Full Name</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full mt-1 p-3 bg-background border border-secondary rounded-large text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:scale-[1.01] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-primaryLight uppercase ml-1">Email Address</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full mt-1 p-3 bg-background border border-secondary rounded-large text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:scale-[1.01] transition-all duration-200"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => handleSaveProfile()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white text-sm font-bold rounded-large hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 shadow-md shadow-primary/10"
                >
                  <Check size={18} /> Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-6">
          {MOCK_SETTINGS_DATA.sections.map(function(section) {
            return (
              <div key={section.title} className="animate-in fade-in duration-700">
                <h3 className="text-xs font-bold text-primaryLight uppercase tracking-widest mb-3 px-1">
                  {section.title}
                </h3>
                <div className="bg-white rounded-veryLarge border border-secondary overflow-hidden shadow-sm">
                  {section.items.map(function(item, index) {
                    const IconComponent = item.icon;
                    const isThemeItem = item.id === "theme";
                    return (
                      <button
                        key={item.id}
                        onClick={() => isThemeItem ? toggleTheme() : handleNavigation(item.label)}
                        className={`w-full flex items-center gap-4 p-4 text-left transition-all duration-200 hover:bg-secondary/10 active:scale-[0.99] focus:outline-none focus:bg-secondary/20 group ${
                          index !== section.items.length - 1 ? "border-b border-secondary" : ""
                        }`}
                      >
                        <div className="p-2 bg-secondary rounded-large transition-colors group-hover:bg-primaryLight/10">
                          <IconComponent size={20} defaultColor="#145B47" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-secondaryDark">{item.label}</p>
                          <p className="text-xs text-secondaryDark/40">{isThemeItem ? (isDarkTheme ? "Dark Mode" : "Light Mode") : item.desc}</p>
                        </div>
                        {isThemeItem ? (
                          <span
                            role="switch"
                            aria-checked={isDarkTheme}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                              isDarkTheme ? "bg-primary" : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${
                                isDarkTheme ? "translate-x-5" : "translate-x-1"
                              }`}
                            />
                          </span>
                        ) : (
                          <RightArrow size={14} defaultColor="#316F5D" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Danger Zone */}
        <div className="mt-12 animate-in fade-in duration-1000">
          <h3 className="text-xs font-bold text-error uppercase tracking-widest mb-3 px-1">
            Danger Zone
          </h3>
          <div className="bg-white rounded-veryLarge border border-error/20 overflow-hidden shadow-sm">
            <button
              onClick={() => handleDeleteAccount()}
              className="w-full flex items-center gap-4 p-4 text-left transition-all duration-200 hover:bg-error/5 active:scale-[0.99] focus:outline-none group"
            >
              <div className="p-2 bg-error/10 rounded-large">
                <Trash size={20} defaultColor="#E75A4C" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-error">Delete Account</p>
                <p className="text-xs text-error/60">Permanently remove all your data and access</p>
              </div>
              <RightArrow size={14} defaultColor="#E75A4C" />
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-10">
          <button
            onClick={() => handleLogout()}
            className="w-full flex items-center justify-center gap-3 p-4 text-secondaryDark/60 font-bold rounded-veryLarge border border-secondary bg-white hover:bg-background hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/10"
          >
            <LogOut size={20} defaultColor="#316F5D" />
            <span>Sign Out</span>
          </button>
          <p className="text-center text-[10px] text-secondaryDark/30 mt-6 uppercase tracking-widest">
            SaaS Platform v4.1.0 • Built for Scale
          </p>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Settings;