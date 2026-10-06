import { useState } from "react";
import SectionHeader from './SectionHeader'
import { motion, AnimatePresence } from "framer-motion";

const blogs = [
    {
        title: "React Native Old Architecture vs New Architecture ",
        link: "https://vishal-sanwal.hashnode.dev/react-native-old-architecture-vs-new-architecture",
    },
    {
        title: "Why FlatList Shows Blank Rows on a Fast Scroll, and What to Use Instead",
        link: "https://vishal-sanwal.hashnode.dev/why-flatlist-shows-blank-rows-on-a-fast-scroll-and-what-to-use-instead",
    },
];

export default function Blogs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div id="blogs" className="appContent pb-20">
            <SectionHeader
                title="BLOGS"
                decoration="04"
                className="pt-20 md:pt-32"
            />
            <div
                className="pt-10 md:pt-20 flex flex-col relative"
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {blogs.map((blog, i) => (
                    <div
                        key={i}
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(i)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === i && (
                                <motion.div
                                    layoutId="blogHoverBackground"
                                    className="absolute inset-0 bg-black z-0 rounded-2xl md:rounded-3xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </AnimatePresence>

                        <motion.a
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: i * 0.1,
                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            href={blog.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`relative z-10 group flex items-center justify-between py-6 md:py-8 px-4 md:px-8 border-b transition-colors duration-300 ${hoveredIndex === i || hoveredIndex === i + 1 ? "border-transparent" : "border-black/10"
                                }`}
                        >
                            <h3 className={`text-xl md:text-3xl font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-2 md:group-hover:translate-x-6 ${hoveredIndex === i ? "text-white" : "text-black/70 group-hover:text-black"
                                }`}>
                                {blog.title}
                            </h3>
                            <div className={`transition-all duration-300 p-2 md:p-3 rounded-full flex-shrink-0 ml-4 ${hoveredIndex === i
                                ? "opacity-100 translate-x-0 bg-white text-black"
                                : "opacity-0 -translate-x-4 bg-black text-white"
                                }`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </div>
                        </motion.a>
                    </div>
                ))}
            </div>
        </div>
    );
}
