import { useState } from "react";
import { motion } from "motion/react";
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { Building2, FileDown } from "lucide-react";

const AdminVendorBreakdown = () => {

    // Selected filter
    const [selectedYear, setSelectedYear] = useState("3rd Year");

    // Chart data for each filter
    const vendorData = {
        Overall: [
            { name: "IT", value: 45 },
            { name: "CSE", value: 70 },
            { name: "EEE", value: 35 },
            { name: "ECE", value: 80 },
            { name: "AI/ML", value: 65 },
            { name: "CSBS", value: 35 },
            { name: "MECH", value: 45 },
            { name: "Aug", value: 65 },
            { name: "Sep", value: 90 },
            { name: "Oct", value: 70 },
            { name: "Nov", value: 40 },
            { name: "Dec", value: 20 },
        ],

        "1st Year": [
            { name: "IT", value: 30 },
            { name: "CSE", value: 55 },
            { name: "EEE", value: 25 },
            { name: "ECE", value: 65 },
            { name: "AI/ML", value: 50 },
            { name: "CSBS", value: 30 },
            { name: "MECH", value: 40 },
            { name: "Aug", value: 55 },
            { name: "Sep", value: 75 },
            { name: "Oct", value: 60 },
            { name: "Nov", value: 35 },
            { name: "Dec", value: 15 },
        ],

        "2nd Year": [
            { name: "IT", value: 40 },
            { name: "CSE", value: 65 },
            { name: "EEE", value: 30 },
            { name: "ECE", value: 75 },
            { name: "AI/ML", value: 60 },
            { name: "CSBS", value: 25 },
            { name: "MECH", value: 40 },
            { name: "Aug", value: 60 },
            { name: "Sep", value: 80 },
            { name: "Oct", value: 65 },
            { name: "Nov", value: 35 },
            { name: "Dec", value: 20 },
        ],

        "3rd Year": [
            { name: "IT", value: 40 },
            { name: "CSE", value: 60 },
            { name: "EEE", value: 30 },
            { name: "ECE", value: 70 },
            { name: "AI/ML", value: 60 },
            { name: "CSBS", value: 30 },
            { name: "MECH", value: 42 },
            { name: "Aug", value: 58 },
            { name: "Sep", value: 75 },
            { name: "Oct", value: 60 },
            { name: "Nov", value: 35 },
            { name: "Dec", value: 18 },
        ],
    };

    // Filter button labels
    const yearFilters = [
        "Overall",
        "1st Year",
        "2nd Year",
        "3rd Year",
    ];

    return (
        <div className="w-full col-span-8">

            <div className="bg-white h-[286px] border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                {/* Animated Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-100"
                >
                    {/* Icon and Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                        }}
                        className="flex items-center gap-2"
                    >
                        {/* Animated Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                delay: 0.3,
                                type: "spring",
                                stiffness: 200,
                                damping: 12,
                            }}
                            whileHover={{
                                scale: 1.15,
                                rotate: 10,
                                boxShadow: "0px 0px 18px rgba(99, 102, 241, 0.3)",
                            }}
                            className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center"
                        >
                            <Building2 size={18} className="text-indigo-500" />
                        </motion.div>

                        {/* Title and Description */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.5,
                                }}
                                className="text-sm font-semibold text-slate-800"
                            >
                                Vendor Breakdown
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.55,
                                    duration: 0.5,
                                }}
                                className="text-[10px] text-slate-500 mt-0.5"
                            >
                                Here you can track your vendor’s performance everyday.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Animated Report Button */}
                    <motion.button
                        initial={{ opacity: 0, x: 25, scale: 0.85 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 180,
                            damping: 15,
                        }}
                        whileHover={{
                            scale: 1.06,
                            y: -2,
                            boxShadow: "0px 5px 15px rgba(99, 102, 241, 0.15)",
                        }}
                        whileTap={{
                            scale: 0.94,
                        }}
                        className="flex items-center gap-2 border border-slate-200 rounded-full px-3 py-1.5 text-[10px] font-medium text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 transition-colors whitespace-nowrap"
                    >
                        View Full Report

                        <motion.span
                            whileHover={{ y: -2, rotate: -8 }}
                            className="flex items-center"
                        >
                            <FileDown size={13} />
                        </motion.span>
                    </motion.button>
                </motion.div>

                {/* Animated Year Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="flex justify-center pt-3"
                >
                    <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-full">

                        {yearFilters.map((year, index) => {

                            const isSelected = selectedYear === year;

                            return (
                                <motion.button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    initial={{ opacity: 0, scale: 0.7, y: 8 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        delay: 0.4 + index * 0.08,
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 18,
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: 0.92,
                                    }}
                                    className={`relative px-2.5 py-1.5 rounded-full text-[10px] transition-colors duration-200 ${isSelected
                                        ? "text-slate-800 font-semibold"
                                        : "text-slate-600 hover:text-slate-800"
                                        }`}
                                >

                                    {/* Sliding Active Background */}
                                    {isSelected && (
                                        <motion.span
                                            layoutId="yearFilterBackground"
                                            className="absolute inset-0 bg-white rounded-full shadow-sm"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 28,
                                            }}
                                        />
                                    )}

                                    {/* Button Label */}
                                    <motion.span
                                        className="relative z-10 block"
                                        animate={{
                                            scale: isSelected ? 1 : 0.98,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        {year}
                                    </motion.span>

                                </motion.button>
                            );
                        })}

                    </div>
                </motion.div>

                {/* Bar Chart */}
                <div className="w-full h-[175px] px-3 pt-5 pb-2">

                    <ResponsiveContainer width="100%" height="100%">

                        <BarChart
                            data={vendorData[selectedYear]}
                            margin={{
                                top: 5,
                                right: 2,
                                left: 2,
                                bottom: 0,
                            }}
                            barCategoryGap="65%"
                        >

                            {/* Horizontal grid lines */}
                            <CartesianGrid
                                vertical={false}
                                stroke="#DCE3ED"
                                strokeWidth={1}
                            />

                            {/* Bottom labels */}
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: "#475569",
                                    fontSize: 10,
                                }}
                                tickMargin={8}
                                interval={0}
                            />

                            {/* Hover information */}
                            <Tooltip
                                cursor={{ fill: "#F8FAFC" }}
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "1px solid #E2E8F0",
                                    fontSize: "12px",
                                }}
                                labelStyle={{
                                    color: "#334155",
                                    fontWeight: 600,
                                }}
                            />

                            {/* Purple bars */}
                            <Bar
                                dataKey="value"
                                fill="#6366F1"
                                radius={[10, 10, 0, 0]}
                                maxBarSize={22}
                                isAnimationActive={true}
                                animationDuration={500}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
};

export default AdminVendorBreakdown;