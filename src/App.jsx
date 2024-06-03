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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb446mDmPpOE59eWDNPm4YReb0D92pCj-aNQ&s",
      date: "08 Sep, 2023",
      comment: "10 min Read",
    },
    {
      title: "Cybersecurity vs Artificial Intelligence",
      head: "Cyber security",
      description:
        "Cybersecurity is an exponentially growing industry that is evolving to protect individuals & organizations from increasing cyber-attacks. Recently, The Artificial Intelligence(AI) Industry is playing a vital role in cybersecurity, improving the efficiency of various organizations & industries’ cybersecurity.",
      image:
        "https://khojoindia.org/uploads/images/202305/image_870x_645629a14e5d5.jpg",
      date: "25 Sep, 2023",
      comment: "10 min Read",
    },
    {
      title: "Cybersecurity Vs Ethical Hacking",
      head: "Cyber security",
      description:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
      image:
        "https://intellipaat.com/blog/wp-content/uploads/2020/10/Cyber-Security-vs-Ethical-Hacking-Big.jpg",
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
        "data:image/jpeg;base64,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",
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