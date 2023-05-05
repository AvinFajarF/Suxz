import React from 'react'

function Home() {
  return (
    <>
    <nav className="flex h-25 px-28 pb-28 pt-11">
      <div className="container flex">
        <div className="logo">
          <img src="./assets/images/logo.png" alt="" srcset="" />
        </div>

        <div className="nav-item flex items-center ms-20 gap-6 text-[#394360]">
          <a href="#">Home</a>
          <a href="#">Learnings</a>
          <a href="#">About Us</a>
          <a href="#">Testimonial</a>
        </div>

        <div className="cats flex items-center flex-1 justify-end gap-5">
          <div className="login text-[#8C82FC]">
            <button>Login</button>
          </div>

          <div className="signup p-3 bg-[#8C82FC] rounded-lg px-5 text-white">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </nav>

    <section className="ms-28">
      <div className="container grid grid-cols-2">
        <div className="content">
          <h3 className="text-[#8C82FC]">S U X Z M A K E I T E A S Y</h3>
          <h1 className="text-[#22293E] font-extrabold text-4xl">
            Find Your Way
            <div className="">Of Success</div>
          </h1>
          <div className="paragraf">
            <p className="text-[#222831] w-96 mt-5">
              We help you to increase self-confidence and train yourself in a
              direction, and make you more creative in developing a work
            </p>
          </div>

          <div className="ctas1 mt-8">
            <button className="bg-[#8C82FC] p-3 px-7 rounded-lg text-white">
              Get Started
            </button>
            <button
              className="bg-[#F7F7FD] p-3 px-7 rounded-lg ms-3 text-[#A2B3BF]"
            >
              Our Services
            </button>
          </div>
        </div>


        <div className="vector -mt-20">
          <img src="./assets/images/vector.png" alt="" className="w-[574px]" />
        </div>
      </div>
    </section>

    <div className="content bg-[#F8F8FF] py-20">
      <div className="container">
        <div className="title2 ms-28 py-10">
          <h3 className="text-[#8C82FC]">LEARNINGS</h3>
          <h1 className="text-[#22293E] font-bold text-4xl w-[555px] mt-2">
            Online Learning Platform International Curriculum
          </h1>
          <p className="w-96 mt-4">
            Study and understand the material className is more relaxed without time
            limit.
          </p>
        </div>


        <div className="card ms-28 grid grid-cols-4	 gap-11 flex justify-around">
          <div
            className="card1 p-10 w-[249px] bg-[#FFFFFF]  rounded-lg"
          >
            <img src="./assets/images/icon1.png" alt="" srcset="" />
            <h4 className="font-bold mt-6">Starter</h4>
            <p className="text-black mt-1">
              Free className access for that start learning code and design
            </p>

            <button className="bg-[#44E4C9] px-10 py-1 text-white rounded-lg mt-5">
              See className
            </button>
          </div>

          <div
            className="card2 p-10 w-[249px] bg-[#FFFFFF] rounded-lg"
          >
            <img src="./assets/images/icon2.png" alt="" srcset="" />
            <h4 className="font-bold mt-6">Premium</h4>
            <p className="text-[#22293E] mt-1">
              Advanced material from the Starter & learn to build projects
            </p>

            <button className="bg-[#44E4C9] px-10 py-1 text-white rounded-lg mt-5">
              See className
            </button>
          </div>

          <div
            className="card3 p-10 w-[249px] bg-[#FFFFFF]  rounded-lg"
          >
            <img src="./assets/images/icon3.png" alt="" srcset="" />
            <h4 className="font-bold mt-6">Superstar</h4>
            <p className="text-[#22293E] mt-1">
              Materials for experts who have completed the premium package
            </p>

            <button className="bg-[#44E4C9] px-10 py-1 text-white rounded-lg mt-5">
              See className
            </button>
          </div>

          <div
            className="card4 p-10 w-[249px] bg-[#FFFFFF]  rounded-lg"
          >
            <img src="./assets/images/icon4.png" alt="" srcset="" />
            <h4 className="font-bold mt-6">Bootcamp</h4>
            <p className="text-[#22293E] mt-1">
              Informatics science training program with the latest material
            </p>

            <button className="bg-[#44E4C9] px-10 py-1 text-white rounded-lg mt-5">
              See className
            </button>
          </div>
        </div>

        
      </div>
    </div>

    <div className="about py-16 ms-28">
      <div className="container grid grid-cols-2">
        <div className="about-image">
          <img
            src="./assets/images/about.png"
            alt=""
            srcset=""
            className="w-[600px]"
          />
        </div>

        <div className="about-text ms-20">
          <h3 className="font-bold text-[#8C82FC]">ABOUT US</h3>
          <h1 className="font-extrabold text-[44px] w-[468px] mt-3">
            We Help Improve Your Work Experience
          </h1>
          <p className="mt-3 font-medium text-[22px] w-[412px]">
            We help you to increase self-confidence and train yourself in a
            direction.
          </p>

          <div className="mt-12">
            <img src="./assets/images/heehee.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#F8F8FF] py-20 px-20">
      <div className="container">
        <h1 className="font-extrabold text-[44px] text-[#22293E] text-center">
          Companies That Recruit Our Graduates
        </h1>
        <h3 className="font-medium text-[26px] text-center">
          Our graduates have worked in more than 400 companies around the World
        </h3>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center">
        <img src="./assets/images/Github.png" alt="" srcset="" />
        <img src="./assets/images/Microsoft.png" alt="" srcset="" />
        <img src="./assets/images/Redis.png" alt="" srcset="" />
        <img src="./assets/images/Amazon.png" alt="" srcset="" />
        <img src="./assets/images/Paypal.png" alt="" srcset="" />
        <img src="./assets/images/Linkedin.png" alt="" srcset="" />
        <img src="./assets/images/Reddit.png" alt="" srcset="" />
        <img src="./assets/images/Medium.png" alt="" srcset="" />
      </div>
    </div>


    <div className="text-center py-20 px-20">
      <div className="container">
        <h3 className="text-[#8C82FC] font-bold text-[20px]">TESTIMONIAL</h3>
        <h1 className="my-3 font-extrabold text-[44px] text-[#22293E]">
          Our Alumni Say
        </h1>
        <p>These are the words of people who have taken our className</p>

        <div className="card grid grid-cols-4 py-20">
          <div
            className="border-2 border-solid border-purple-400 p-5 w-[240px] mx-auto relative rounded-lg"
          >
            <img
              className="absolute -top-10 left-0 right-0 mx-auto"
              src="./assets/images/Jason.png"
              alt=""
            />
            <h2 className="font-bold text-2xl text-gray-800 mt-14">Jason Todd</h2>
            <h5 className="text-sm text-gray-500 mt-2">Entrepreneur</h5>
            <p className="text-gray-700 text-sm mt-6">
              “The mentor is cool, how to convey each material is also detailed
              and easy to understand..”
            </p>
          </div>

          <div
            className="border-2 border-solid border-purple-400 p-5 w-[240px] mx-auto relative rounded-lg"
          >
            <img
              className="absolute -top-10 left-0 right-0 mx-auto"
              src="./assets/images/Cassandra.png"
              alt=""
            />
            <h2 className="font-bold text-2xl text-gray-800 mt-14">Cassandra K</h2>
            <h5 className="text-sm text-gray-500 mt-2">Web Developer</h5>
            <p className="text-gray-700 text-sm mt-6">
              “The mentor is cool, how to convey each material is also detailed
              and easy to understand..”
            </p>
          </div>

          <div
            className="border-2 border-solid border-purple-400 p-5 w-[240px] mx-auto relative rounded-lg"
          >
            <img
              className="absolute -top-10 left-0 right-0 mx-auto"
              src="./assets/images/Peter.png"
              alt=""
            />
            <h2 className="font-bold text-2xl text-gray-800 mt-14">Peter Parker</h2>
            <h5 className="text-sm text-gray-500 mt-2">PHP Enthusiast</h5>
            <p className="text-gray-700 text-sm mt-6">
              “The mentor is cool, how to convey each material is also detailed
              and easy to understand..”
            </p>
          </div>

          <div
            className="border-2 border-solid border-purple-400 p-5 w-[240px] mx-auto relative rounded-lg"
          >
            <img
              className="absolute -top-10 left-0 right-0 mx-auto"
              src="./assets/images/Jean.png"
              alt=""
            />
            <h2 className="font-bold text-2xl text-gray-800 mt-14">Jean Gray</h2>
            <h5 className="text-sm text-gray-500 mt-2">Designer</h5>
            <p className="text-gray-700 text-sm mt-6">
              “The mentor is cool, how to convey each material is also detailed
              and easy to understand..”
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* sart section */}


    <br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Home