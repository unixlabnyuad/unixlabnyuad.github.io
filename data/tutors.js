/*  1: Adilet
    2: Armaan
    3: Ayesha
    4: Desmond
    5: Lachlan
    6: Muhammad Anas
    7: Muhammad Hasin Shabbir
    8: Ngoc
    9: Nhi
    10: Omar
    11: Phillip
    12: Prince
    13: Sashank
    14: Shehryar
    15: Shreya
    16: Syed
    17: Vee
    18: Zyad
*/

var tutors = [
    {
        id: 1,
        name: "Adilet",
        bio: "Heyo. I'm a senior majoring in CS, minor in Applied Mathematics. Happy to help with any problem, core CS classes and major electives, also math. Feel free to reach out to me for coding in C/C++, functional programming in Haskell, database design, sql, algorithmic problem solving, blockchain (Solidity), who to support in F1, etc.",
        image: "images/tutors/adilet.jpg",
        email: "adilet@nyu.edu",
    },
    {
        id: 2,
        name: "Armaan",
        image: "images/tutors/armaan.jpeg",
        bio: "Hey! I am Armaan and I am a senior majoring in Computer Science and Film Practice with a minor in Applied Mathematics and Interactive Media. I am interested in Machine Learning, Blockchain, web and mobile development and would love to have a chat/ help you out with these topics. I am also a founder of a Fintech Startup and have worked in the industry as a Product Manager and Software Developer and can help you in that too!",
        email: "aa7385@nyu.edu",
    },
    {
        id: 3,
        name: "Ayesha",
        bio: "Hi!! My name is Ayesha and I am a senior majoring in Computer Science with minors in Economics and Applied Mathematics. You can reach out to me for coding in python, react, C/C++ and JavaScript and assembly; I can particularly offer help with data science and full-stack app development. Also, I’d be more than happy to just chat to help you figure out your major path/career choices/internships etc.",
        image: "images/tutors/ayesha.jpg",
        email: "az166@nyu.edu",
    },
    {
        id: 4,
        name: "Desmond",
        bio: "I’m a senior majoring in CS with a minor in Applied Math. I can help with C++, Python, JavaScript and the core computer science courses. I am passionate about mobile dev (Swift and Flutter) and web dev (MongoDB, Node+Express, Flask, React/Next) and will be happy to help you with that too. Feel free to also pass by if you just want a buddy for exam/interview prep or to discuss SWE internships.",
        image: "images/tutors/desmond.jpg",
        email: "doa240@nyu.edu",
    },
    {
        id: 5,
        name: "Lachlan",
        bio: "I'm a super-senior majoring in Computer Science with a background in quantitative development at high-frequency trading firms. I'm happy to help with the standard array of core CS and programming-heavy Engineering courses. Join me also if you're keen on interview prep for SWE or quant roles. ",
        image: "images/tutors/lachlan.jpeg",
        email: "lp2233@nyu.edu",
    },
    {
        id: 6,
        name: "Muhammad A",
        bio: "",
        image: "",
        email: "",
    },
    {
        id: 7,
        name: "Hasin",
        bio: "Hi, I'm a senior majoring in CS and minoring in Applied Mathematics. I would love to help you with anything in C++, Python, JavaScript, C, Full-stack Web Development (HTML/CSS, ReactJS, NodeJS, Express), or Data Science and Machine Learning tasks. Feel free to reach out to me regarding anything related to coding or CS, be it your Data Structures/Algorithms task, internships, coding competitions or algorithmic problem solving. Even if you have no idea where to start, connect with me and let's figure something out!",
        image: "images/tutors/hasin.jpeg",
        email: "mhs581@nyu.edu",
    },
    {
        id: 8,
        name: "Ngoc",
        bio: "I’m a senior majoring in Computer Science and minoring in Math and Interactive Media. I like working with data and would love to help you with improving Python skills and working with various data science libraries. I’m also learning frontend web development and iOS development, so feel free to come and talk to me about JavaScript and Swift and we can figure things out together!",
        image: "images/tutors/Ngoc.jpg",
        email: "nnh245@nyu.edu",
    },
    {
        id: 9,
        name: "Nhi",
        bio: "Hi there! I'm Nhi and I can help with Java, Python, C/C++, and SQL. Feel free to reach out to me with any problem (and we will struggle through it!) or just simply to say hi!",
        image: "images/tutors/Nhi.jpg",
        email: "nhi.pham@nyu.edu",
    },
    {
        id: 10,
        name: "Omar",
        bio: "Hi, I am a senior double majoring in Computer Science and Mathematics. I am happy to help you with questions related to algorithmic problems, Intro to CS, Algorithms, Data Structures, Discrete Math, CSO,  python, C/C++, and any math course. I am also happy to talk to you and help you with Natural Language Processing and text and data analysis using python.",
        image: "images/tutors/omar.jpg",
        email: "ok762@nyu.edu",
    },
    {
        id: 11,
        name: "Phillip",
        bio: "Hi, I am a senior majoring in Computer Science and minoring in Applied Math. I can help with Python, SQL, C++, Golang, and I am interested in distributed systems and DevOps. Feel free to reach out!",
        image: "images/tutors/Phillip.JPG",
        email: "pw1287@nyu.edu",
    },
    {
        id: 12,
        name: "Prince",
        bio: "Hi, I'm a senior majoring in Computer Science with a minor in Applied Mathematics. I am happy to help you with anything Python, C++/C, React, MongoDB or Flask. I leetcode a lot so feel free to reach out if you want an interview prep buddy or have a chat about Formula One, SWE internships or anything in general! I can be your sneaker plug too!",
        image: "images/tutors/prince.jpg",
        email: "pla252@nyu.edu",
    },
    {
        id: 13,
        name: "Sashank",
        bio: "Hi! I am a senior majoring in Computer Science and minoring in Interactive Media and Applied Mathematics. I would love to help you develop your skills in python, Javascript, and core CS concepts. Feel free to talk to me about Machine Learning, full-stack Web Development (MERN stack ), or just a chat in general. ",
        image: "images/tutors/Sashank.jpg",
        email: "ss13163@nyu.edu",
    },
    {
        id: 14,
        name: "Shehryar",
        bio: "Hello, world! As a Senior double-majoring in Computer Science and Mathematics, I’m happy to help with Python (e.g., data science frameworks), databases (e.g., MongoDB, MySQL/PostgreSQL, Firebase), and full-stack web development (e.g., HTML, CSS, JavaScript backend, React). Though it’s not my forte, we can also try exploring theory/proofing and/or C/C++ together. Love to help beginners and to talk about Formula One and hot sitcom takes!",
        image: "images/tutors/shehryarHanif.jpg",
        email: "shehryar.hanif@nyu.edu",
    },
    {
        id: 15,
        name: "Shreya",
        bio: "Hi everybody!! I am Shreya Goel, a senior year student at NYUAD pursuing a double major in Mathematics and Interactive Media with a minor in Computer Science. I really like logic and reasoning so I can help you out if you’re struggling with any of your assignments or projects. I know C++, Python, SQL, Java, HTML/CSS and Arduino. We can also work through anything else besides this if you want. I am here and happy to help. Swing by even if you want to chit chat or just say hi :)",
        image: "images/tutors/ShreyaGoel.jpg",
        email: "shreya.goel@nyu.edu",
    },
    {
        id: 16,
        name: "Syed",
        bio: "",
        image: "",
        email: "",
    },
    {
        id: 17,
        name: "Vee",
        bio: "I'm a senior majoring in Computer Science with a minor in Interactive Media. I can help with material covered in most computer science courses, including C/C++, Python, and JavaScript. Feel free to also reach out about choosing between careers in research and industry, web development, or working with data!",
        image: "images/tutors/vee.jpg",
        email: "vee.nis.ling@nyu.edu",
    },
    {
        id: 18,
        name: "Zyad",
        bio: "",
        image: "",
        email: "",
    },
]
