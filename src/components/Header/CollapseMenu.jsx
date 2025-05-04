import { useState } from "react";
import { Gear , Heart , UserPlus } from "phosphor-react";
const CollapseMenu = () =>{
    const [open, setOpen] = useState(false);
  
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen(!open)}
          className="w-7 h-7 rounded-full bg-white text-orange-400 cursor-pointer flex items-center justify-center"
        >
          {/* Avatar (giả lập bằng chữ cái) */}
          <span>M  </span>
        </button>
  
        {open && (
          <div className="absolute right-0 mt-2 w-56 bg-orange-500 text-stone-100 shadow-lg z-50">
            <ul className="py-2 text-sm">
              <MenuItem icon={<Gear size={20} />} label="Profile" />
              <MenuItem icon={<Heart size={20} />}  label="Likes" />
              {/* <MenuItem  label="Stations" /> */}
              <MenuItem  icon={<UserPlus size={20} />} label="Following" />
              {/* <MenuItem  label="Who to follow" />
              <MenuItem  label="Try Artist Pro" />
              <MenuItem  label="Tracks" />
              <MenuItem  label="Distribute" /> */}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  function MenuItem({ icon, label }) {
    return (
      <li className="flex items-center px-4 py-2 hover:bg-orange-100 hover:text-orange-400 cursor-pointer space-x-2">
        {icon}
        <span>{label}</span>
      </li>
    );
  }

export default CollapseMenu;