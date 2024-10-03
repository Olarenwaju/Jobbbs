import { useState } from "react"
import Navbar from "../components/Navbar"

import jobData from "../data/jobs.json"
import SearchBar from "../components/SearchBar"
import JobCard from "../components/JobCard"
import BeatLoader from "react-spinners/BeatLoader"

import { motion } from "framer-motion";
import Footer from "../components/Footer"


const JobSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(jobData);
    const [loading, setIsLoading] = useState(false);

    //Handle input search
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSearchCLick = () => {
        setIsLoading(true);

        setTimeout(() => {
            const value = searchTerm.toLowerCase();
            const filtered = jobData.filter(
                (job) => 
                    job.company.toLowerCase().includes(value) || 
                    job.role.toLowerCase().includes(value) || 
                    job.location.toLowerCase().includes(value) ||
                    job.country.toLowerCase().includes(value)
            );

            setFilteredJobs(filtered)
            setIsLoading(false)
            setSearchTerm("")

        }, 3000);
    };


  return (
    <>
        <Navbar />
        <section className="pt-40 bg-[#08072D] pb-20 px-3">
            
            <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                onSearchClick={handleSearchCLick}
            />

            {loading && (
                <div className="flex justify-center pt-20 mb-10 bg-[#08072D] h-screen">
                <BeatLoader 
                    color="#FFFFFF" // Set the loader color
                    loading={loading} 
                    size={70} // Set the size of the loader
                />
            </div>
            )}

            {/* Jobs Results */}
            {!loading && (
                <motion.div 
                    className="flex justify-center flex-wrap gap-4 pb-4" 
                    initial="hidden" 
                    animate="show"
                    variants={
                        {hidden: {opacity: 0,},
                        show: {opacity: 1, transition:{staggerChildren: 0.2,},},
                    }}
                >
                    {filteredJobs.length > 0 ? (filteredJobs.map((job) => (
                        <motion.div key={job.id} className="w-full md:w-[400px]" variants={{
                            hidden: {opacity: 0, y:20},
                            show: {opacity:1, y:0, transition: {duration: 0.5}}
                        }}>
                            <JobCard  job={job} />
                        </motion.div>
                       
                    ))
                    ) : (
                            <div className="text-white font-bold text-5xl">No Jobs Found</div>
                        )}
                </motion.div>

            )}

        </section>

        <section>
            <Footer />
        </section>

    </>
  )
}

export default JobSearch;


