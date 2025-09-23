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
                name: "Brand Identity Kit",
                description: "A complete visual identity package including logo, typography, and color palette to ensure your brand is memorable and consistent everywhere.",
                price: "$1,000 - $5,000",
                timeline: "2-4 weeks",
                features: ["Logo design", "Color palette", "Typography guide", "Usage guidelines"]
            },
            {
                id: 12,
                name: "UI/UX Design",
                description: "We design user-friendly interfaces and experiences that make your website or app more engaging, intuitive, and enjoyable for customers.",
                price: "$1,500 - $5,000",
                timeline: "2-4 weeks",
                features: ["User flows", "Wireframes", "Interactive prototypes", "Usability testing"]
            },
            {
                id: 13,
                name: "Marketing Visuals",
                description: "From social media posts to campaign graphics, we create visuals that attract attention and communicate your brand message effectively.",
                price: "$500 - $3,000",
                timeline: "1-3 weeks",
                features: ["Social media kits", "Ads graphics", "Posters & flyers", "Digital banners"]
            },
            {
                id: 14,
                name: "IT Audit & Consulting",
                description: "We analyze your IT systems to improve efficiency, security, and compliance. This ensures your brand runs smoothly and is ready to scale.",
                price: "$3,000 - $10,000",
                timeline: "4-8 weeks",
                features: ["Security check", "Performance audit", "Compliance review", "Action plan"]
            }
        ]
    },

    {
        id: 2,
        title: "Web Development",
        icon: CodeXml,
        description: "We build responsive, fast, and secure websites tailored to your business needs. From personal branding to enterprise-level platforms, our solutions scale with your goals.",
        subservices: [
            {
                id: 21,
                name: "Personal Website",
                description: "A simple website for personal branding, portfolios, or freelancers who want to showcase work and attract clients.",
                price: "$500 - $2,000",
                timeline: "1-3 weeks",
                features: ["Portfolio showcase", "Contact form", "Responsive design", "SEO basics"]
            },
            {
                id: 22,
                name: "Professional Website",
                description: "A company profile or multi-page website to showcase services, teams, and projects. Perfect for growing businesses.",
                price: "$1,500 - $6,000",
                timeline: "2-5 weeks",
                features: ["About & services", "Portfolio/case studies", "Custom forms", "Scalability"]
            },
            {
                id: 23,
                name: "Enterprise Website",
                description: "Advanced corporate websites with features like multi-language, integrations, or custom workflows for large organizations.",
                price: "$4,000 - $15,000",
                timeline: "4-8 weeks",
                features: ["Custom integrations", "Multi-language support", "Advanced security", "High scalability"]
            },
            {
                id: 24,
                name: "E-Commerce Website",
                description: "An online store with secure payments and user-friendly shopping experiences, helping you sell products or services with ease.",
                price: "$3,000 - $12,000",
                timeline: "4-8 weeks",
                features: ["Product catalog", "Shopping cart", "Payment gateway", "Order management"]
            },
            {
                id: 25,
                name: "Maintenance & Support",
                description: "Ongoing updates, fixes, and monitoring to ensure your website stays secure, optimized, and reliable.",
                price: "$200 - $1,000/month",
                timeline: "Ongoing",
                features: ["Regular updates", "Security monitoring", "Backup & recovery", "24/7 support"]
            },
            {
                id: 26,
                name: "SEO Optimization",
                description: "Boost your website visibility in search engines with proven SEO strategies to increase organic traffic and conversions.",
                price: "$800 - $3,000/month",
                timeline: "3-6 months",
                features: ["Keyword research", "On-page SEO", "Technical SEO", "Analytics reporting"]
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
                name: "Cross-Platform App",
                description: "One app that works on both Android and iOS, saving costs and ensuring consistent user experiences.",
                price: "$8,000 - $25,000",
                timeline: "8-16 weeks",
                features: ["Single codebase", "Native performance", "App store ready", "Analytics integration"]
            },
            {
                id: 32,
                name: "Android App",
                description: "Native Android app development optimized for usability, speed, and compatibility across devices.",
                price: "$5,000 - $20,000",
                timeline: "6-12 weeks",
                features: ["Native Android", "Material Design", "Play Store optimization", "Device compatibility"]
            },
            {
                id: 33,
                name: "iOS App",
                description: "Premium iOS apps seamlessly integrated with the Apple ecosystem for high-value markets.",
                price: "$6,000 - $22,000",
                timeline: "6-14 weeks",
                features: ["Native iOS", "App Store ready", "Smooth UX", "Apple ecosystem integration"]
            },
            {
                id: 34,
                name: "App Maintenance",
                description: "Keep your app up-to-date, secure, and bug-free with regular updates and improvements.",
                price: "$500 - $2,000/month",
                timeline: "Ongoing",
                features: ["Bug fixes", "Performance updates", "Security patches", "Feature enhancements"]
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
                description: "We create and manage advertising campaigns that maximize ROI by reaching the right people at the right time.",
                price: "$1,000 - $5,000/month",
                timeline: "Ongoing",
                features: ["Ad creation", "Targeting", "Optimization", "Reporting"]
            },
            {
                id: 42,
                name: "Content Marketing",
                description: "We plan and create engaging content that builds trust, strengthens your brand, and drives long-term growth.",
                price: "$1,500 - $4,000/month",
                timeline: "Ongoing",
                features: ["Content strategy", "Editorial calendar", "Content creation", "Performance tracking"]
            },
            {
                id: 43,
                name: "Social Media Management",
                description: "We handle your social media presence with consistent posting, community engagement, and data-driven growth strategies.",
                price: "$800 - $3,000/month",
                timeline: "Ongoing",
                features: ["Post creation", "Scheduling", "Community management", "Analytics"]
            },
            {
                id: 44,
                name: "Brand Growth Strategy",
                description: "We combine data insights and creative execution to expand your brand’s market reach and positioning.",
                price: "$3,000 - $10,000",
                timeline: "6-12 weeks",
                features: ["Market analysis", "Growth roadmap", "Brand positioning", "Execution plan"]
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
                description: "High-quality product photos that build trust, attract buyers, and make your brand stand out.",
                price: "$300 - $1,500/session",
                timeline: "1-2 weeks",
                features: ["Studio shots", "Lifestyle photos", "360° views", "Image retouching"]
            },
            {
                id: 52,
                name: "Event Coverage",
                description: "We document your events with photos and videos that capture every important moment and memory.",
                price: "$800 - $3,000/event",
                timeline: "1-3 weeks",
                features: ["Event photography", "Highlight video", "Photo gallery", "Live streaming"]
            },
            {
                id: 53,
                name: "Commercial/Brand Shoot",
                description: "Cinematic brand storytelling visuals that make campaigns impactful and memorable.",
                price: "$1,500 - $8,000/project",
                timeline: "2-4 weeks",
                features: ["Brand storytelling", "Commercial video", "Corporate photography", "Creative direction"]
            },
            {
                id: 54,
                name: "Editing & Post-Production",
                description: "We turn raw footage into polished visuals with professional editing and enhancements.",
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
                name: "AI Automation",
                description: "Automate repetitive tasks with AI to save time and costs, making your operations faster and more efficient.",
                price: "$5,000 - $20,000",
                timeline: "6-12 weeks",
                features: ["Workflow automation", "AI tools integration", "Efficiency boost", "Custom solutions"]
            },
            {
                id: 62,
                name: "Business Dashboards",
                description: "Turn raw data into clear, interactive dashboards that help you monitor performance and make data-driven decisions.",
                price: "$2,000 - $8,000",
                timeline: "4-8 weeks",
                features: ["Data visualization", "Custom KPIs", "Predictive analytics", "Reporting"]
            },
            {
                id: 63,
                name: "Custom AI Models",
                description: "We design and train AI/ML models tailored to your needs, from predictions to personalized recommendations.",
                price: "$8,000 - $30,000",
                timeline: "8-16 weeks",
                features: ["Custom AI models", "Machine learning", "Model training", "Deployment"]
            },
            {
                id: 64,
                name: "Data Strategy Consulting",
                description: "Expert guidance to adopt data-driven strategies, ensuring your brand maximizes the value of analytics and AI.",
                price: "$1,500 - $5,000",
                timeline: "2-4 weeks",
                features: ["Data audit", "Strategy roadmap", "Implementation advice", "Team training"]
            }
        ]
    }
]
