import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Grid2X2,
  Settings,
} from "lucide-react";

function Navbar() {
  const [selectedItem, setSelectedItem] = useState("Student Management");

  // Navbar items
  const navLinks = [
    {
      label: "Student Management",
      icon: LayoutDashboard,
      link: "/dashboard",
    },
    {
      label: "Documents",
      icon: FileText,
      link: "/documents",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      link: "/messages",
    },
    {
      label: "Apps",
      icon: Grid2X2,
      link: "/apps",
    },
    {
      label: "Settings",
      icon: Settings,
      link: "/settings",
    },
  ];

  return (
    <div className="main-container">

      <motion.header
        initial={{ opacity: 0, y: -25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="navbar mt-3 rounded-lg flex items-center justify-between px-4 border border-gray-50 bg-white m-auto w-[97%] py-2"
      >

        <div className="logo-container">
          <h1>Logo</h1>
        </div>

        <div className="links-container flex items-center gap-2">

          {navLinks.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedItem === item.label;

            return (
              <motion.button
                key={item.label}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                }}
                onClick={() => setSelectedItem(item.label)}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                className={`relative flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm overflow-hidden ${isSelected
                  ? "text-white"
                  : "bg-white text-gray-600"
                  }`}
              >

                {/* Animated purple background */}
                {isSelected && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-[#4F46E5]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                    }}
                  />
                )}

                {/* Animated icon */}
                <motion.span
                  className="relative z-10 flex items-center justify-center"
                  animate={{
                    scale: isSelected ? 1.1 : 1,
                    rotate: isSelected ? 5 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 12,
                  }}
                >
                  <Icon size={18} />
                </motion.span>

                {/* Animated selected label */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        width: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        width: "auto",
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        width: 0,
                        x: -8,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                      className="relative z-10 whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

              </motion.button>
            );
          })}

        </div>

        <div className="icons-container">
        </div>

      </motion.header>

    </div>
  );
}

export default Navbar;