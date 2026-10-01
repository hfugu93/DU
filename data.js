/**
 * DU - Dhruv University
 * ध्रुव विश्वविद्यालय
 * Comprehensive Indian University Data Store
 * Motto: सा विद्या या विमुक्तये (Knowledge is that which liberates)
 * Brand: Dhruv University (DU) - Steadfast in Knowledge, Supreme in Innovation
 */

const CollegeData = {
  info: {
    name: "DU",
    hindiName: "ध्रुव विश्वविद्यालय",
    fullName: "Dhruv University",
    tagline: "सा विद्या या विमुक्तये | Steadfast in Knowledge, Supreme in Innovation",
    subTagline: "State Autonomous Technical & Research University | Approved by UGC & AICTE, New Delhi | Accredited 'A++' Grade by NAAC (CGPA 3.76) | NBA Accredited Engineering Programs",
    collegeCode: "University Code: DU-042 | AISHE Code: U-18492",
    established: 1994,
    ranking: "NIRF Top 20 Ranked Autonomous Engineering & Research University in India",
    campusArea: "50-Acre Lush Green Smart Tech-Park Campus",
    address: "Dhruv Knowledge City, Sector 12, Vidyanagar University Expressway Corridor",
    phone: "+91 (011) 2894-4500 / 4501",
    antiRaggingTollFree: "1800-180-5522 (National 24x7 Anti-Ragging Helpline)",
    tollFree: "1800-200-DHRUV (34788)",
    email: "admissions@dhruv.edu.in",
    website: "www.dhruv.edu.in",
    stats: {
      placementRate: "98.6%",
      highestPackage: "₹52.4 LPA",
      avgPackage: "₹13.2 LPA",
      recruitersCount: "420+",
      studentCount: "8,200+",
      alumniCount: "32,000+",
      facultyRatio: "1:14",
      researchPatents: "78+"
    }
  },

  director: {
    name: "Prof. (Dr.) Rajeshwar K. Srivastava",
    degrees: "Ph.D. (IIT Roorkee), M.Tech (IIT Delhi), FIE, SMIEEE",
    designation: "Vice Chancellor & Senior Professor of Electronics",
    message: "Namaste and welcome to Dhruv University (DU). Inspired by the eternal steadfastness of the Dhruv Tara (Polaris) and the sacred Vedic ethos of 'सा विद्या या विमुक्तये', our institution stands as a lighthouse of academic rigor, indigenous technological research, and ethical innovation. In our quest for a self-reliant Viksit Bharat, our scholars excel in national hackathons, global coding arenas, and high-impact patents. I invite you to embark on a transformative journey with Dhruv University.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },

  // 1. Next Upcoming Hackathons & Competitive Arena
  hackathons: [
    {
      id: "hack-01",
      title: "DU HackBlitz 2025: Grand 36-Hr National Hackathon",
      edition: "Season 5 • National Flagship",
      prizePool: "₹5,00,000 Cash Prizes + Incubation Grants",
      startDate: "2025-10-25T09:00:00",
      endDate: "2025-10-26T21:00:00",
      dateFormatted: "October 25 - 26, 2025 (36 Hours Non-Stop)",
      venue: "Dr. A.P.J. Abdul Kalam Bhavan & Tesla Supercomputing Hall",
      mode: "Hybrid (Online Prelims + On-Campus Finale)",
      teamSize: "2 - 4 Members per Team",
      badge: "Major National Event",
      status: "Registrations Open",
      isLiveSoon: true,
      description: "Bharat's premier student-driven technology showdown. Over 400 shortlisted university teams converge to solve high-impact national challenges with mentorship from engineers at Google DeepMind, Microsoft India, and ISRO.",
      tracks: [
        { name: "Generative AI & LLM Agents", icon: "fa-brain", desc: "Fine-tuning localized models for Indian healthcare, legal, and regional languages." },
        { name: "CleanTech & Green Grid", icon: "fa-solar-panel", desc: "Smart micro-grids, EV battery life optimization, and carbon footprint accounting." },
        { name: "Smart Agriculture for Rural Bharat", icon: "fa-wheat-awn", desc: "Computer vision crop disease diagnostic and edge IoT soil hydration networks." },
        { name: "FinTech & Central Digital Rupee (CBDC)", icon: "fa-indian-rupee-sign", desc: "Offline digital currency transactions and fraud detection on UPI rails." },
        { name: "Defense Tech & Autonomous Drones", icon: "fa-jet-fighter", desc: "Anti-drone acoustic mesh and swarm localization algorithms." }
      ],
      sponsors: ["Google Developers", "Microsoft Azure", "GitHub Education", "AWS Academy", "Postman", "Devfolio"],
      guidelines: [
        "Open to all enrolled engineering, diploma, and degree students nationwide.",
        "Pre-built full solutions not allowed; all code must be committed to GitHub during the hackathon window.",
        "Free lodging, meals, energy drinks, and cloud GPU credits provided to all finalists on Dhruv University campus."
      ]
    },
    {
      id: "hack-02",
      title: "Smart India Hackathon (SIH 2025) - DU Internal Campus Hackathon",
      edition: "Ministry of Education & AICTE Initiative",
      prizePool: "Nomination for National Grand Finale (₹1,00,000/Problem)",
      startDate: "2025-10-14T10:00:00",
      endDate: "2025-10-15T18:00:00",
      dateFormatted: "October 14 - 15, 2025",
      venue: "Visvesvaraya Innovation & FabLab Center",
      mode: "On-Campus Hackathon",
      teamSize: "6 Members (Mandatory 1 Female Scholar)",
      badge: "Govt. of India Initiative",
      status: "Problem Statements Released",
      isLiveSoon: true,
      description: "Internal university qualifying round to select the official 15 Dhruv University teams who will represent DU at the central Smart India Hackathon grand finals conducted by Ministry of Education.",
      tracks: [
        { name: "Smart Automation & Robotics", icon: "fa-robot", desc: "Robotic inspection for Indian Railways and oil pipelines." },
        { name: "Disaster Management & Telemetry", icon: "fa-hill-avalanche", desc: "Landslide early warning systems in Himalayan regions." },
        { name: "Heritage & Tourism AI", icon: "fa-monument", desc: "AR/VR 3D heritage reconstruction of ancient Indian monuments." }
      ],
      sponsors: ["Ministry of Education", "AICTE", "Persistent Systems"],
      guidelines: [
        "Each team must comprise 6 members with at least 1 female student.",
        "Select from official SIH problem statements published by various Indian ministries."
      ]
    },
    {
      id: "hack-03",
      title: "DU CodeSprint: ICPC & CodeChef Collegiate League 2025",
      edition: "Weekly Competitive Programming Arena",
      prizePool: "₹50,000 Monthly Cash Pool + Tech Swag",
      startDate: "2025-10-19T18:00:00",
      endDate: "2025-10-19T21:00:00",
      dateFormatted: "Every Sunday 6:00 PM - 9:00 PM",
      venue: "Online Coding Arena (HackerEarth / CodeChef)",
      mode: "Online Speed Coding Contest",
      teamSize: "Individual Participation",
      badge: "Weekly League",
      status: "Contest Live Every Sunday",
      isLiveSoon: false,
      description: "Intense 3-hour algorithmic contest featuring 6 challenging dynamic programming, graph theory, and mathematical problems. University ranks are updated live to prepare students for ICPC Regionals and Google Code Jam.",
      tracks: [
        { name: "Div 1: Advanced (Graphs, Segment Trees, DP)", icon: "fa-network-wired", desc: "For ratings 1800+ aiming for international ICPC berths." },
        { name: "Div 2: Intermediate (Binary Search, Math, Greedy)", icon: "fa-code", desc: "Ideal for 2nd & 3rd year engineering students." },
        { name: "Div 3: Freshers Cup (Data Structures & Loops)", icon: "fa-seedling", desc: "Specially tailored for 1st year beginners." }
      ],
      sponsors: ["CodeChef", "LeetCode Campus", "Atlassian"],
      guidelines: [
        "Strict anti-plagiarism automated checker with moss.",
        "Fastest accepted solutions gain bonus points."
      ]
    }
  ],

  // Competitive Exam Cells (GATE, IES, UPSC, CAT)
  competitiveExams: [
    {
      exam: "GATE 2026 (Graduate Aptitude Test in Engineering)",
      focus: "CSE, AI, ECE, Mechanical, Civil",
      facilities: "Daily evening mock series, previous 25-year solved papers bank, mentorship by IIT faculty alumni.",
      record: "42 Students in Top 500 AIR in GATE 2024 (Highest AIR: 24 in CSE)."
    },
    {
      exam: "ICPC (International Collegiate Programming Contest)",
      focus: "Algorithms, Number Theory, Advanced Data Structures",
      facilities: "Dedicated ICPC laboratory with high-speed terminals, weekend 5-hr simulated team contests.",
      record: "Dhruv University team ranked 8th in Amritapuri Regional Finals 2024."
    },
    {
      exam: "CAT / XAT / CMAT (Management Entrances)",
      focus: "Quantitative Aptitude, Data Interpretation, Verbal Ability",
      facilities: "Weekly sectional test papers, GD-PI preparation boot camps with IIM alumni.",
      record: "99.4 percentile achieved by BBA & B.Tech scholars securing IIM calls."
    }
  ],

  // 2. Campus Hotspots for "Explore Your College" Interactive Dashboard & 360 Tour
  campusHotspots: [
    {
      id: "academic-block",
      name: "Dr. A.P.J. Abdul Kalam Academic Bhavan",
      shortName: "Academic Bhavan",
      hindiShort: "कलाम शैक्षणिक भवन",
      icon: "fa-graduation-cap",
      tag: "Center of Learning",
      category: "Academic",
      coords: { x: 32, y: 38 },
      shortDesc: "6-storey smart learning tower housing 52 digital amphitheatre lecture halls, acoustic chambers, and NPTEL study centers.",
      specs: [
        { label: "Smart Classrooms", val: "52 Digital Theatres" },
        { label: "Seating Capacity", val: "3,600 Students" },
        { label: "Connectivity", val: "NKN 1-Gbps Optical Wi-Fi" },
        { label: "Features", val: "Smart IFP Interactive Panels, NPTEL Center" }
      ],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      panoramaImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
      details: "Named in honor of Bharat Ratna Dr. A.P.J. Abdul Kalam, this 6-storey academic complex features stepped amphitheatre lecture halls equipped with 4K touch displays, lecture capture for NPTEL/SWAYAM, and dedicated tutorial halls for competitive exams (GATE, CAT, IES).",
      amenities: ["Central Air Cooling", "Biometric Attendance Systems", "SWAYAM / NPTEL Local Chapter", "Wheelchair Friendly Ramps & Lifts", "High-speed Wi-Fi"]
    },
    {
      id: "tech-labs",
      name: "Sir M. Visvesvaraya Engineering & Supercomputing Hub",
      shortName: "Engineering Labs",
      hindiShort: "विश्वेश्वरैया लैब",
      icon: "fa-microchip",
      tag: "Skill & Innovation",
      category: "Research",
      coords: { x: 55, y: 28 },
      shortDesc: "Comprehensive laboratories for AI Supercomputing, CNC Workshops, IoT Systems, and Electric Vehicle (EV) testbeds.",
      specs: [
        { label: "Dedicated Labs", val: "36 Modern Labs" },
        { label: "Supercomputing", val: "NVIDIA DGX A100 AI Cluster" },
        { label: "Workshop & Foundry", val: "CNC Machines, Lathes, 3D Printers" },
        { label: "Industry Partners", val: "Tata Motors, Bosch, Intel, Texas Inst." }
      ],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      panoramaImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80",
      details: "Dedicated to Sir M. Visvesvaraya, these state-of-the-art laboratories foster practical engineering excellence. Featuring an NVIDIA Deep Learning cluster, industrial robotic arms, an authorized Bosch Automotive training bay, and an EV battery test bench for research and skill development.",
      amenities: ["NVIDIA Deep Learning Hub", "Bosch Automotive Center", "Texas Instruments IoT Lab", "Heavy Machinery CNC Shop", "Smart India Hackathon Testing Zone"]
    },
    {
      id: "central-library",
      name: "Saraswati Central Knowledge & Digital Library",
      shortName: "Saraswati Library",
      hindiShort: "सरस्वती केंद्रीय पुस्तकालय",
      icon: "fa-book-open-reader",
      tag: "Knowledge Repository",
      category: "Library",
      coords: { x: 72, y: 46 },
      shortDesc: "4-level knowledge sanctuary with over 135,000 print books, DELNET, IEEE, and 24/7 quiet study halls for GATE & IES.",
      specs: [
        { label: "Print Books", val: "135,000+ Textbooks" },
        { label: "E-Journals", val: "DELNET, IEEE, Springer, Shodhganga" },
        { label: "Reading Capacity", val: "950 Scholars" },
        { label: "Operating Hours", val: "8:00 AM - 11:30 PM (24x7 in Exams)" }
      ],
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
      panoramaImage: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1600&q=80",
      details: "The Saraswati Central Library houses exhaustive collections of technical books, reference standards (BIS, ASME, IEEE), previous university question papers, and competitive exam guides (UPSC, GATE, IES, GRE). Fully automated with RFID checkouts and digital Kindle stations.",
      amenities: ["RFID Automated Kiosks", "National Digital Library (NDLI) Node", "GATE & IES Preparation Wing", "DELNET Inter-Library Loan", "Reprography & Printing Center"]
    },
    {
      id: "sports-complex",
      name: "Major Dhyan Chand Sports Complex & Stadium",
      shortName: "Sports Complex",
      hindiShort: "ध्यानचंद क्रीड़ा परिसर",
      icon: "fa-volleyball",
      tag: "Athletics & Fitness",
      category: "Sports",
      coords: { x: 22, y: 72 },
      shortDesc: "Floodlit cricket stadium, FIFA-standard football ground, Kabaddi & Kho-Kho courts, and badminton arena.",
      specs: [
        { label: "Cricket Stadium", val: "Turf Pitch with Floodlights" },
        { label: "Indigenous Games", val: "Kabaddi & Kho-Kho Arenas" },
        { label: "Indoor Complex", val: "Wooden Badminton, TT, Chess" },
        { label: "Gymnasium", val: "Separate Boys & Girls AC Gym" }
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      panoramaImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80",
      details: "Honoring Indian sporting legend Major Dhyan Chand, our sports complex hosts state-level university tournaments. Equipped with turf cricket pitches, 400m synthetic athletic track, mud & mat Kabaddi arenas, basketball courts, and a qualified physical director.",
      amenities: ["Floodlit Cricket Ground", "National Standard Kabaddi Mat", "Indoor Wooden Badminton Courts", "Yoga & Meditation Hall", "Physiotherapy & Sports Clinic"]
    },
    {
      id: "student-hostel",
      name: "Vivekananda Boys & Gargi Girls Hostels",
      shortName: "Student Hostels",
      hindiShort: "विवेकानंद एवं गार्गी छात्रावास",
      icon: "fa-bed",
      tag: "Residential Campus",
      category: "Residential",
      coords: { x: 80, y: 78 },
      shortDesc: "Separate residential campuses with 24x7 security, RO purified water, Wi-Fi, and nutritious Indian mess.",
      specs: [
        { label: "Hostel Capacity", val: "3,600 Students" },
        { label: "Room Types", val: "Single, Double & Triple (AC / Non-AC)" },
        { label: "Security", val: "Warden, Guards & 24x7 CCTV" },
        { label: "Mess Facility", val: "Pure Veg & Jain Options Available" }
      ],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      panoramaImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80",
      details: "Vivekananda Boys Hostel and Gargi Girls Hostel offer secure, disciplined, and comfortable on-campus living. Featuring night study rooms, hot water solar systems, in-house health clinic with 24-hour ambulance on standby, and high-speed campus LAN network.",
      amenities: ["24x7 Security & CCTV", "Pure Drinking Water (RO)", "Resident Wardens & Faculty Quarters", "In-house Dispensary & Ambulance", "Badminton & Table Tennis in Courtyard"]
    },
    {
      id: "student-cafeteria",
      name: "Annapurna Cafeteria & Canteen",
      shortName: "Annapurna Canteen",
      hindiShort: "अन्नपूर्णा कैंटीन",
      icon: "fa-utensils",
      tag: "Hygienic Dining",
      category: "Dining",
      coords: { x: 48, y: 62 },
      shortDesc: "FSSAI-certified food court serving freshly cooked North & South Indian meals, snacks, samosa-chai, and Amul dairy.",
      specs: [
        { label: "Seating", val: "1,200 Seater Dining Hall" },
        { label: "Cuisine", val: "North Indian Thali, South Indian, Snacks" },
        { label: "Specialty Counters", val: "Amul Parlour, Nescafe Kiosk, Juice Bar" },
        { label: "Hygiene Standard", val: "FSSAI 5-Star Hygiene Certified" }
      ],
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80",
      panoramaImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
      details: "The Annapurna Canteen is the favorite student adda! Students enjoy wholesome, freshly prepared hot meals, including unlimited student thalis, crisp dosas, samosa, chai, and sandwiches at subsidized student-friendly prices.",
      amenities: ["FSSAI Certified Pure Veg Kitchen", "Special Jain Meal Counters", "Amul & Mother Dairy Outlets", "Outdoor Garden Seating", "Cashless UPI Payment Accepted"]
    },
    {
      id: "eco-park",
      name: "Tagore Open-Air Amphitheatre & Botanical Garden",
      shortName: "Tagore Amphitheatre",
      hindiShort: "टैगोर खुला मंच",
      icon: "fa-leaf",
      tag: "Culture & Greenery",
      category: "Recreation",
      coords: { x: 64, y: 18 },
      shortDesc: "2,500-capacity open stage for cultural festivals, street plays (Nukkad Natak), yoga sessions, and convocation ceremonies.",
      specs: [
        { label: "Audience Seating", val: "2,500 Capacity" },
        { label: "Solar Energy", val: "1.2 MW Rooftop Solar Grid" },
        { label: "Medicinal Garden", val: "150+ Ayurvedic & Native Plants" },
        { label: "Rainwater Harvesting", val: "100% Campus Water Recharging" }
      ],
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
      panoramaImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
      details: "Surrounded by neem, peepal, and gulmohar trees, the Rabindranath Tagore Amphitheatre hosts annual cultural fests, Saraswati Puja celebrations, Kavi Sammelans, Nukkad Natak, and the International Yoga Day sunrise sessions.",
      amenities: ["Acoustic Open Air Stage", "Ayurvedic Herbal Garden", "Solar Powered Campus Lighting", "Yoga & Pranayamic Lawn", "NSS Tree Plantation Grove"]
    }
  ],

  // 3. Interactive Courses Section Data (AICTE & UGC Approved)
  courses: [
    {
      id: "btech-cse-ai",
      title: "B.Tech in Artificial Intelligence & Machine Learning",
      department: "Engineering",
      deptKey: "engineering",
      level: "Undergraduate",
      levelKey: "ug",
      duration: "4 Years (8 Semesters)",
      eligibility: "10+2 with Physics, Mathematics & Chem/CS with minimum 60% aggregate. Valid JEE Main or State CET rank.",
      seats: "180 Seats",
      fees: "₹1,45,000 / Year (Merit Waivers up to 100%)",
      rating: 4.9,
      badge: "AICTE & NBA Tier-1",
      icon: "fa-brain",
      highlights: [
        "Curriculum co-designed with NVIDIA & AWS Academy",
        "Dedicated GPU Workstations & LLM fine-tuning cluster",
        "Mandatory 6-month industry internship in final year",
        "Average starting package: ₹14.8 LPA"
      ],
      syllabus: [
        { sem: "Sem 1-2", topics: "Engineering Maths, Data Structures in C++, Linear Algebra, Python for Data Science, Digital Logic" },
        { sem: "Sem 3-4", topics: "Design & Analysis of Algorithms, Database Systems, Machine Learning Foundations, Neural Networks, Computer Vision" },
        { sem: "Sem 5-6", topics: "Deep Learning, Natural Language Processing, Big Data Analytics with Spark, Cloud Computing, Generative AI" },
        { sem: "Sem 7-8", topics: "Reinforcement Learning, MLOps & Model Deployment, Capstone Research Project, Full-semester Internship" }
      ],
      careers: ["Machine Learning Engineer", "AI Research Scientist", "Data Scientist", "Computer Vision Specialist", "MLOps Architect"]
    },
    {
      id: "btech-cse-core",
      title: "B.Tech in Computer Science & Engineering",
      department: "Engineering",
      deptKey: "engineering",
      level: "Undergraduate",
      levelKey: "ug",
      duration: "4 Years (8 Semesters)",
      eligibility: "10+2 with PCM minimum 60%. Valid JEE Main or State CET score.",
      seats: "240 Seats",
      fees: "₹1,40,000 / Year",
      rating: 4.9,
      badge: "NBA Accredited Tier-1",
      icon: "fa-laptop-code",
      highlights: [
        "Ranked among top CSE programs in India",
        "Specialization tracks: Full-Stack Cloud, Cybersecurity, DevOps",
        "Annual Hackathon with ₹5 Lakhs cash prize pool",
        "Top offers from Google India, Microsoft, Atlassian, TCS Digital"
      ],
      syllabus: [
        { sem: "Sem 1-2", topics: "Calculus, Physics, Programming in C, Object-Oriented Java, Web Technologies Essentials" },
        { sem: "Sem 3-4", topics: "Data Structures, Computer Organization, Operating Systems, DBMS, Software Engineering & Agile" },
        { sem: "Sem 5-6", topics: "Computer Networks, Compiler Design, Distributed Systems, Cloud Architecture, Information Security" },
        { sem: "Sem 7-8", topics: "High Performance Computing, Microservices, Major Industry Project, Elective Specializations" }
      ],
      careers: ["Software Development Engineer (SDE)", "Cloud Architect", "Full Stack Developer", "Cybersecurity Analyst", "Systems Engineer"]
    },
    {
      id: "btech-robotics-ece",
      title: "B.Tech in Robotics & Smart Automation",
      department: "Engineering",
      deptKey: "engineering",
      level: "Undergraduate",
      levelKey: "ug",
      duration: "4 Years (8 Semesters)",
      eligibility: "10+2 with Physics, Mathematics, Chemistry (min 55% marks aggregate).",
      seats: "120 Seats",
      fees: "₹1,30,000 / Year",
      rating: 4.8,
      badge: "Industry 4.0 Lab",
      icon: "fa-robot",
      highlights: [
        "Hands-on training with KUKA & ABB 6-axis robotic arms",
        "Drone design and ROS (Robot Operating System) mastery",
        "Collaborative projects with automotive & defense sectors (Tata Motors, DRDO)",
        "100% placement track in Automation & IoT industries"
      ],
      syllabus: [
        { sem: "Sem 1-2", topics: "Engineering Mechanics, Circuit Theory, CAD Modeling, C++ Programming, Material Science" },
        { sem: "Sem 3-4", topics: "Kinematics & Dynamics of Machines, Analog & Digital Electronics, Sensors & Actuators, Microcontrollers" },
        { sem: "Sem 5-6", topics: "Industrial Automation & PLC, Robot Operating System (ROS), Computer Vision for Robotics" },
        { sem: "Sem 7-8", topics: "Autonomous Mobile Robots, Industrial IoT 4.0, Drone Systems, Capstone Project" }
      ],
      careers: ["Robotics Automation Engineer", "Mechatronics Specialist", "Embedded Firmware Engineer", "Industrial IoT Architect"]
    },
    {
      id: "mba-fintech-analytics",
      title: "MBA in Business Analytics & Financial Technology",
      department: "Management",
      deptKey: "management",
      level: "Postgraduate",
      levelKey: "pg",
      duration: "2 Years (4 Semesters)",
      eligibility: "Bachelor's Degree in any discipline with min 50%. CAT / MAT / CMAT / XAT / State CET score.",
      seats: "120 Seats",
      fees: "₹1,80,000 / Year",
      rating: 4.8,
      badge: "AICTE Approved",
      icon: "fa-chart-pie",
      highlights: [
        "Bloomberg Financial Market Lab access on campus",
        "Case study methodology & corporate leadership series",
        "Average package: ₹11.4 LPA with Morgan Stanley, Deloitte, HDFC, ICICI",
        "100% paid summer internship assistance"
      ],
      syllabus: [
        { sem: "Sem 1", topics: "Managerial Economics, Financial Accounting, Marketing Strategy, Organizational Behavior, Business Statistics" },
        { sem: "Sem 2", topics: "Corporate Finance, Operations & Supply Chain, PowerBI/Tableau, Predictive Analytics, Python for Finance" },
        { sem: "Sem 3", topics: "Fintech Ecosystems, Algorithmic Trading, Blockchain in Banking, Strategic Management, Summer Internship" },
        { sem: "Sem 4", topics: "Risk Analytics, Venture Capital & Private Equity, Consulting, Final Dissertation" }
      ],
      careers: ["Financial Risk Analyst", "Business Intelligence Consultant", "Product Manager - Fintech", "Investment Banking Associate"]
    },
    {
      id: "polytechnic-cse",
      title: "Polytechnic Diploma in Computer Engineering",
      department: "Polytechnic",
      deptKey: "polytechnic",
      level: "Diploma",
      levelKey: "diploma",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Standard (SSC) passed with Science and Mathematics (min 45% marks) or Lateral Entry after 10+2 / ITI.",
      seats: "120 Seats",
      fees: "₹45,000 / Year (DTE Govt. Subsidized)",
      rating: 4.7,
      badge: "Direct D2D Lateral Entry",
      icon: "fa-network-wired",
      highlights: [
        "Direct 2nd Year Lateral Entry (D2D) admission into B.Tech CSE upon completion",
        "Industry-focused practical workshops (80% practical labs, 20% theory)",
        "Skill certifications in Hardware, Networking, and Full Stack Web",
        "Excellent campus placement in tech service firms"
      ],
      syllabus: [
        { sem: "Sem 1-2", topics: "Applied Mathematics, Applied Physics, Fundamentals of IT, C Programming, Engineering Drawing" },
        { sem: "Sem 3-4", topics: "Data Structures using C++, Computer Hardware & Maintenance, Relational Databases, Web Technologies" },
        { sem: "Sem 5-6", topics: "Computer Networks & Security, Java Programming, Mobile Application Basics, Diploma Major Project" }
      ],
      careers: ["Junior Software Developer", "Network Technician", "IT Support Specialist", "B.Tech Lateral Entry Scholar"]
    },
    {
      id: "polytechnic-mech",
      title: "Polytechnic Diploma in Mechanical & EV Engineering",
      department: "Polytechnic",
      deptKey: "polytechnic",
      level: "Diploma",
      levelKey: "diploma",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Standard (SSC) passed with Science & Math (min 45% marks) or ITI certificate.",
      seats: "90 Seats",
      fees: "₹42,000 / Year",
      rating: 4.6,
      badge: "Direct D2D Lateral Entry",
      icon: "fa-gears",
      highlights: [
        "Electric Vehicle (EV) Powertrain & Battery testing workshop",
        "Certified CNC machine operating and AutoCAD/SolidWorks training",
        "Direct industrial internships with Tata Motors, Mahindra, and Bosch",
        "Seamless lateral entry (D2D) into B.Tech Mechanical 2nd Year"
      ],
      syllabus: [
        { sem: "Sem 1-2", topics: "Applied Mathematics, Engineering Mechanics, Workshop Practice, Material Science, Technical Drawing" },
        { sem: "Sem 3-4", topics: "Thermal Engineering, Manufacturing Processes, Fluid Mechanics & Machinery, CAD/CAM Foundations" },
        { sem: "Sem 5-6", topics: "Electric Vehicle Technology, Industrial Management & Safety, CNC Machining, Live Capstone Fabrication" }
      ],
      careers: ["EV Assembly Technician", "Junior Mechanical Engineer", "CNC Programmer", "B.Tech Lateral Entry Scholar"]
    }
  ],

  // 4. Smart Notice Board Data
  notices: [
    {
      id: "not-01",
      title: "Odd-Semester University Theory & Practical Examination Time-Table (Winter 2025)",
      category: "Examinations",
      catKey: "examinations",
      date: "Oct 04, 2025",
      isNew: true,
      priority: "Urgent",
      summary: "Detailed schedule for B.Tech, MBA, MCA, and Polytechnic Diploma Winter 2025 examinations. Examination Hall Tickets can be downloaded from the Student Portal from Oct 22 onwards.",
      downloadFile: "DU_Exam_TimeTable_Winter_2025.pdf",
      size: "1.4 MB",
      author: "Controller of Examinations, Dhruv University"
    },
    {
      id: "not-02",
      title: "DU HackBlitz 2025 Registrations Open: ₹5,00,000 Prize Pool (Tracks Released)",
      category: "Hackathons",
      catKey: "hackathons",
      date: "Oct 03, 2025",
      isNew: true,
      priority: "Important",
      summary: "36-Hour National Level Hackathon scheduled for October 25-26, 2025. Problem statements open in AI, CleanTech, Rural Bharat, and FinTech. Register your team of 2-4 members.",
      downloadFile: "DU_HackBlitz_2025_Rulebook.pdf",
      size: "2.1 MB",
      author: "Centre for Innovation & Incubation (DU-CII)"
    },
    {
      id: "not-03",
      title: "Campus Placement Phase-1: TCS Digital, Infosys, Tata Motors & L&T Registration Open",
      category: "Placements",
      catKey: "placements",
      date: "Oct 02, 2025",
      isNew: true,
      priority: "Important",
      summary: "Final year B.Tech, MCA & Polytechnic Diploma students with minimum 60% aggregate and no active backlogs must verify their resumes on the Placement Portal before October 12, 2025.",
      downloadFile: "DU_Phase1_Placements_2025.pdf",
      size: "890 KB",
      author: "Training & Placement Cell (DU T&P)"
    },
    {
      id: "not-04",
      title: "National Anti-Ragging Mandate & Zero-Tolerance Policy (UGC / AICTE Guidelines)",
      category: "Academic",
      catKey: "academic",
      date: "Sep 30, 2025",
      isNew: false,
      priority: "Urgent",
      summary: "Strict zero-tolerance policy against ragging. All newly admitted students and parents must submit the online anti-ragging undertaking at www.antiragging.in. Helpline: 1800-180-5522.",
      downloadFile: "Anti_Ragging_Affidavit_Circular.pdf",
      size: "420 KB",
      author: "Proctorial Board & Dean of Student Welfare"
    },
    {
      id: "not-05",
      title: "National Scholarship Portal (NSP) & State Post-Matric SC/ST/OBC Scholarships 2025-26",
      category: "Admissions",
      catKey: "admissions",
      date: "Sep 26, 2025",
      isNew: false,
      priority: "Important",
      summary: "Eligible SC, ST, OBC, EWS, and minority category students can apply for government tuition fee reimbursement and NSP Central Sector Scheme on the portal before November 15, 2025.",
      downloadFile: "NSP_Scholarship_Notice_2025.pdf",
      size: "620 KB",
      author: "Scholarship & Welfare Section, Dhruv University"
    }
  ],

  // 5. Events Calendar Data
  events: [
    {
      id: "evt-01",
      title: "DU HackBlitz 2025: 36-Hr National AI & Web3 Hackathon",
      type: "Hackathon",
      typeKey: "hackathon",
      date: "2025-10-25",
      time: "09:00 AM - 09:00 PM (36 Hours Continuous)",
      venue: "Dr. A.P.J. Abdul Kalam Bhavan & Tesla Labs",
      badge: "Flagship Hackathon",
      featured: true,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      description: "Our premier flagship national hackathon bringing 400+ finalist teams from IITs, NITs, and top universities. Cash prizes of ₹5,00,000, cloud GPU credits, and direct interview fast-tracks.",
      speakers: ["Dr. Sunita Rao (Director AI, Microsoft India)", "Shri Vikramaditya Roy (Former ISRO Scientist)"],
      seatsAvailable: 80,
      registrationFee: "Free for Dhruv University Scholars / ₹300 External Teams"
    },
    {
      id: "evt-02",
      title: "TARANG 2025: Dhruv University Cultural Fiesta & Dandiya Night",
      type: "Cultural",
      typeKey: "cultural",
      date: "2025-11-06",
      time: "05:00 PM - 11:00 PM (4-Day Fest)",
      venue: "Tagore Open-Air Amphitheatre",
      badge: "Star Night",
      featured: true,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      description: "A grand 4-day festival of music, street theatre (Nukkad Natak), classical Indian dance, Battle of Bands, and Grand Garba-Dandiya celebration with celebrity musical performances.",
      speakers: ["Renowned Bollywood & Sufi Playback Singer", "Sangeet Natak Akademi Awardees"],
      seatsAvailable: 2500,
      registrationFee: "Free with DU ID Card"
    },
    {
      id: "evt-03",
      title: "Inter-University Cricket & Kabaddi Championship 2025",
      type: "Sports",
      typeKey: "sports",
      date: "2025-10-24",
      time: "08:00 AM - 06:00 PM",
      venue: "Major Dhyan Chand Sports Complex",
      badge: "State Tournament",
      featured: false,
      image: "https://images.unsplash.com/photo-1531415074868-036b1c5f53ec?auto=format&fit=crop&w=800&q=80",
      description: "32 collegiate teams battle for the prestigious Dhruv Silver Trophy across T20 cricket, mat Kabaddi, Kho-Kho, volleyball, and 100m sprint athletic events.",
      speakers: ["Chief Guest: Arjuna Awardee Sports Veteran"],
      seatsAvailable: 800,
      registrationFee: "Team Entry via Physical Education Dept."
    },
    {
      id: "evt-04",
      title: "Masterclass: Cracking GATE 2026 & ICPC Algorithm Optimization",
      type: "Workshop",
      typeKey: "workshop",
      date: "2025-10-18",
      time: "10:00 AM - 04:30 PM",
      venue: "Seminar Hall 3B, Ramanujan Block",
      badge: "Competitive Masterclass",
      featured: false,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "Intensive training on dynamic programming, segment trees, computational geometry, and multi-threaded problem solving led by past GATE AIR-1 and ICPC world finalists.",
      speakers: ["Er. Kunal Deshmukh (GATE AIR-4, IISc Alumni)"],
      seatsAvailable: 60,
      registrationFee: "Complimentary for DU Students"
    }
  ],

  // 6. Mock Student Dashboard Data (Aarav Sharma - Dhruv University)
  studentProfile: {
    name: "Aarav Sharma",
    rollNumber: "DU-2023-CS-042",
    enrollmentNo: "230420107055",
    program: "B.Tech in Artificial Intelligence & ML",
    semester: "Semester 5 (Autumn / Odd Sem 2025)",
    mentor: "Dr. K. S. Venkatesh (Associate Professor)",
    email: "aarav.sharma@student.dhruv.edu.in",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    academicStatus: "Regular - Eligible for University Exams",
    overallAttendance: 87.4,
    currentCGPA: 8.92,
    creditsEarned: 104,
    totalRequiredCredits: 160,
    attendanceBreakdown: [
      { subject: "Deep Learning & Neural Networks", code: "AI-301", attended: 38, total: 42, percent: 90.5, status: "Eligible" },
      { subject: "Design & Analysis of Algorithms", code: "CS-302", attended: 35, total: 40, percent: 87.5, status: "Eligible" },
      { subject: "Natural Language Processing", code: "AI-303", attended: 32, total: 38, percent: 84.2, status: "Eligible" },
      { subject: "Cloud Architecture & DevOps", code: "CS-304", attended: 33, total: 36, percent: 91.6, status: "Eligible" },
      { subject: "Robotics & Computer Vision Lab", code: "AI-305L", attended: 18, total: 20, percent: 90.0, status: "Eligible" },
      { subject: "Indian Constitution & Professional Ethics", code: "HS-306", attended: 22, total: 30, percent: 73.3, status: "Warning (<75%)" }
    ],
    timetableToday: [
      { time: "09:00 AM - 10:00 AM", subject: "Deep Learning (Lecture)", room: "TB-204", professor: "Dr. Ananya Ray", isOngoing: false, isCompleted: true },
      { time: "10:15 AM - 11:15 AM", subject: "Algorithms Lab (Practical)", room: "Lab-3, Visvesvaraya Block", professor: "Prof. R. Sengupta", isOngoing: true, isCompleted: false },
      { time: "11:30 AM - 12:30 PM", subject: "Natural Language Processing", room: "TB-204", professor: "Dr. K. S. Venkatesh", isOngoing: false, isCompleted: false },
      { time: "01:30 PM - 03:00 PM", subject: "Cloud & Containerization Lab", room: "Tesla Cloud Lab", professor: "Er. Tanya Malik", isOngoing: false, isCompleted: false }
    ],
    assignments: [
      {
        id: "asg-1",
        title: "Implementation of Transformer Self-Attention from Scratch",
        course: "Deep Learning & Neural Networks",
        due: "Oct 08, 2025 (in 4 days)",
        status: "Pending",
        maxMarks: 50,
        submissionUrl: "#"
      },
      {
        id: "asg-2",
        title: "Dynamic Programming Graph Optimization Problem Set",
        course: "Design & Analysis of Algorithms",
        due: "Oct 12, 2025 (in 8 days)",
        status: "Submitted",
        maxMarks: 30,
        submittedOn: "Oct 02, 2025",
        grade: "Awaiting Evaluation"
      },
      {
        id: "asg-3",
        title: "Fine-Tuning Llama-3 for Medical Domain Q&A (Mini-Project)",
        course: "Natural Language Processing",
        due: "Sep 28, 2025",
        status: "Graded",
        maxMarks: 100,
        scored: 96,
        grade: "A+ (96/100)",
        remarks: "Excellent problem solving and concise parameter-efficient LoRA implementation."
      }
    ],
    resultsSummary: [
      { sem: "Semester 1", gpa: 8.80, credits: 24, status: "Passed with Distinction" },
      { sem: "Semester 2", gpa: 9.05, credits: 26, status: "Passed with Distinction" },
      { sem: "Semester 3", gpa: 8.75, credits: 26, status: "Passed with Distinction" },
      { sem: "Semester 4", gpa: 9.10, credits: 28, status: "Passed with Distinction" }
    ],
    feeDetails: {
      totalAnnualFee: "₹1,45,000",
      paidSoFar: "₹1,45,000",
      pendingDues: "₹0.00",
      status: "All Academic Dues Cleared",
      receiptNo: "DU-FEE-2025-88912",
      paidDate: "18-July-2025 (Net Banking)"
    }
  },

  // 7. Achievements Showcase
  achievements: [
    {
      id: "ach-1",
      category: "Hackathon",
      catKey: "hackathon",
      title: "1st Place Winner - Smart India Hackathon (SIH 2024 Hardware Edition)",
      award: "National Champions (₹1,00,000 Cash Award by Govt. of India)",
      team: "Team 'DhruvSync' (DU AI & Robotics)",
      mentor: "Dr. K. S. Venkatesh",
      year: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      desc: "Developed an autonomous pipeline inspection rover utilizing ultrasonic acoustic anomaly detection and edge AI for Indian Oil Corporation Limited (IOCL)."
    },
    {
      id: "ach-2",
      category: "Research & Patents",
      catKey: "research",
      title: "Indian & US Patent: Low-Power Neuromorphic Edge Vision Sensor",
      award: "Indian Patent #492812 & US Patent #11928471B2",
      team: "Prof. Tanya Malik & Student Research Cohort",
      mentor: "Dhruv Center for Embedded Intelligence",
      year: "2025",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      desc: "Innovative spiking neural circuit design reducing inference energy by 82% on autonomous agricultural micro-drones for crop yield prediction in rural India."
    },
    {
      id: "ach-3",
      category: "Sports",
      catKey: "sports",
      title: "Gold Medal - All India Inter-University Badminton Men's Championship",
      award: "National Gold Trophy",
      team: "Rohit Verma (B.Tech Mechanical, 3rd Year)",
      mentor: "Coach Devendra Chahal",
      year: "2025",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      desc: "Consecutive straight-set victories over defending champions in the national finals, selected for the Indian World University Games delegation."
    },
    {
      id: "ach-4",
      category: "Placements & Career",
      catKey: "placements",
      title: "Record Package: ₹52.4 LPA Super Dream Offer from Atlassian",
      award: "Highest International Offer",
      team: "Pooja Hegde (B.Tech CSE, Batch 2025)",
      mentor: "Training & Placement Cell, Dhruv University",
      year: "2025",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      desc: "Secured prestigious Site Reliability & Cloud Infrastructure role following an exemplary performance in the 6-month pre-placement fellowship."
    }
  ],

  // 8. Placement Section (Indian Recruiter Ecosystem)
  placements: {
    stats: [
      { label: "Placement Rate", value: "98.6%", sub: "Over 1,480 Offers Made" },
      { label: "Highest Package", value: "₹52.4 LPA", sub: "Offered by Atlassian" },
      { label: "Average Package", value: "₹13.2 LPA", sub: "Top 20% Avg: ₹22.8 LPA" },
      { label: "Recruiting Partners", value: "420+", sub: "Top Indian IT, PSUs & MNCs" }
    ],
    recruiters: [
      { name: "Google India" },
      { name: "Microsoft India" },
      { name: "Amazon India" },
      { name: "Atlassian" },
      { name: "TCS Digital" },
      { name: "Infosys Wingspan" },
      { name: "Larsen & Toubro" },
      { name: "Tata Motors" },
      { name: "Bharat Electronics (BEL)" },
      { name: "Morgan Stanley" },
      { name: "Deloitte India" },
      { name: "Cisco Systems" },
      { name: "Wipro Turbo" },
      { name: "Mahindra & Mahindra" }
    ],
    alumniSuccess: [
      {
        name: "Priya Sundaram",
        batch: "Batch of 2018 (B.Tech CSE)",
        role: "Staff Software Engineer, Google",
        location: "Bengaluru, India",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        quote: "The intense competitive coding hackathons and GATE coaching at Dhruv University gave me the foundational problem-solving chops to clear Google interviews smoothly."
      },
      {
        name: "Devratn Chandel",
        batch: "Batch of 2019 (B.Tech Mech & Robotics)",
        role: "Founder & CEO, Aeroflux Dynamics (Make In India Startup)",
        location: "Bengaluru, India",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        quote: "Our autonomous drone startup was born inside Dhruv University's Visvesvaraya FabLab. The college incubation cell gave us seed funding and patent filing support under the Startup India mission."
      },
      {
        name: "Shreya Mukherjee",
        batch: "Batch of 2020 (B.Tech ECE)",
        role: "Scientist / Engineer 'SC', ISRO",
        location: "ISRO Satellite Center, Bengaluru",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
        quote: "DU's guidance for GATE and national research conferences gave me the wings to pursue my childhood dream of serving our nation's space exploration program at ISRO."
      }
    ]
  },

  // 9. Clubs & Communities (Indian College Culture, NSS, NCC, Cultural)
  clubs: [
    {
      id: "club-devs",
      name: "DU DevSociety & Open Source Guild",
      category: "Technology",
      icon: "fa-terminal",
      members: "720+ Active Coders",
      lead: "Karthik Nair (President)",
      description: "Premier coding community organizing weekly LeetCode / CodeChef contests, Smart India Hackathon training, open-source Git workshops, and web dev boot camps.",
      upcomingEvent: "HackBlitz Preparation Sprint - Oct 14",
      meetingTime: "Wednesdays 4:30 PM @ Visvesvaraya Lab 2",
      tags: ["Competitive Programming", "Python", "Web3", "AI"]
    },
    {
      id: "club-nss",
      name: "National Service Scheme (NSS Unit #DU-042)",
      category: "Social Service",
      icon: "fa-hand-holding-heart",
      members: "450+ Volunteers",
      lead: "Prof. S. K. Joshi (NSS Program Officer)",
      description: "Committed to community service, blood donation camps, digital literacy in rural schools, tree plantations, and Swachh Bharat Abhiyan campaigns.",
      upcomingEvent: "Mega Blood Donation & Health Camp - Oct 20",
      meetingTime: "Saturdays 08:30 AM @ Student Center",
      tags: ["Swachh Bharat", "Social Impact", "Blood Donation", "Literacy"]
    },
    {
      id: "club-ncc",
      name: "National Cadet Corps (NCC Army Wing)",
      category: "Defense & Discipline",
      icon: "fa-shield-halved",
      members: "160+ Cadets (Boys & Girls)",
      lead: "Lt. Dr. R. B. Mishra (Associate NCC Officer)",
      description: "Instilling leadership, patriotism, weapon training, drill, and Republic Day Camp (RDC) preparation under the Ministry of Defence.",
      upcomingEvent: "Annual Combined Cadre Camp - Nov 02",
      meetingTime: "Tuesdays & Thursdays 06:00 AM @ Parade Ground",
      tags: ["Discipline", "Leadership", "Drill", "Defense Services"]
    },
    {
      id: "club-cultural",
      name: "Natraj Cultural, Dance & Drama Society",
      category: "Arts & Culture",
      icon: "fa-masks-theater",
      members: "580+ Members",
      lead: "Aditya Roy (Cultural Secretary)",
      description: "The creative heartbeat of DU celebrating classical music, street plays (Nukkad Natak), folk dances (Garba, Bhangra, Kathak), and inter-collegiate youth festivals.",
      upcomingEvent: "State Level Nukkad Natak Competition - Oct 26",
      meetingTime: "Tuesdays & Fridays @ Tagore Amphitheatre",
      tags: ["Nukkad Natak", "Classical Dance", "Folk Music", "Fine Arts"]
    }
  ],

  // 10. Student Life Gallery
  gallery: [
    {
      id: "gal-1",
      category: "campus",
      title: "Morning Assembly & Tricolor at Dhruv Administrative Bhavan",
      caption: "The majestic administrative building of Dhruv University surrounded by green landscaped lawns.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-2",
      category: "festivals",
      title: "TARANG Annual Fest & Dandiya Celebration",
      caption: "Thousands of students rejoicing in traditional Indian attire during the festive nights.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-3",
      category: "clubs",
      title: "Robocon Team Fabricating Indigenous Rover",
      caption: "Hands-on machine testing late night at the Visvesvaraya Advanced Workshop.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-4",
      category: "sports",
      title: "Inter-Collegiate Floodlit Cricket Championship",
      caption: "High energy match under the floodlights at Major Dhyan Chand Sports Complex.",
      image: "https://images.unsplash.com/photo-1531415074868-036b1c5f53ec?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-5",
      category: "fests",
      title: "DU HackBlitz 36-Hour National Hackathon Hall",
      caption: "Energetic student teams coding through the night to build smart digital solutions.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-6",
      category: "campus",
      title: "Saraswati Central Knowledge Library",
      caption: "Peaceful environment supporting deep academic focus and GATE/IES study groups.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-7",
      category: "student-activities",
      title: "Nukkad Natak Performance at Open Amphitheatre",
      caption: "Thought-provoking social street theatre staged by Natraj Cultural Guild.",
      image: "https://images.unsplash.com/photo-1460518451282-474b15672083?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-8",
      category: "student-activities",
      title: "International Yoga Day Celebrations",
      caption: "Over 1,500 students and professors practicing holistic yoga at sunrise.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  // 11. AI Chatbot Knowledge Base
  faqKnowledge: [
    {
      keywords: ["admission", "apply", "eligibility", "process", "criteria", "how to join", "application", "d2d", "lateral", "dhruv"],
      response: `**Admissions for Academic Session 2025-26 at Dhruv University (DU) are currently OPEN!**
- **B.Tech (Degree):** 10+2 with PCM (min 60%). Admissions through **JEE Main rank** or **State CET** counseling (DU Code: **042**).
- **Direct 2nd Year Lateral Entry (D2D):** Polytechnic Diploma or B.Sc graduates are eligible for direct admission into 2nd year B.Tech!
- **Polytechnic Diploma:** 10th Standard (SSC) passed with Science & Math (min 45%).
- **MBA / MCA:** Graduation with 50% + valid CAT / MAT / CMAT / State CET score.
- **How to apply:** Click on **"Admissions 2025"** or register on this portal. Government scholarships & tuition waivers up to 100% available!`
    },
    {
      keywords: ["hackathon", "hackblitz", "sih", "contest", "coding", "icpc", "gate", "competetive", "competitive"],
      response: `**⚡ Dhruv University (DU) Competitive Arena & Hackathons:**
- 🚀 **DU HackBlitz 2025 (Oct 25-26):** 36-Hour National Hackathon with **₹5,00,000 in cash prizes** across AI/LLM, CleanTech, Rural Bharat, and FinTech tracks!
- 🇮🇳 **Smart India Hackathon (SIH 2025):** Internal college elimination rounds on Oct 14-15 to select 15 teams for the Ministry of Education Grand Finale.
- 💻 **DU CodeSprint (Every Sunday 6 PM):** Weekly CodeChef & LeetCode collegiate contests for ICPC regional qualification.
- 🎯 **GATE 2026 Preparation Wing:** Daily mock tests, 25-year solved question banks, and faculty mentorship (42 scholars in AIR Top 500!).
You can view problem tracks and register your hackathon team directly in the **"Competitive Arena"** section!`
    },
    {
      keywords: ["fee", "fees", "cost", "scholarship", "tuition", "nsp", "hostel fee"],
      response: `**Annual Fee Structure & Scholarships at Dhruv University:**
- **B.Tech (AI / CSE):** ₹1,40,000 - ₹1,45,000 per academic year.
- **B.Tech (Robotics / Mechanical):** ₹1,30,000 per year.
- **MBA (Fintech & Analytics):** ₹1,80,000 per year.
- **Polytechnic Diploma:** ₹42,000 - ₹45,000 per year (DTE Subsidized).
- **Vivekananda & Gargi Hostels:** ₹80,000 - ₹1,15,000/year (Includes 4 daily meals in Indian pure veg mess).
- **Scholarships:** 100% tuition waiver for JEE Rankers (<50,000), National Scholarship Portal (NSP), State Post-Matric SC/ST/OBC scholarships, and Pragati Scheme for Girls!`
    },
    {
      keywords: ["ragging", "anti-ragging", "complaint", "safety", "women"],
      response: `**Zero-Tolerance Anti-Ragging Policy at Dhruv University:**
DU strictly complies with Supreme Court & UGC Anti-Ragging directives:
- **National Anti-Ragging Toll-Free Helpline:** **1800-180-5522** (24x7)
- **University Proctorial Board:** +91 (011) 2894-4500 (Ext. 108)
- **Email:** antiragging@dhruv.edu.in
- Ragging is a cognizable criminal offense punishable with immediate expulsion and FIR filing. Our campus is 100% ragging-free.`
    },
    {
      keywords: ["placement", "package", "salary", "recruiters", "companies", "highest package", "average package"],
      response: `**Dhruv University (DU) Placement Highlights (2024-25 Batch):**
- **Placement Track:** **98.6%** across all eligible departments.
- **Highest International Package:** **₹52.4 LPA** (Atlassian).
- **Average Package:** **₹13.2 LPA** (Top 20% cohort average: ₹22.8 LPA).
- **Premier Recruiters:** Google India, Microsoft, Amazon India, TCS Digital, Infosys, Larsen & Toubro, Tata Motors, Bharat Electronics (BEL), Deloitte, Morgan Stanley.
- Over **420+ companies** visited DU campus offering 1,480+ placement letters!`
    },
    {
      keywords: ["hostel", "mess", "stay", "accommodation", "canteen", "veg", "food"],
      response: `**Vivekananda & Gargi Hostels & Annapurna Canteen:**
- **Separate Hostels:** 24x7 security, biometric access, and resident faculty wardens.
- **Food:** Pure vegetarian dining hall with authentic North and South Indian menus (Breakfast, Lunch, High Tea, Dinner), plus dedicated Jain food options.
- **Annapurna Canteen:** FSSAI 5-star certified cafeteria serving fresh samosa-chai, dosas, thalis, and official Amul dairy products at subsidized rates.`
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.CollegeData = CollegeData;
}
