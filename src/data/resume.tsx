import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arsal Kamil",
  initials: "AK",
  url: "https://dillion.io",
  location: "Bandung, Jawa Barat",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "Fullstack learners who are also interested in AI and Nature 🍃.",
  summary:
    "As a dedicated student at Telkom University specializing in [Digital Marketing with a minor in Full-stack Development](#education), my academic journey is intertwined with hands-on experience in creating strategic collaborations. I honed my skills in [project management and digital solutions](#skills), contributing significantly to empowering local communities. My competencies extend to leveraging tools like [Figma, Canva and Davinci Resolve](https://www.linkedin.com/in/arsal-kamil-31j07004/), enhancing my analytical capabilities. With a commitment to continuous learning and a penchant for digital creativity, I am actively seeking innovative projects that align with my expertise in marketing and development.",
  avatarUrl: "/me3.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "TailwindCSS",
    "Git",
    "Figma",
    "Postgres",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arsalkamil317@gmail.com",
    tel: "+62812 2377 2339",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/arslkml",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arsal-kamil-31j07004/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/arslkml_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@arsville",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "arsalkamil317@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Firli Digital",
      href: "https://firlidigital.com/",
      badges: [],
      location: "Remote",
      title: "Digital Marketing Intern",
      logoUrl: "/firli.png",
      start: "Feb 2025",
      end: "June 2025",
      description:
        "As a Digital Marketing Intern, I managed to create 3 pieces of content per week, optimize on-page and off-page SEO, and contact 200 outdoor MSME producers in West Java to establish partnerships and brainstorm digital marketing strategies.",
    },
  ],
  education: [
    {
      school: "Telkom University",
      href: "https://dmm.telkomuniversity.ac.id/",
      degree: "D3 Digital Marketing",
      logoUrl: "/telu.png",
      start: "Sep 2022",
      end: "Aug 2025",
    },
    {
      school: "edX Online",
      href: "https://www.edx.org/learn/python/harvard-university-cs50-s-introduction-to-programming-with-python",
      degree: "CS50's Introduction to Programming with Python - Harvard University",
      logoUrl: "/edx.jpg",
      start: "Sep 2024",
      end: "Nov 2024",
    },
  ],
  projects: [
    {
      title: "PO Election",
      href: "https://poelection.my.id/",
      dates: "Sep 2024 - Dec 2024",
      active: true,
      description:
        "PO Election Bus Pariwisata hadir dengan website ini sebagai inovasi untuk memperluas promosi dan menjangkau pelanggan lebih efektif",
      technologies: [
        "Javascript",
        "Elementor",
        "Wordpress",
        "TailwindCSS",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://poelection.my.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/poelection.png",
      video: "",
    },
    {
      title: "Blok Ransel",
      href: "https://blokransel.my.id/",
      dates: "Mei 2023 - September 2023",
      active: true,
      description:
        "Pembuatan Website untuk UMKM Blok Ransel di daerah Margahayu Tengah",
      technologies: [
        "Javascript",
        "Elementor",
        "Wordpress",
        "TailwindCSS",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://blokransel.my.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blokransel.png",
      video: "",
    },
    {
      title: "Kaluargi Mobile Apps",
      href: "https://www.linkedin.com/in/arsal-kamil-31j07004/",
      dates: "Sep 2024 - Dec 2024",
      active: true,
      description:
        "Aku memutuskan untuk membuat aplikasi mobile untuk Kaluargi Coffee Shop. Aplikasi ini menghadirkan aplikasi mobile dengan desain UI/UX intuitif dan menarik, dirancang untuk pengalaman pemesanan yang mulus dan interaksi pelanggan yang menyenangkan.",
      technologies: [
        "Figma",
        "Eraser.io",
        "React Native",
        "Expo",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.linkedin.com/in/arsal-kamil-31j07004/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kaluargi.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Dicoding Certified React.js Developer",
      dates: "Agustus 25rd - September 25th, 2024",
      location: "Bandung, Indonesia",
      description:
        "Learn about building UI in React such as recognizing elements and components.",
      image:
        "dicoding.jfif",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/arslkml/react-intermediate-hooks",
        },
      ],
    },
    {
      title: "Dicoding Certified Front-End Web Developer",
      dates: "Desember 16th - January 16th, 2024-2025",
      location: "Bandung, Indonesia",
      description:
        "Learn the application of BOM and DOM on web pages. In addition, this module teaches DOM manipulation techniques using JavaScript",
      image:
        "dicoding.jfif",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Introduction to AI and Machine Learning",
      dates: "December 23rd - January 24th, 2024-2025",
      location: "Bandung, Indonesia",
      description:
        "Identify basic concepts about AI, present basic concepts about data and its utilization in AI development.",
      icon: "public",
      image:
        "dicoding.jfif",
      links: [],
    },
    {
      title: "Certified Web Programming Using JavaScript",
      dates: "June 21st - July 22nd, 2024",
      location: "Bandung, Indonesia",
      description:
        "JavaScript is a versatile, lightweight programming language primarily used to add dynamic and interactive elements to websites, making them more engaging and responsive",
      image:
        "dicoding.jfif",
      links: [],
    },
    {
      title: "P2MD (Program Pemberdayaan Masyarakat Desa)",
      dates: "February 21st - Desember 18th, 2023",
      location: "Bandung, Indonesia",
      description:
        "Program pemberdayaan masyarakat desa adalah upaya pemerintah desa untuk memanfaatkan seluruh potensi yang ada guna memajukan desa, mencakup berbagai bidang seperti pemerintahan, ekonomi, kesehatan, pendidikan, dan teknologi.",
      image:
        "kemdikbud.png",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://blokransel.my.id/"
        }
      ],
    },
    {
      title: "Color Grading with Davinci Resolve",
      dates: "Feb 17th, 2024 - Present",
      location: "Bandung, Indonesia",
      description: "Improving Color Grading with Davinci Resolve and Dehancer",
      image:
        "davinci.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://mattkennedy-69026.medium.com/davinci-resolve-the-best-editing-software-for-beginners-8c936b63f8ed",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/@arsville",
        },
      ],
    },
    {
      title: "Certified MICE Event 2024 - Telkom University Bandung",
      dates: "April 21st - June 21st, 2024",   
      location: "Bandung, Indonesia",
      description:
        "Layout & Decoration Division at Next Us - MICE 2024 Telkom University Bandung",
      image:
        "hmmp.jfif",
      links: [],
    },
  ],
} as const;
