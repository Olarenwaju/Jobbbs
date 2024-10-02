/* eslint-disable react/no-unescaped-entities */

import Header from "../components/Header"

import {BookmarkIcon} from '@heroicons/react/24/outline'
import {MapPinIcon} from '@heroicons/react/24/solid'
import {BuildingOfficeIcon} from '@heroicons/react/24/solid'
import {CpuChipIcon} from '@heroicons/react/24/solid'
import {CurrencyDollarIcon} from '@heroicons/react/24/solid'
import {GlobeAltIcon} from '@heroicons/react/24/solid'

import xiaomilogo from '../assets/img/xiaomilogo.png'
import applelogo from '../assets/img/applelogo.png'

// import {ShieldCheckIcon} from '@heroicons/react/24/solid'
// import {SparklesIcon} from '@heroicons/react/24/solid'
// import {UsersIcon} from '@heroicons/react/24/solid'
// import {ChartBarIcon} from '@heroicons/react/24/solid'

// import propositionimg from '../assets/img/valueproposition.png.webp'
// import Button from "../components/Button"

// import topcompany1 from "../assets/img/topcompany1.jpg"
// import topcompany2 from "../assets/img/topcompany2.jpg"
// import topcompany3 from "../assets/img/topcompany3.jpg"

// import adobelogo from '../assets/img/adobelogo.png'
import Footer from "../components/Footer"






const Home = () => {
  return (
    <>
        <section className="pb-32 px-5">
            <Header />
        </section>
        
        <section className="bg-[#08072D] py-20 px-5">
            <p className="text-center text-white font-outfit text-4xl pt-10 pb-24">Latest Job Opportunities</p>

            <div className="flex flex-col md:flex-row justify-center gap-4 pb-5">

                <div className="bg-white rounded-[6px] p-3 w-full md:max-w-[500px]">

                    <div className="flex justify-between pb-3">

                        <div className="flex items-center pb-2">
                            <div className="pr-2">
                                <img src={xiaomilogo} className="rounded-full w-10" alt="logo" />
                            </div>

                            <div>
                                <h1 className="text-base font-semibold">Software Engineer</h1>
                                <p className="text-sm text-[#0000007c]">Xiaomi</p>
                            </div>
                            
                        </div>

                        <div>
                            <BookmarkIcon className='h-5 w-5 text-gray-500 mr-3'/>
                        </div>

                    </div>

                    <div className="flex font-outfit text-sm leading-7 pb-3">

                        <div>
                            <p className="flex items-center">
                                <BuildingOfficeIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>South Korea</span>
                            </p>

                            <p className="flex items-center">
                                <CpuChipIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>xiaomi</span>
                            </p>

                            <p className="flex items-center">
                                <GlobeAltIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Technology/Software/Cloud Computing</span>
                            </p>
                            
                        </div>

                        <div>
                            <p className="flex items-center">
                                <MapPinIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Redmond</span>
                            </p>

                            <p className="flex items-center">
                                <CurrencyDollarIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                $<span>110k - $160kper year</span>
                            </p>
                            
                        </div>

                    </div>

                    <div className="flex items-center gap-2 pb-7">
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Tech</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Giants</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Innovators</div>
                    </div>

                    <div className="border-b-2 border-slate-300"></div>

                    <div className="flex justify-between py-5">
                        <p className="font-semibold text-sm text-[#08072D]">27 September 2024</p>
                    </div>


                </div>

                <div className="bg-white rounded-[6px] p-3 w-full md:max-w-[500px]">

                    <div className="flex justify-between pb-3">

                        <div className="flex items-center pb-2">
                            <div className="pr-2">
                                <img src={applelogo} className="rounded-full w-10" alt="logo" />
                            </div>

                            <div>
                                <h1 className="text-base font-semibold">IOS Developer</h1>
                                <p className="text-sm text-[#0000007c]">Apple</p>
                            </div>
                            
                        </div>

                        <div>
                            <BookmarkIcon className='h-5 w-5 text-gray-500 mr-3'/>
                        </div>

                    </div>

                    <div className="flex font-outfit text-sm leading-7 pb-3">

                        <div>
                            <p className="flex items-center">
                                <BuildingOfficeIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>United States</span>
                            </p>

                            <p className="flex items-center">
                                <CpuChipIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Apple</span>
                            </p>

                            <p className="flex items-center">
                                <GlobeAltIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Technology/Software/Cloud Computing</span>
                            </p>
                            
                        </div>

                        <div>
                            <p className="flex items-center">
                                <MapPinIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Redmond</span>
                            </p>

                            <p className="flex items-center">
                                <CurrencyDollarIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                $<span>110k - $160kper year</span>
                            </p>
                            
                        </div>

                    </div>

                    <div className="flex items-center gap-2 pb-7">
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Tech</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Giants</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Innovators</div>
                    </div>

                    <div className="border-b-2 border-slate-300"></div>

                    <div className="flex justify-between py-5">
                        <p className="font-semibold text-sm text-[#08072D]">27 September 2024</p>
                    </div>


                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4">

                <div className="bg-white rounded-[6px] p-3 w-full md:max-w-[500px]">

                    <div className="flex justify-between pb-3">

                        <div className="flex items-center pb-2">
                            <div className="pr-2">
                                <img src={xiaomilogo} className="rounded-full w-10" alt="logo" />
                            </div>

                            <div>
                                <h1 className="text-base font-semibold">Software Engineer</h1>
                                <p className="text-sm text-[#0000007c]">Xiaomi</p>
                            </div>
                            
                        </div>

                        <div>
                            <BookmarkIcon className='h-5 w-5 text-gray-500 mr-3'/>
                        </div>

                    </div>

                    <div className="flex font-outfit text-sm leading-7 pb-3">

                        <div>
                            <p className="flex items-center">
                                <BuildingOfficeIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>South Korea</span>
                            </p>

                            <p className="flex items-center">
                                <CpuChipIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>xiaomi</span>
                            </p>

                            <p className="flex items-center">
                                <GlobeAltIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Technology/Software/Cloud Computing</span>
                            </p>
                            
                        </div>

                        <div>
                            <p className="flex items-center">
                                <MapPinIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Redmond</span>
                            </p>

                            <p className="flex items-center">
                                <CurrencyDollarIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                $<span>110k - $160kper year</span>
                            </p>
                            
                        </div>

                    </div>

                    <div className="flex items-center gap-2 pb-7">
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Tech</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Giants</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Innovators</div>
                    </div>

                    <div className="border-b-2 border-slate-300"></div>

                    <div className="flex justify-between py-5">
                        <p className="font-semibold text-sm text-[#08072D]">27 September 2024</p>
                    </div>


                </div>

                <div className="bg-white rounded-[6px] p-3 w-full md:max-w-[500px]">

                    <div className="flex justify-between pb-3">

                        <div className="flex items-center pb-2">
                            <div className="pr-2">
                                <img src={applelogo} className="rounded-full w-10" alt="logo" />
                            </div>

                            <div>
                                <h1 className="text-base font-semibold">IOS Developer</h1>
                                <p className="text-sm text-[#0000007c]">Apple</p>
                            </div>
                            
                        </div>

                        <div>
                            <BookmarkIcon className='h-5 w-5 text-gray-500 mr-3'/>
                        </div>

                    </div>

                    <div className="flex font-outfit text-sm leading-7 pb-3">

                        <div>
                            <p className="flex items-center">
                                <BuildingOfficeIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>United States</span>
                            </p>

                            <p className="flex items-center">
                                <CpuChipIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Apple</span>
                            </p>

                            <p className="flex items-center">
                                <GlobeAltIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Technology/Software/Cloud Computing</span>
                            </p>
                            
                        </div>

                        <div>
                            <p className="flex items-center">
                                <MapPinIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                <span>Redmond</span>
                            </p>

                            <p className="flex items-center">
                                <CurrencyDollarIcon className='h-4 w-4 text-gray-500 mr-1'/>
                                $<span>110k - $160kper year</span>
                            </p>
                            
                        </div>

                    </div>

                    <div className="flex items-center gap-2 pb-7">
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Tech</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Giants</div>
                        <div className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">Innovators</div>
                    </div>

                    <div className="border-b-2 border-slate-300"></div>

                    <div className="flex justify-between py-5">
                        <p className="font-semibold text-sm text-[#08072D]">27 September 2024</p>
                    </div>


                </div>

            </div>


        </section>

        {/* <section className="bg-white pt-20 pb-32 px-5">
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-10">
                <div className="md:max-w-[450px] w-full">
                    <h1 className="text-3xl font-bold leading-10 pb-5 font-outfit">Our Value Proposition</h1>

                    <div className="flex items-center pb-4">
                        <div className="rounded-full bg-yellow-300 p-2 mr-3">
                            <ShieldCheckIcon className='h-5 w-5 rounded text-yellow-800'/>
                        </div>
                        <p className="text-[#4e4949a4] font-semibold text-lg">Streamlined process to quick and efficient job application</p>
                    </div>

                    <div className="flex items-center pb-4">
                        <div className="rounded-full bg-yellow-300 p-2 mr-3">
                            <SparklesIcon className='h-5 w-5 rounded text-yellow-800'/>
                        </div>
                        <p className="text-[#4e4949a4] font-semibold text-lg">Personalized job recommendations based on your skills and goals</p>
                    </div>

                    <div className="flex items-center pb-4">
                        <div className="rounded-full bg-yellow-300 p-2 mr-3">
                            <UsersIcon className='h-5 w-5 rounded text-yellow-800'/>
                        </div>
                        <p className="text-[#4e4949a4] font-semibold text-lg">Dedicated team offering resume tips and interview guidance</p>
                    </div>

                    <div className="flex items-center pb-10">
                        <div className="rounded-full bg-yellow-300 p-2 mr-3">
                            <ChartBarIcon className='h-5 w-5 rounded text-yellow-800'/>
                        </div>
                        <p className="text-[#4e4949a4] font-semibold text-lg">Transforming career trajectories with strategic insights</p>
                    </div>

                    <Button
						text="Learn More"
						className="bg-yellow-300 border hover:text-white text-yellow-800 transition-all hover:bg-yellow-500 px-11 py-3"
					/>

                </div>

                <div>

                    <img className="w-[600px] h-auto rounded-[10px]" src={propositionimg} alt="" />

                </div>

            </div>
             
        </section> */}

        {/* <section className="px-5 py-20 bg-[#cccccc41]">

            <div className="max-w-[1300px] mx-auto">

                <h1 className="pb-14 text-4xl font-outfit font-semibold text-[#08072D]">Top Companies</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
                    <div>                     
                        <img className="w-full object-cover h-[250px] rounded-[15px] pb-2" src={topcompany1}  alt=""/> 
                                                                           
                        <div className="flex justify-between pb-3">

                            <div className="flex items-center pb-2">

                                <div className="pr-2">
                                    <img src={xiaomilogo} className="rounded-full w-10" alt="logo" />
                                </div>

                                <div>
                                    <h1 className="text-base font-semibold">Software Engineer</h1>
                                    <p className="text-sm font-semibold text-[#0000007c]">Xiaomi</p>
                                </div>
                            
                            </div>

                            <div>
                                <BookmarkIcon className='h-5 w-5 font-extrabold text-gray-500 mr-3'/>
                            </div>

                        </div>

                    </div>

                    <div>                     
                        <img className="w-full object-cover h-[250px] rounded-[15px] pb-2" src={topcompany2}  alt=""/> 
                                                                           
                        <div className="flex justify-between pb-3">

                            <div className="flex items-center pb-2">

                                <div className="pr-2">
                                    <img src={applelogo} className="rounded-full w-10" alt="logo" />
                                </div>

                                <div>
                                    <h1 className="text-base font-semibold">IOS Developer</h1>
                                    <p className="text-sm font-semibold text-[#0000007c]">Apple</p>
                                </div>
                            
                            </div>

                            <div>
                                <BookmarkIcon className='h-5 w-5 font-extrabold text-gray-500 mr-3'/>
                            </div>

                        </div>

                    </div>

                    <div>                     
                        <img className="w-full object-cover h-[250px] rounded-[15px] pb-2" src={topcompany3}  alt=""/> 
                                                                           
                        <div className="flex justify-between pb-3">

                            <div className="flex items-center pb-2">

                                <div className="pr-2">
                                    <img src={adobelogo} className="rounded-full w-12" alt="logo" />
                                </div>

                                <div>
                                    <h1 className="text-base font-semibold">Data Analyst</h1>
                                    <p className="text-sm font-semibold text-[#0000007c]">Adobe</p>
                                </div>
                            
                            </div>

                            <div>
                                <BookmarkIcon className='h-5 w-5 font-extrabold text-gray-500 mr-3'/>
                            </div>

                        </div>

                    </div>

                    <div>                     
                        <img className="w-full object-cover h-[250px] rounded-[15px] pb-2" src={topcompany1}  alt=""/> 
                                                                           
                        <div className="flex justify-between pb-3">

                            <div className="flex items-center pb-2">

                                <div className="pr-2">
                                    <img src={xiaomilogo} className="rounded-full w-10" alt="logo" />
                                </div>

                                <div>
                                    <h1 className="text-base font-semibold">Software Engineer</h1>
                                    <p className="text-sm font-semibold text-[#0000007c]">Xiaomi</p>
                                </div>
                            
                            </div>

                            <div>
                                <BookmarkIcon className='h-5 w-5 font-extrabold text-gray-500 mr-3'/>
                            </div>

                        </div>

                    </div>




                </div>

            </div>

        </section> */}

        <Footer />

        

    </>
  )
}

export default Home;