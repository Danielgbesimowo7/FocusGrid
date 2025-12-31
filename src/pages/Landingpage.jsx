import React from "react";
import { useState } from "react";

// Components
import HeaderChips from "../components/HeaderChips";
import HIWcard from "../components/HIWcard";
import ProblemCard from "../components/ProblemCard";
import CommentCard from "../components/CommentCard";
import Accordion from "../components/Accordion";
import Button from "../components/Button"

// Images and Icons
import focusgridLogo from "../assets/focuslogo.svg";
import focusgridLogoWhite from "../assets/focusLogoWhite.svg";
import dashboardImg from "../assets/Focus Dash.png";
import dashboardImg2 from "../assets/dashboard.png";
import heroAvatars from "../assets/focus-hero-avatar.svg";
import heroStars from "../assets/focus-hero-stars.svg";
import folder from "../assets/folder.svg";
import calendar from "../assets/calendar.svg";
import usergroup from "../assets/usergroup.svg";
import checkfilled from "../assets/check-filled.svg";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import useradd from "../assets/user-add.svg";
import taskadd from "../assets/task-add.svg";
import rocket from "../assets/rocket.svg";
import bookmark from "../assets/bookmark-add.svg";
import user1 from "../assets/user1.svg";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import user4 from "../assets/user4.svg";
import user5 from "../assets/user5.svg";
import user6 from "../assets/user6.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import mobilemenu from "../assets/menu.svg";

// CSS custom styles.
import "../App.css";

const Landingpage = () => {
  return (
    <>
      <div className="w-full bg-surface min-h-screen">
        <nav className="site-nav w-full px-4 sm:px-6 md:px-12 bg-white ">
          <div className="h-full max-w-400 m-auto flex justify-between items-center">
            <div className="flex items-center gap-8">
              <img className="cursor-pointer" src={focusgridLogo} alt="" />
              <div className="space-x-5 lg:block hidden ">
                <a
                  href="#"
                  className="cursor-pointer hover:text-primary transition-all duration-300s ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="cursor-pointer hover:text-primary transition-all duration-300s ease-in-out"
                >
                  Features
                </a>
                <a
                  href="#howitworks"
                  className="cursor-pointer hover:text-primary transition-all duration-300s ease-in-out"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="cursor-pointer hover:text-primary transition-all duration-300s ease-in-out"
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  className="cursor-pointer hover:text-primary transition-all duration-300s ease-in-out"
                >
                  Pricing
                </a>
                <a
                  href="#faqs"
                  className="cursor-pointer hover:text-primary transition-all duration-300s ease-in-out"
                >
                  FAQs
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a className="hidden lg:block cursor-pointer hover:text-primary transition-all duration-300s ease-in-out">
                Sign in
              </a>
              <button className="hidden lg:block btn-primary">
                Get started for free
              </button>
              <button className="lg:hidden cursor-pointer">
                <img className="w-full" src={mobilemenu} alt="" />
              </button>
            </div>
          </div>
        </nav>

        <div className="main-content">
          <section className="site-section px-4 sm:px-6 md:px-12">
            <div className="max-w-400 m-auto lg:mt-8 -mt-14 flex flex-col lg:flex-row gap-8 items-center justify-center ">
              {/*  Hero Text */}
              <div className="space-y-8 lg:w-1/2 sm:w-full flex flex-col items-center justify-center lg:items-start">
                <HeaderChips title="Trusted by 5000+ Students Worldwide" />

                <h1 className="text-4xl md:text-5xl text-center lg:text-left ">
                  Your Academic Life <br></br>{" "}
                  <span className="text-primary-alt">Organized</span>
                </h1>
                <p className=" lg:text-left text-center">
                  {" "}
                  Stop juggling multiple apps and scatterd notes.
                  FocusGrid brings your tasks, assignments, deadlines, and
        
                  study sessions into one powerful platform designed 
                  specifiaclly for students.
                </p>

                <div className="flex gap-4 mx-auto lg:ml-0">
                  <Button type="primary" text="Start Free Trial"></Button>
                  <Button type="secondary" text="Watch Demo"></Button>
                </div>

                <div className="relative items-center gap-4 hidden sm:flex">
                  <div>
                    <img src={heroAvatars} alt="" className="" />
                  </div>
                  <div>
                    <img src={heroStars} alt="" className="w-30" />
                    <p className="text-lg mt-2 font-medium">
                      4.9/5 from 2500+ reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className=" w-full lg:w-1/2">
                <img src={dashboardImg}></img>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Metric Section */}
      <section className="site-section bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-400 m-auto py-4 grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-10 sm:gap-4 lg:gap-40">
          <div className="text-center grid gap-2">
            <h2 className="text-primary-alt text-4xl lg:text-5xl font-bold ">50k+</h2>
            <p className="">Active Students</p>
          </div>

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-primary-alt text-4xl lg:text-5xl  font-bold ">2M+</h2>
            <p className="">Task Completed</p>
          </div>

          <div className="text-center flex  items-center flex-col gap-2">
            <h2 className="text-primary-alt text-4xl lg:text-5xl  font-bold">98%</h2>
            <p className="">Satisfaction Rate</p>
          </div>

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-primary-alt text-4xl lg:text-5xl font-bold">150</h2>
            <p className="">Universities</p>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="site-section bg-muted px-4 sm:px-6 md:px-12">
        <div className="max-w-400 m-auto flex justify-center">
          <HeaderChips title="THE PROBLEM" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mt-6 text-[#555556]">
            Drowning in Academic Chaos?
          </h2>
          <p className="text-center mt-4 max-w-2xl m-auto">
            Generic task app weren’t built for students. They don’t understand
            semesters, courses, group projects, or the unique challenges of
            academic life.
          </p>
        </div>
        <div className="max-w-400 m-auto mt-12 grid  sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProblemCard
            icon={<img src={calendar} alt="" />}
            iconBgColor="bg-[#FEE2E2]"
            title="Missed Deadlines"
            subtitle="Juggling assignments across multiple courses leads to forgotten deadlines and last-minute panic. You need a system that tracks everything in one place."
          />
          <ProblemCard
            icon={<img src={folder} alt="" />}
            iconBgColor="bg-[#FFFFC8]"
            title="Scattered Notes"
            subtitle="Notes in one app, tasks in another, study materials somewhere else. Finding what you need becomes a treasure hunt when you should be studying."
          />
          <ProblemCard
            icon={<img src={usergroup} alt="" />}
            iconBgColor="bg-[#E0FFEC]"
            title="Group Project Nightmares"
            subtitle="Coordinating group projects across different platforms and tools creates confusion. You need seamless collaboration built for student teams."
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="site-section bg-white space-y-24 scroll-mt-20 px-4 sm:px-6 md:px-12"
      >
        <div className="">
          <div className="max-w-400 m-auto flex justify-center">
            <HeaderChips title="FEATURES" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mt-6 text-[#555556]">
              Everything You Need to Excel
            </h2>
            <p className="text-center mt-4 max-w-2xl m-auto">
              Built specifically for students, with features that understand
              your academic workflow
            </p>
          </div>
        </div>

        <div className="max-w-400 m-auto space-y-20">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">
            <div className="bg-[#F0FDF4] w-full lg:w-1/2 rounded-lg flex p-12 items-center justify-center">
              <img className="w-120" src={feature1} alt="course" />
            </div>

            <div className="space-y-8 w-full sm:w-full lg:w-1/2 ">
              <div className="text-xs font-medium bg-[#F0FDF4] p-2 inline-flex items-center gap-2 rounded-full">
                <div className="size-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-green-500">Task management</p>
              </div>

              <div className="">
                <h2 className="font-medium text-[24px]">Course Organized Tasks</h2>
                <p>
                  Say goodbye to generic to-do lists. Organize your assignments,
                  readings and projects by course. See everything at a glance
                  with priority indicators, deadline countdowns, and completion
                  tracking.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Smart Course Grouping</h3>
                    <p className="text-lg">
                      Automatically organize tasks by course with color coding
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Priority Management</h3>
                    <p className="text-lg">
                      Tag tags as urgent, important, or routine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Deadline Reminders</h3>
                    <p className="text-lg">
                      Never miss an assignment with smart notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">
            <div className="bg-[#F0F6FF] w-full lg:w-1/2 order-2 rounded-lg p-12 flex items-center justify-center ">
              <img className="w-100" src={feature2} alt="course" />
            </div>

            <div className="space-y-8 w-full sm:w-full lg:w-1/2">
              <div className="text-xs font-medium bg-[#F0F6FF] p-2 inline-flex items-center gap-2 rounded-full">
                <div className="size-4 bg-primary rounded-full"></div>
                <p className="text-sm text-primary">Study Timer</p>
              </div>

              <div>
                <h2 className="font-medium text-[24px]">Built-in Pomodoro Timer</h2>
                <p>
                  Maximize your focus with our integrated study timer. USe the
                  proven Pomodoro technique or customize you own study
                  intervals. Track your productive hours and build consistent
                  study habits.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Customizable Sessions</h3>
                    <p className="text-lg">
                      Set your own focus and break durations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Study Statistics</h3>
                    <p className="text-lg">
                      Track total study hours per course and week
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Break Reminders</h3>
                    <p className="text-lg">
                      Gentle nudges to take breaks and stay fresh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">
            <div className="bg-[#FCE7F3] w-full lg:w-1/2 h-full rounded-lg p-12 flex items-center justify-center ">
              <img className="w-120" src={feature3} alt="course" />
            </div>

            <div className="space-y-8 w-full sm:w-full lg:w-1/2">
              <div className="text-xs font-medium bg-[#FCE7F3] p-2 inline-flex items-center gap-2 rounded-full">
                <div className="size-4 bg-[#FF4DB3] rounded-full"></div>
                <p className="text-sm text-[#FF4DB3]">Smart Notes</p>
              </div>

              <div>
                <h2 className="font-medium text-[24px]">Course-Linked Notes</h2>
                <p>
                  Keep all your lecture note, study materials, and quick
                  thoughts organized by course. Rich text-formatting, tagging
                  and powerful search make finding information effortless
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Rich Text Editor</h3>
                    <p className="text-lg">
                      Format notes with headers , lists, and highlights
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Quick Course</h3>
                    <p className="text-lg">
                      Jot down ideas instantly during lectures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkfilled} alt="" />
                  <div className="flex flex-col gap-1">
                    <h3 className="">Powerful Search</h3>
                    <p className="text-lg">
                      Find any note across all course instantly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section
        id="howitworks"
        className="site-section bg-[#F9F7FD] scroll-mt-20 px-4 sm:px-6 md:px-12"
      >
        <div className="max-w-400 m-auto flex justify-center">
          <HeaderChips title="HOW IT WORKS" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mt-6 text-[#555556]">
            Get Started in Minutes
          </h2>
          <p className="text-center mt-4 max-w-2xl m-auto">
            Simple setup, powerful results. Start organizing your academic life
            today.
          </p>
        </div>
        <div className="max-w-400 m-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <HIWcard
            number="1"
            title="Create Account"
            subtitle="Sign up with your email or university account. Takes less than 30 seconds."
            icon={<img src={useradd} />}
            iconBgColor="bg-[#FEE2E2]"
          ></HIWcard>
          <HIWcard
            number="2"
            title="Add Courses"
            subtitle="Input your course schedule for the semester. We’ll create organized space for each class."
            icon={<img src={bookmark} />}
            iconBgColor="bg-[#DBEAFE]"
          ></HIWcard>
          <HIWcard
            number="3"
            title="Add Tasks"
            subtitle="Start adding assignment , readings, and project. Set priorities and deadlines."
            icon={<img src={taskadd} />}
            iconBgColor="bg-[#FCE7F3]"
          ></HIWcard>
          <HIWcard
            number="4"
            title="Stay Organized"
            subtitle="Track progress, use the study timer, and watch your productivity soar."
            icon={<img src={rocket} />}
            iconBgColor="bg-[#F0FDF4]"
          ></HIWcard>
        </div>
      </section>

      {/* Dashboard Display SECTION */}
      <section className="site-section bg-white space-y-8 px-4 sm:px-6 md:px-12">
        <div className="max-w-400 m-auto flex justify-center">
          <HeaderChips title="DASHBOARD" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mt-6 text-[#555556]">
            Your Command Center
          </h2>
          <p className="text-center mt-4 max-w-2xl m-auto">
            Everything you need organized in one place
          </p>
        </div>

        <div className="max-w-400 m-auto flex items-center justify-center">
          <img className="w-full md:w-[70%] " src={dashboardImg2} alt="" />
        </div>
      </section>

      {/* TESTIMONIALS SECTIOM*/}
      <section
        id="testimonials"
        className="site-section bg-[#F7FAFF] scroll-mt-20 px-4 sm:px-6 md:px-12"
      >
        <div className="max-w-400 m-auto flex justify-center">
          <HeaderChips title="TESTIMONIALS" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mt-6 text-[#555556]">
            Loved and Used by Students Everywhere
          </h2>
          <p className="text-center mt-4 max-w-2xl m-auto">
            See how FocusGrid is transforming academic life
          </p>
        </div>
        <div className="max-w-400 m-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CommentCard
            userImg={user1}
            userName="Sarah Johnson"
            comment="FocusGrid completely changed how I manage my coursework. I went from constantly missing deadlines to being ahead on all my assignments, The course organization is genius"
            userDetail="Computer Science, MIT."
          ></CommentCard>
          <CommentCard
            userImg={user2}
            userName="Daniel Gbesimowo"
            comment="The Pomodoro timer integration is perfect. I’ve doubled my productive study hours and my grades have never been better. 
        This app is a game-changer for any serious student."
            userDetail="Mathematics, Unilag."
          ></CommentCard>
          <CommentCard
            userImg={user3}
            userName="Emily Rodriguez"
            comment="The Pomodoro timer integration is perfect. I’ve doubled my productive study hours and my grades have never been better. 
        This app is a game-changer for any serious student."
            userDetail="Engineering, Berkeley."
          ></CommentCard>
          <CommentCard
            userImg={user4}
            userName="Juliet Jenner"
            comment="I was drowning in scattered notes and missed assignments before FocusGrid. 
        Now everything is organized by course, and I can actually focus on learning instead of scrambling to remember what’s due. "
            userDetail="EMedicine, Johns Hopkins."
          ></CommentCard>
          <CommentCard
            userImg={user5}
            userName="Olamide Afunsho"
            comment="FocusGrid completely changed how I manage my coursework. I went from constantly missing deadlines to being ahead on all my assignments, The course organization is genius"
            userDetail="Business, Stannford."
          ></CommentCard>
          <CommentCard
            userImg={user6}
            userName="Jessica Taylor"
            comment="The analytics feature helps me see where I’m spending my time. I’ve optimized my study schedule and have more free time than ever. 
        Plus, the interface is gorgeous!"
            userDetail="Psychology, Yale."
          ></CommentCard>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id="pricing"
        className="site-section bg-white space-y-8 scroll-mt-20 px-4 sm:px-6 md:px-12"
      >
        <div className="max-w-400 m-auto flex justify-center">
          <HeaderChips title="PRICING" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mt-6 text-[#555556]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center mt-4 max-w-2xl m-auto">
            Choose the plan that fits your academic journey.
          </p>
        </div>

        <div className="m-auto max-w-400 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-6 lg:gap-6">
          {/* {PRICE 1} */}
          <div className=" p-6 space-y-5 bg-white border-3 border-[#F0F0F0] rounded-xl">
            <div className="space-y-1 text-center">
              <h2 className="font-medium">Free</h2>
              <p>Perfect for getting started</p>
            </div>

            <div className="text-center">
              <h1>
                $0
                <span className="text-gray-600 text-lg font-medium">
                  /month
                </span>
              </h1>
            </div>
            <button className="btn-primary w-full">Get started</button>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Up to 3 courses</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Basic task management</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Study timer</p>
              </div>
            </div>
          </div>

          {/* {PRICE 2} */}
          <div className=" p-6 space-y-5 text-white bg-primary-alt relative rounded-xl problem-card-shadow">
            <div className="text-white bg-green-500 mx-auto font-medium rounded-full px-3 py-1 absolute -top-3 left-[calc((100%-128.84px)/2)]">
              <h3 className="text-sm">MOST POPULAR</h3>
            </div>
            <div className="space-y-1 text-center ">
              <h2 className="font-medium">Student Pro</h2>
              <p className="text-white">For serious students</p>
            </div>

            <div className="text-center">
              <h1>
                $20<span className="text-lg font-medium">/month</span>
              </h1>
            </div>
            <button className="btn-secondary w-full">Get pro</button>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img className="text-white" src={checkfilled} alt="" />
                <p className="text-lg text-white">Unlimited courses</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg text-white">Advanced task management</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg text-white">Custom study timers</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg text-white">Rich text notes</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg text-white">Group collaboration</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg text-white">Priority support</p>
              </div>
            </div>
          </div>

          {/* {PRICE 3} */}
          <div className=" p-6 space-y-5 bg-white border-3 border-[#F0F0F0] rounded-xl">
            <div className="space-y-1 text-center">
              <h2 className="font-medium">Team</h2>
              <p>Perfect for study groups and tutors</p>
            </div>

            <div className="text-center">
              <h1>
                $29
                <span className="text-gray-600 text-lg font-medium">
                  /month
                </span>
              </h1>
            </div>
            <button className="btn-primary w-full">Get started</button>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Everything in pro</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Up to 10 team members</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Team analytics</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Admin controls</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkfilled} alt="" />
                <p className="text-lg">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section
        id="faqs"
        className="site-section bg-[#f9fAFB] space-y-8 scroll-mt-20 px-12"
      >
        <div className="max-w-400 m-auto flex justify-center">
          <HeaderChips title="FAQs" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mt-6 text-[#555556]">
            Frequently Asked Questions
          </h2>
          <p className="text-center mt-4 max-w-2xl m-auto">
            Choose the plan that fits your academic journey.
          </p>
        </div>

        <div className="m-auto max-w-400 space-y-6">
          <Accordion
            question="Is FocusGrid really free?"
            answer="Yes! Our free plan includes core features like task management for up to 3 courses, study timer, and basic notes. You can upgrade to Pro anytime for advanced features."
          ></Accordion>
          <Accordion
            question="How does the study timer work?"
            answer="Absolutely! FocusGrid works perfectly on desktop, tablet and mobile. Our responsive design ensures a seamless experience across all devices. Native mobile apps coming soon!"
          ></Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-section bg-[#111827] px-6 md:px-12 ">
        <div className="max-w-400 m-auto flex flex-col md:flex-row justify-between space-y-12 gap-2 md:gap-12 ">
          <div className="space-y-6">
            <img src={focusgridLogoWhite} alt="" />
            <p>
              The ultimate productivity platform built specifically <br />
              for students. Organize your academic life, stay <br /> focused,
              and achieve your goals
            </p>
            <div className="social-icons flex  gap-3">
              <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-alt transition-all duration-300 ease-in-out cursor-pointer">
                <img src={twitter} alt="" />
              </div>
              <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-alt transition-all duration-300 ease-in-out cursor-pointer">
                <img src={linkedin} alt="" />
              </div>
              <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-alt transition-all duration-300 ease-in-out cursor-pointer">
                <img src={instagram} alt="" />
              </div>
              <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-alt transition-all duration-300 ease-in-out cursor-pointer">
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-white">Product</h3>
            <div className="text-[#8795A3] flex flex-col items-start gap-2">
              <a className='block text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#features">Features</a>
              <a className='block text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#pricing">Pricing</a>
              <a className='block text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Roadmap</a>
              <a className='block text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Changelog</a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white">Company</h3>
            <div className="text-[#8795A3] flex flex-col items-start gap-2">
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">About</a>
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Blog</a>
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Careers</a>
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Contact</a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white">Support</h3>
            <div className="text-[#8795A3] flex flex-col items-start gap-2">
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Help center</a>
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Documentation</a>
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">API</a>
              <a className='text-lg hover:text-primary transition-all duration-300 ease-in-out' href="#">Status</a>
            </div>
          </div>
        </div>

        <div className="max-w-400 m-auto h-0.5 rounded-full bg-[#D9D8D8]/5"></div>

        <div className="max-w-400 m-auto flex items-center justify-between mt-12">
          <div>
            <p className="text-sm">2025 FocusGrid. All rights reserved.</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Terms of Service</p>
            <p className="text-sm">Cookies Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landingpage;
