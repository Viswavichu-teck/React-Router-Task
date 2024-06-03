import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Component/All'
import Fsd from './Component/Fsd'
import Cyber from './Component/Cyber'
import Career from './Component/Career'
import Science from './Component/Science'
import Nav from './Component/Nav'
import "./index.css"
import { Navigate } from 'react-router-dom'

function App() {

  let data=[
    {
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      head: "Data science",
      description:
        "Are you someone who's not interested in coding, but wants to get placed in tech",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      date: "28 Nov, 2023",
      comment: "10 min Read",
    },
    {
      title: "10 Best Data Science Frameworks in 2024",
      head: "Data science",
      description:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
      date: "5 Aug, 2023",
      comment: "10 min Read",
    },
    {
      title: "Top Product-Based Companies for Data Science Freshers",
      head: "Data science",
      description:
        "In today's data-driven world, data science has emerged as a crucial field, with companies harnessing",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      date: "10 Nov,2023",
      comment: "10 min Read",
    },
    {
      title:
        "What is the Difference between Data Science and Data Engineering?",
      head: "Fcyber",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      date: "8 Nov, 2023 ",
      comment: "10 min Read",
    },
    {
      title:
        "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      head: "Data science",
      description:
        "Data science has become one of the most sought-after skills in the current job market.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/must-watch-data-science-focused-youtube-channels-1536x804.webp",
      date: "5 Aug, 2023",
      comment: "10 min Read",
    },
    {
      title: "Best Data Science Books to Learn in 2024",
      head: "Data science",
      description:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      date: "26 Oct, 2023",
      comment: "10 min Read",
    },
    {
      title:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      head: "Full Stack",
      description:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      date: "22 Jan, 2024",
      comment: "10 min Read",
    },
    {
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      head: "Full Stack",
      description:
        "When you're hiring a full-stack developer, what are the most important things you look for?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      date: "15 Nov, 2023",
      comment: "10 min Read",
    },
    {
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      head: "Full Stack",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      date: "15 Nov, 2023",
      comment: "10 min Read",
    },
    {
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      head: "Full Stack",
      description:
        "In the world of system design, envision a digital skyscraper - a multifaceted structure built",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      date: "10 Nov, 2023",
      comment: "10 min Read",
    },
    {
      title: "Best Books to Learn Full-Stack Development",
      head: "Full Stack",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      date: "9 Nov, 2023",
      comment: "10 min Read",
    },
    {
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      head: "Full Stack",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      date: "8 Nov,",
      comment: "10 min Read",
    },
    {
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      head: "Cyber security",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      date: "4 Dec, 2023",
      comment: "10 min Read",
    },
    {
      title: "What Is Hacking? Types of Hacking & More",
      head: "Cyber security",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      date: "25 Sep, 2023",
      comment: "10 min Read",
    },
    {
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      head: "Cyber security",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      date: "1 Mar, 2021",
      comment: "10 min Read",
    },
    {
      title: "8 Different Types of Cybersecurity and Threats Involved",
      head: "Cyber security",
      description:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      date: "08 Sep, 2023",
      comment: "10 min Read",
    },
    {
      title: "Cybersecurity vs Artificial Intelligence",
      head: "Cyber security",
      description:
        "Cybersecurity is an exponentially growing industry that is evolving to protect individuals & organizations from increasing cyber-attacks. Recently, The Artificial Intelligence(AI) Industry is playing a vital role in cybersecurity, improving the efficiency of various organizations & industries’ cybersecurity.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      date: "25 Sep, 2023",
      comment: "10 min Read",
    },
    {
      title: "Cybersecurity Vs Ethical Hacking",
      head: "Cyber security",
      description:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-768x432.png",
      date: "1 Mar, 2021",
      comment: "10 min Read",
    },
    {
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      head: "Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      date: "19 Jan, 2024",
      comment: "10 min Read",
    },
    {
      title: "Best 11 Product-Based Companies for Product Managers in India ",
      head: "Career",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      date: "14 Nov, 2023",
      comment: "10 min Read",
    },
    {
      title: "Top 5 IT Jobs for Economics Students",
      head: "Career",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      date: "4 Dec, 2023 ",
      comment: "10 min Read",
    },
    {
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      head: "Career",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      date: "2 Dec,2023",
      comment: "10 min Read",
    },
    {
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      head: "Career",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      date: "1 Dec, 2023",
      comment: "10 min Read",
    },
    {
      title: "Is Switching Careers From Non-Tech To Tech Challenging?",
      head: "Career",
      description:
        "This is the question that we as an EdTech with courses in Full Stack Development often face from our newly enrolled students. Seeing this confusion cropping around for a while now, we decided to jump in, with a quick answer, to this in-vogue query about the career switch from non-IT to IT. ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/10/Non-tech-to-Tech-How-difficult-is-that.png",
      date: "1 Dec, 2023",
      comment: "10 min Read",
    }
  ]
  return <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<All data={data}/>}/>
    <Route path='/fsd' element={<Fsd data={data}/>}/>
    <Route path='/cyber' element={<Cyber data={data}/>}/>
    <Route path='/career' element={<Career data={data}/>}/>
    <Route path='/science' element={<Science data={data}/>}/>
    <Route path="*" element={<Navigate to='/'/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App