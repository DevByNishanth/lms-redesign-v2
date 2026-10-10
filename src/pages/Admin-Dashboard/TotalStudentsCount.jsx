import { useState, useEffect } from "react";
import { motion } from "motion/react";

const TotalStudentsCount = () => {

    // Student details
    const studentYears = [
        {
            year: "1st Year",
            students: 800,
            percentage: 40,
            color: "#1557A0",
        },
        {
            year: "2nd Year",
            students: 500,
            percentage: 25,
            color: "#087BFF",
        },
        {
            year: "3rd Year",
            students: 400,
            percentage: 20,
            color: "#16B5F5",
        },
        {
            year: "4th Year",
            students: 300,
            percentage: 15,
            color: "#76DDF2",
        },
    ];

    // Animated student count
    const [totalStudents, setTotalStudents] = useState(0);

    useEffect(() => {
        let count = 0;

        const interval = setInterval(() => {
            count += 50;

            if (count >= 2000) {
                count = 2000;
                clearInterval(interval);
            }

            setTotalStudents(count);
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-container w-full col-span-4">

            {/* Main Card */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                    rotateX: 12,
                    scale: 0.92,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                whileHover={{
                    y: -5,
                    boxShadow: "0px 15px 30px rgba(79, 70, 229, 0.12)",
                }}
                className="bg-white rounded-xl h-[286px] p-4 shadow-sm border border-gray-100"
                style={{ transformPerspective: 1000 }}
            >

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center justify-between mb-4"
                >
                    <h2 className="text-sm font-semibold text-gray-800">
                        Total Students Count
                    </h2>
                </motion.div>

                {/* Student Distribution Bar */}
                <div className="flex gap-1 w-full h-6 mb-4 overflow-hidden rounded-sm">

                    {studentYears.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3 + index * 0.15,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                opacity: 0.75,
                                scaleY: 1.15,
                            }}
                            style={{
                                flexGrow: item.percentage,
                                flexBasis: 0,
                                backgroundColor: item.color,
                                transformOrigin: "left",
                            }}
                            className="rounded-sm cursor-pointer"
                        />
                    ))}

                </div>

                {/* Total Count and Academic Year */}
                <div className="flex items-center justify-between mb-3">

                    <div className="flex items-baseline gap-2">

                        <motion.h3
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.5,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="text-2xl font-medium text-gray-900"
                        >
                            {totalStudents}
                        </motion.h3>

                        <span className="text-xs text-gray-600">
                            Students
                        </span>

                    </div>

                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-[10px] text-green-700 bg-green-50 rounded-md px-2 py-1"
                    >
                        Academic year ( 2026- 2027 )
                    </motion.span>

                </div>

                {/* Year-wise Student Details */}
                <div className="flex flex-col gap-3">

                    {studentYears.map((item, index) => (

                        <motion.div
                            key={item.year}
                            initial={{
                                opacity: 0,
                                x: -25,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: 0.65 + index * 0.12,
                                type: "spring",
                                stiffness: 180,
                                damping: 18,
                            }}
                            whileHover={{
                                x: 5,
                                backgroundColor: "#F8FAFC",
                            }}
                            className="flex items-center justify-between rounded-md py-0.5 cursor-pointer"
                        >

                            {/* Color and Year */}
                            <div className="flex items-center gap-2">

                                <motion.div
                                    whileHover={{
                                        scale: 1.4,
                                        rotate: 90,
                                    }}
                                    style={{
                                        backgroundColor: item.color,
                                    }}
                                    className="w-3 h-3 rounded-[2px]"
                                />

                                <span className="text-xs text-gray-800">
                                    {item.year}
                                </span>

                            </div>

                            {/* Students and Percentage */}
                            <div className="flex items-center gap-2 text-xs">

                                <span className="text-gray-500">
                                    {item.students} Students
                                </span>

                                <span className="text-gray-300">
                                    |
                                </span>

                                <motion.span
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.8 + index * 0.12,
                                        type: "spring",
                                        stiffness: 250,
                                    }}
                                    className="text-blue-500"
                                >
                                    {item.percentage}%
                                </motion.span>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </motion.div>

        </div>
    );
};

export default TotalStudentsCount;