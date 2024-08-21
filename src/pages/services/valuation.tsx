import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/ui/navbar';
import WhatsappButton from '@/components/whatapp';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from "framer-motion"
import Image from "next/image"
import Heading from '@/components/ui/Heading';
import { FaThumbsUp, FaMoneyBills, FaLandmarkDome, FaBuildingCircleCheck } from "react-icons/fa6";
import Calendly from '@/components/ui/Calendly';
import { Chrono } from 'react-chrono';

const items = [
    {
        title: "Strategy Development",
        cardDetailedText: "Our fundraising consultants will work with you to develop a business fundraising strategy individualized to your business and your goals. We will help you identify the best sources of capital for your business, and develop a plan for how to approach investors, lenders, and other potential sources of funding.",
    },
    {
        title: "Identifying Potential Investors or Lenders",
        cardDetailedText: "Our fundraising consultants will work with you to develop a business fundraising strategy individualized to your business and your goals. We will help you identify the best sources of capital for your business, and develop a plan for how to approach investors, lenders, and other potential sources of funding.",
    },
    {
        title: "Getting finances in Order",
        cardDetailedText: "Numbers matter to investors. Therefore, we help you present your finances and projected revenue strategically so you can increase your odds of getting funded.",
    },
    {
        title: "Company Valuation",
        cardDetailedText: "Knowing the value of your business before starting your business fundraising campaign will help you understand key drivers and metrics investors will look at, giving you more confidence when negotiating.",
    },
    {
        title: "Pitch Deck Development",
        cardDetailedText: "A well-crafted pitch deck is essential for any business fundraising effort. We'll help you develop a pitch deck that effectively communicates your business and vision, highlighting the key metrics and data that investors and lenders are looking for.",
    },
    {
        title: "Pitch Training",
        cardDetailedText: "A great idea and an equally excellent pitch deck are not always enough for investors. Therefore, we also train you to present your business fundraising proposal effectively to win investors.",
    },
    {
        title: "Investor Outreach and Due Diligence",
        cardDetailedText: "We'll help you identify and approach potential investors and guide you through the due diligence process to ensure that you're well-prepared for any questions or concerns they may have.",
    },
    {
        title: "Term Sheet and Negotiation Support",
        cardDetailedText: "Once you've secured investor interest, we'll help you negotiate the best possible terms for your business. We'll work with you to understand the deal terms and ensure you make informed decisions.",
    },
    {
        title: "Execution & Deal Closure",
        cardDetailedText: "We execute the meticulously planned strategy and guide you through each step of the transaction process, ensuring a smooth journey from sourcing targets to deal closure.",
    },
]

export default function Valuation() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <>
            <Head>
                <title> Valuation | Ease My Process</title>
                <meta name="description" content="Services page" />
            </Head>
            <Navbar />
            <WhatsappButton />
            <main className='w-full'>

                {/* HERO */}

                <section className=''>
                    <HeroHighlight>
                        <div className="flex flex-col-reverse md:flex-row items-center mt-12">
                            <div className="flex flex-col gap-5">
                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: [20, -5, 0],
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.4, 0.0, 0.2, 1],
                                    }}
                                    className="text-5xl md:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl text-center md:text-left"
                                >
                                    <Highlight className="text-white">
                                        Fund Raising
                                    </Highlight>
                                </motion.h1>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.5,
                                        ease: [0.4, 0.0, 0.2, 1],
                                    }}
                                    className="md:text-left text-center"
                                >

                                    <p className='max-w-3xl font-bold text-gray-600 text-base md:text-lg px-3 md:px-0'>
                                        At EaseMyProcess, we assist companies at every stage of growth in securing the necessary funding to achieve their objectives.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.7,
                                        ease: [0.4, 0.0, 0.2, 1],
                                    }}
                                    className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-5"
                                >
                                    <div className="text-xl md:text-lg text-black outline outline-rose-500 px-3 py-1.5 rounded-lg">Get Started</div>
                                    <div className="text-xl md:text-lg bg-gradient-to-r from-rose-500 to-[#D20420]/90 px-3 py-2 text-white rounded-lg">Book a Call</div>
                                </motion.div>
                            </div>
                            <div className="hidden md:flex">
                                <Image src="/images/services/fund.svg" alt="Hero Image" width={500} height={500} />
                            </div>
                        </div>

                    </HeroHighlight>
                </section>

                {/* WHY CHOOSE US */}

                <section className='w-11/12 mx-auto'>
                    <Heading>Why Choose Us?</Heading>
                    <p className="leading-relaxed text-base md:text-xl mt-3">
                        Thousands of businesses seek funding each day. What sets you apart?
                    </p>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}

                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center space-y-4 py-2 px-3 mx-auto hover:bg-gray-200 transition-all duration-300">

                            <h3 className="text-xl font-bold text-rose-600">Strategic Solutions</h3>
                            <p className="text-center text-gray-600">
                                Our team of experts will help you develop a comprehensive strategy to secure the funding you need.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center space-y-4 py-2 px-3 mx-auto hover:bg-gray-200 transition-all duration-300">

                            <h3 className="text-xl font-bold text-rose-600">Data Driven Strategies</h3>
                            <p className="text-center text-gray-600">
                                We use data to drive our decisions and strategies, constantly analyzing to ensure that our clients receive the best service possible.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center space-y-4 py-2 px-3 mx-auto hover:bg-gray-200 transition-all duration-300">

                            <h3 className="text-xl font-bold text-rose-600">End to End Support</h3>
                            <p className="text-center text-gray-600">
                                Our team of experts are available round the clock to assist you with any queries or concerns you may have.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 1.7,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="flex flex-col md:flex-row items-center justify-around gap-4 mt-5"
                    >
                        <p
                            className="text-lg md:text-xl w-full mt-5 font-bold text-gray-600 max-w-3xl">
                            We know how to navigate the complex landscape of investors, lenders, and other sources of capital to help you achieve your goals. Raising capital can be challenging, especially for small businesses and startups. That's why we offer comprehensive fundraising consulting services for all types of campaigns.
                        </p>
                        <Image src="/images/services/navigate.svg" alt="Hero Image" width={400} height={400} />
                    </motion.div>
                </section>

                {/* TYPES OF FUNDING */}
                <section className='w-11/12 mx-auto'>
                    <Heading>Types of Funding</Heading>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}

                        className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center border border-red-500 text-center gap-5 py-8 px-3 mx-auto hover:bg-gray-200 transition-all duration-300">
                            <FaThumbsUp className="text-rose-600 text-4xl" />
                            <h3 className="text-xl font-bold text-rose-600">Debt Capital</h3>
                            <p className="text-center text-gray-600">
                                Develop a compelling fundraising strategy to secure borrowed funds on either a long-term or short-term basis, tailored to your needs.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center border border-red-500 text-center gap-5 py-8 px-3 mx-auto hover:bg-gray-200 transition-all duration-300">
                            <FaMoneyBills className="text-rose-600 text-4xl" />
                            <h3 className="text-xl font-bold text-rose-600">Angel Investing (INR 4 Crores and above)</h3>
                            <p className="text-center text-gray-600">
                                Showcase your startup's potential to angel investors and secure the funding needed to launch and accelerate growth.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center border border-red-500 text-center gap-5 py-8 px-3 mx-auto hover:bg-gray-200 transition-all duration-300">
                            <FaLandmarkDome className="text-rose-600 text-4xl" />
                            <h3 className="text-xl font-bold text-rose-600">Venture Capital (INR 50 Lacs to INR 3 Crores)</h3>
                            <p className="text-center text-gray-600">
                                We help you formulate a fundraising strategy that highlights your business's value and growth potential, inspiring investors to inject capital.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center border border-red-500 text-center gap-5 py-8 px-3 mx-auto hover:bg-gray-200 transition-all duration-300">
                            <FaBuildingCircleCheck className="text-rose-600 text-4xl" />
                            <h3 className="text-xl font-bold text-rose-600">Private Seed Funds and Startup India Seed Fund Scheme</h3>
                            <p className="text-center text-gray-600">
                                Raise equity capital of INR 10 Lacs and above.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Contact US */}
                <section className="py-6 bg-[#D20420] text-gray-100 mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold leading-none text-center">
                            It's Time for You to Take the Next Step!
                        </h1>
                        <p className="pt-2 pb-8 text-lg md:text-xl font-medium text-center">
                            Level up on your journey and let us help you get there. It only
                            takes a few seconds to get started, and we're here to guide you
                            every step of the way. What are you waiting for?
                        </p>
                        <motion.a
                            href="/contact"
                            className="px-8 py-3 text-lg font-semibold rounded bg-gray-200 text-[#D20420]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us Now!
                        </motion.a>
                    </motion.div>
                </section>

                <Calendly />


                {/* Process Steps */}
                <section className='w-11/12 mx-auto'>
                    <Heading>Our Process</Heading>
                    <div className="mt-5 h-screen w-full">
                        {isClient &&
                            <Chrono
                                items={items}
                                mode="VERTICAL_ALTERNATING"
                                cardHeight={100}
                                theme={{ primary: "red" }}
                                hideControls={true}
                            />}
                    </div>
                </section>
            </main>
        </>
    );
}