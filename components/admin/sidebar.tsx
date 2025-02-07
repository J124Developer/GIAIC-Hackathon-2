import { FaCar, FaChartBar, FaInbox, FaCalendar, FaCog, FaMoon, FaHome, FaQuestionCircle, FaSignOutAlt, FaRegSun } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4">
      
      {/* Main Menu */}
      <nav>
        <p className="text-gray-500 uppercase text-sm font-semibold mb-2">Main Menu</p>
        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-lg bg-blue-100 text-blue-600">
            <FaHome className="mr-2" aria-label="Dashboard" /> Dashboard
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaCar className="mr-2" aria-label="Car Rent" /> Car Rent
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaChartBar className="mr-2" aria-label="Insight" /> Insight
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaInbox className="mr-2" aria-label="Reimburse" /> Reimburse
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaInbox className="mr-2" aria-label="Inbox" /> Inbox
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaCalendar className="mr-2" aria-label="Calendar" /> Calendar
          </li>
        </ul>
      </nav>

      {/* Preferences */}
      <div className="mt-6">
        <p className="text-gray-500 uppercase text-sm font-semibold mb-2">Preferences</p>
        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaCog className="mr-2" aria-label="Settings" /> Settings
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaQuestionCircle className="mr-2" aria-label="Help Centre" /> Help Centre
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex justify-between">
            <div className="flex items-center">
              <FaMoon className="mr-2" aria-label="Dark Mode" /> Dark Mode
            </div>
            <div className="flex gap-3 bg-gray-200 rounded-xl p-1">
              <FaRegSun className="hover:bg-blue-900 hover:text-white rounded-lg" />
              <FaMoon className="hover:bg-blue-900 hover:text-white rounded-lg" />
            </div>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
            <FaSignOutAlt className="mr-2" aria-label="Log Out" /> Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;