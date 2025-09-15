import { Palette, CodeXml, Smartphone, Store, Camera, Brain } from "lucide-react"

export const servicesData = [
    {
        id: 1,
        title: "Design & Visual",
        icon: Palette,
        description: "We craft modern and professional designs that highlight your brand's uniqueness. From logos to full identity kits, we make visuals that truly connect.",
        subservices: [
            {
                id: 11,
                name: "System Design",
                description: "We create scalable and efficient design systems that ensure consistency across all digital and print platforms. This helps your brand maintain a professional look, improves collaboration between teams, and strengthens recognition in the market.",
                price: "$2,500 - $8,000",
                timeline: "3-6 weeks",
                features: ["Design tokens", "Component library", "Style guidelines", "Documentation"]
            },
            {
                id: 12,
                name: "UI/UX Design",
                description: "Our user interface and experience design focuses on simplicity, usability, and delight. By mapping user journeys and optimizing touchpoints, we enhance engagement and loyalty, which ultimately grows your brand's long-term value.",
                price: "$1,500 - $5,000",
                timeline: "2-4 weeks",
                features: ["User research", "Wireframing", "Prototyping", "User testing"]
            },
            {
                id: 13,
                name: "Graphic Design",
                description: "We produce impactful visuals — from logos to promotional assets — that communicate your brand's personality. Strong graphic design elevates your presence across campaigns, social media, and marketing materials, building emotional connections with customers.",
                price: "$500 - $3,000",
                timeline: "1-3 weeks",
                features: ["Logo design", "Brand assets", "Print materials", "Digital graphics"]
            },
            {
                id: 14,
                name: "IT Audit & Consulting",
                description: "We analyze and evaluate your IT ecosystem to ensure security, compliance, and efficiency. By streamlining systems, we enable brands to innovate faster and allocate resources more effectively toward growth and market expansion.",
                price: "$3,000 - $10,000",
                timeline: "4-8 weeks",
                features: ["Security assessment", "Performance audit", "Compliance check", "Recommendations"]
            }
        ]
    },

    {
        id: 2,
        title: "Web Development",
        icon: CodeXml,
        description: "We build responsive, fast, and secure websites that deliver seamless experiences. From company profiles to e-commerce, our solutions grow with your business.",
        subservices: [
            {
                id: 21,
                name: "Frontend Development",
                description: "We build modern, responsive, and interactive interfaces that reflect your brand identity. Optimized performance and appealing visuals improve user trust, which is crucial for scaling your brand's digital presence.",
                price: "$2,000 - $8,000",
                timeline: "2-6 weeks",
                features: ["Responsive design", "React/Vue.js", "Performance optimization", "Cross-browser compatibility"]
            },
            {
                id: 22,
                name: "Backend Development",
                description: "We develop secure, scalable server-side applications that ensure smooth operations behind the scenes. A solid backend supports sustainable growth by making sure your business runs efficiently as traffic and demand increase.",
                price: "$3,000 - $12,000",
                timeline: "3-8 weeks",
                features: ["API development", "Database design", "Security implementation", "Scalable architecture"]
            },
            {
                id: 23,
                name: "Maintenance & Support",
                description: "We provide continuous monitoring, updates, and improvements to keep your website secure and reliable. A stable online presence is essential to retain customers and reinforce brand reputation.",
                price: "$200 - $1,000/month",
                timeline: "Ongoing",
                features: ["Regular updates", "Security monitoring", "Performance optimization", "24/7 support"]
            },
            {
                id: 24,
                name: "SEO Optimization",
                description: "We implement strategies to improve your search engine rankings and organic visibility. This drives more qualified traffic, boosts conversions, and positions your brand as a leader in its industry.",
                price: "$800 - $3,000/month",
                timeline: "3-6 months",
                features: ["Keyword research", "On-page optimization", "Technical SEO", "Analytics reporting"]
            }
        ]
    },

    {
        id: 3,
        title: "Mobile App Development",
        icon: Smartphone,
        description: "We develop intuitive mobile applications for both Android and iOS platforms. Our apps are designed for performance and focused on user satisfaction.",
        subservices: [
            {
                id: 31,
                name: "Mobile Apps Development",
                description: "We design and build cross-platform apps that ensure consistent user experiences across devices. This helps brands expand reach and create stronger engagement in competitive digital markets.",
                price: "$8,000 - $25,000",
                timeline: "8-16 weeks",
                features: ["Cross-platform development", "Native performance", "App store deployment", "User analytics"]
            },
            {
                id: 32,
                name: "Android Development",
                description: "We develop native Android apps tailored to different industries, optimized for performance and usability. Strong Android presence gives your brand access to one of the largest user bases worldwide.",
                price: "$5,000 - $20,000",
                timeline: "6-12 weeks",
                features: ["Native Android", "Material Design", "Google Play optimization", "Device compatibility"]
            },
            {
                id: 33,
                name: "iOS Development",
                description: "We create premium iOS apps with seamless integration into Apple's ecosystem. This not only elevates user trust but also positions your brand in high-value markets where quality matters most.",
                price: "$6,000 - $22,000",
                timeline: "6-14 weeks",
                features: ["Native iOS", "Human Interface Guidelines", "App Store optimization", "iOS ecosystem integration"]
            },
            {
                id: 34,
                name: "Maintenance & Support",
                description: "We provide updates, patches, and performance enhancements to keep your app secure and relevant. Consistent improvements maintain user satisfaction and ensure your brand adapts to market changes.",
                price: "$500 - $2,000/month",
                timeline: "Ongoing",
                features: ["Regular updates", "Bug fixes", "Performance monitoring", "Feature enhancements"]
            }
        ]
    },

    {
        id: 4,
        title: "Digital Marketing",
        icon: Store,
        description: "We help brands grow with data-driven strategies. From SEO and paid ads to social media, we maximize your online presence and reach the right audience.",
        subservices: [
            {
                id: 41,
                name: "Ads Management",
                description: "We design and manage targeted advertising campaigns that maximize ROI. Through precision targeting, your brand connects with the right audience, increasing awareness and accelerating growth.",
                price: "$1,000 - $5,000/month",
                timeline: "Ongoing",
                features: ["Campaign strategy", "Ad creation", "Audience targeting", "Performance optimization"]
            },
            {
                id: 42,
                name: "Content Marketing Strategy",
                description: "We build strategic content plans that align with your brand's goals. Quality storytelling drives engagement, strengthens brand voice, and builds trust that translates into customer loyalty.",
                price: "$1,500 - $4,000/month",
                timeline: "Ongoing",
                features: ["Content strategy", "Editorial calendar", "Content creation", "Performance tracking"]
            },
            {
                id: 43,
                name: "Social Media Management",
                description: "We handle content creation, scheduling, and engagement across platforms. Consistent activity ensures your brand remains visible, relevant, and closely connected to its audience.",
                price: "$800 - $3,000/month",
                timeline: "Ongoing",
                features: ["Content creation", "Social scheduling", "Community management", "Analytics reporting"]
            },
            {
                id: 44,
                name: "Brand Scaling Strategy",
                description: "We combine analytics, market insights, and creative execution to expand your brand's reach. This data-driven approach ensures sustainable growth and positions your brand as a market leader.",
                price: "$3,000 - $10,000",
                timeline: "6-12 weeks",
                features: ["Market analysis", "Growth strategy", "Brand positioning", "Implementation roadmap"]
            }
        ]
    },

    {
        id: 5,
        title: "Photography & Videography",
        icon: Camera,
        description: "We capture professional photos and videos that tell stories and elevate branding. Perfect for campaigns, products, or events, our visuals leave lasting impressions.",
        subservices: [
            {
                id: 51,
                name: "Product Photography",
                description: "We create high-quality product images that highlight features and details. Professional visuals improve trust, attract buyers, and make your brand stand out in competitive markets.",
                price: "$300 - $1,500/session",
                timeline: "1-2 weeks",
                features: ["Studio photography", "Lifestyle shots", "360° product views", "Image retouching"]
            },
            {
                id: 52,
                name: "Event Photography & Videography",
                description: "We capture events with precision and creativity, ensuring every highlight is preserved. Documented memories reinforce brand credibility and create long-lasting impressions with stakeholders.",
                price: "$800 - $3,000/event",
                timeline: "1-3 weeks",
                features: ["Event coverage", "Highlight videos", "Photo galleries", "Live streaming"]
            },
            {
                id: 53,
                name: "Commercial/Brand Photography & Videography",
                description: "We produce cinematic visuals that strengthen storytelling and brand positioning. A strong visual identity enhances campaigns and makes your brand more recognizable in the market.",
                price: "$1,500 - $8,000/project",
                timeline: "2-4 weeks",
                features: ["Brand storytelling", "Commercial videos", "Corporate photography", "Creative direction"]
            },
            {
                id: 54,
                name: "Editing & Post-Production",
                description: "We refine and enhance raw content into polished visuals that align with your brand's tone. High-quality editing ensures your brand communicates professionalism and excellence.",
                price: "$200 - $1,000/hour",
                timeline: "1-2 weeks",
                features: ["Video editing", "Color grading", "Audio mixing", "Motion graphics"]
            }
        ]
    },

    {
        id: 6,
        title: "Data & AI",
        icon: Brain,
        description: "We transform complex data into valuable insights with analytics and AI-powered solutions. From dashboards to automation, we enable smarter business decisions.",
        subservices: [
            {
                id: 61,
                name: "AI Automation & Integration",
                description: "We integrate AI into your workflows to automate repetitive tasks, saving time and reducing costs. By streamlining operations, your brand gains efficiency and capacity to scale faster.",
                price: "$5,000 - $20,000",
                timeline: "6-12 weeks",
                features: ["Workflow automation", "AI integration", "Process optimization", "Custom solutions"]
            },
            {
                id: 62,
                name: "Data Analytics",
                description: "We analyze structured and unstructured data to uncover trends and opportunities. Actionable insights help your brand make smarter decisions, refine strategies, and enhance customer experiences.",
                price: "$2,000 - $8,000",
                timeline: "4-8 weeks",
                features: ["Data visualization", "Predictive analytics", "Custom dashboards", "Reporting systems"]
            },
            {
                id: 63,
                name: "AI Model Development",
                description: "We design and train AI/ML models tailored to your business needs. Predictive and prescriptive models empower your brand to innovate, personalize offerings, and stay ahead of competitors.",
                price: "$8,000 - $30,000",
                timeline: "8-16 weeks",
                features: ["Custom AI models", "Machine learning", "Model training", "Deployment & monitoring"]
            },
            {
                id: 64,
                name: "Data Science Consulting",
                description: "We provide expert guidance on adopting data-driven strategies. This ensures your brand leverages the full potential of analytics and AI to remain competitive in evolving markets.",
                price: "$1,500 - $5,000",
                timeline: "2-4 weeks",
                features: ["Strategy consulting", "Data audit", "Implementation roadmap", "Team training"]
            }
        ]
    }
]