const MyStory = () =>{
    return(
        <div>
            <div className="mainContainer p-10 2xl:p-20 aboutme">
                <div className="text-gray-500 2xlml-40 text-2xl 2xl:w-1/2">
                    <div className="text-3xl text-white font-bold">About Me</div><br />
                    <div>— Who am i?</div><br /><br />
                    <div className="text-justify text-xl">
                        Hey there, im a Software Engineer and Developer. Currently study at Bina Nusantara University, majoring
                        Computer Science focusing on Software Engineering. I believe that technology is always evolving so 
                        we must keep learning to keep up with it. Becoming a developer is certainly not just about learning 
                        from books or lectures, let&apos;s learn together by connecting with each other and sharing experiences.
                    </div>
                    <br />
                    <div>
                        <a href="./Darrel's Resume.pdf" download>
                            <button className="relative flex items-center px-6 py-3 overflow-hidden font-normal text-lg transition-all bg-indigo-500 rounded-md group hover:cursor-pointer">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Download CV</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStory;