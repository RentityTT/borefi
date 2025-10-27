import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Info } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import constructionBusinessImg from "@/assets/construction-business.jpg";
import restaurantBusinessImg from "@/assets/restaurant-business.jpg";
import propertyManagementBusinessImg from "@/assets/property-management-business.jpg";
import laundromatBusinessImg from "@/assets/laundromat-business.jpg";
import mechanicalBusinessImg from "@/assets/mechanical-business.jpg";
import electricalBusinessImg from "@/assets/electrical-business.jpg";
import cleaningBusinessImg from "@/assets/cleaning-business.jpg";
import storageBusinessImg from "@/assets/storage-business.jpg";
import carwashBusinessImg from "@/assets/carwash-business.jpg";
const DeFi = () => {
  const navigate = useNavigate();
  const [selectedPool, setSelectedPool] = useState<any>(null);
  // User's businesses with location and sector information
  const userBusinesses = [{
    name: "Juniper Logistics",
    location: "Vancouver",
    sector: "Logistics & Transportation"
  }];

  // Extract unique locations and sectors from user businesses
  const userLocations = [...new Set(userBusinesses.map(b => b.location))];
  const userSectors = [...new Set(userBusinesses.map(b => b.sector))];

  // Historical data for the chart (showing growth over time)
  const chartData = [{
    month: 'Jan 2024',
    deposits: 1200000000,
    loans: 800000000
  }, {
    month: 'Feb 2024',
    deposits: 1500000000,
    loans: 950000000
  }, {
    month: 'Mar 2024',
    deposits: 1800000000,
    loans: 1150000000
  }, {
    month: 'Apr 2024',
    deposits: 2100000000,
    loans: 1350000000
  }, {
    month: 'May 2024',
    deposits: 2500000000,
    loans: 1600000000
  }, {
    month: 'Jun 2024',
    deposits: 2900000000,
    loans: 1850000000
  }, {
    month: 'Jul 2024',
    deposits: 3300000000,
    loans: 2100000000
  }, {
    month: 'Aug 2024',
    deposits: 3800000000,
    loans: 2450000000
  }, {
    month: 'Sep 2024',
    deposits: 4400000000,
    loans: 2800000000
  }, {
    month: 'Oct 2024',
    deposits: 4900000000,
    loans: 3050000000
  }, {
    month: 'Nov 2024',
    deposits: 5150000000,
    loans: 3150000000
  }, {
    month: 'Dec 2024',
    deposits: 5247830456,
    loans: 3192045789
  }];
  const investmentPools = [{
    name: "Construction Industry",
    deposits: "$845,678,901",
    curator: "BORE.FI Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "7.82%",
    network: "Solana",
    utilization: "65%"
  }, {
    name: "Restaurant Group",
    deposits: "$592,345,123",
    curator: "BORE.FI Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "8.12%",
    network: "Solana",
    utilization: "58%"
  }, {
    name: "Property Management",
    deposits: "$478,234,567",
    curator: "BORE.FI Protocol",
    collateral: ["USDC", "USDT", "DAI"],
    supplyAPY: "7.45%",
    network: "Solana",
    utilization: "52%"
  }, {
    name: "Mechanical Contractors",
    deposits: "$367,890,234",
    curator: "BORE.FI Protocol",
    collateral: ["USDC"],
    supplyAPY: "7.95%",
    network: "Solana",
    utilization: "68%"
  }, {
    name: "Laundromat Chain",
    deposits: "$345,123,678",
    curator: "BORE.FI Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "8.35%",
    network: "Solana",
    utilization: "62%"
  }, {
    name: "Electrical Services",
    deposits: "$289,456,890",
    curator: "BORE.FI Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "7.65%",
    network: "Solana",
    utilization: "55%"
  }, {
    name: "Logistics Fleet",
    deposits: "$212,567,234",
    curator: "BORE.FI Protocol",
    collateral: ["USDC"],
    supplyAPY: "7.28%",
    network: "Solana",
    utilization: "48%"
  }, {
    name: "HVAC Services",
    deposits: "$167,890,123",
    curator: "BORE.FI Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "7.15%",
    network: "Solana",
    utilization: "45%"
  }];
  const earnPositions = [{
    pool: "Construction Industry Pool",
    type: "Supply",
    productType: "Pool Investment",
    amount: "$175,500",
    amountNumeric: 175500,
    apy: "7.82%",
    apyNumeric: 7.82,
    duration: "Fixed - 3 months remaining",
    startDate: "Apr 1, 2024",
    status: "Active",
    network: "Solana",
    details: {
      positionId: "CIB-2024-04-001",
      depositDate: "Apr 1, 2024",
      daysActive: 275,
      principalAmount: "$175,500",
      currentValue: "$189,625",
      yieldEarned: "$14,125",
      projectedAnnualYield: "$13,793",
      poolUtilization: "65%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$1,164"
    }
  }, {
    pool: "Metro Restaurant Group",
    type: "Supply",
    productType: "Preferred Equity",
    amount: "$150,000",
    amountNumeric: 150000,
    apy: "11.8%",
    apyNumeric: 11.8,
    duration: "Flexible",
    startDate: "Jun 15, 2024",
    status: "Active",
    network: "Solana",
    details: {
      positionId: "MRG-2024-06-001",
      depositDate: "Jun 15, 2024",
      daysActive: 200,
      principalAmount: "$150,000",
      currentValue: "$157,562",
      yieldEarned: "$7,562",
      projectedAnnualYield: "$17,700",
      poolUtilization: "92%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$1,475"
    }
  }, {
    pool: "Property Management Pool",
    type: "Supply",
    productType: "Pool Investment",
    amount: "$85,000",
    amountNumeric: 85000,
    apy: "7.45%",
    apyNumeric: 7.45,
    duration: "Flexible",
    startDate: "Aug 1, 2024",
    status: "Active",
    network: "Solana",
    details: {
      positionId: "PMP-2024-08-001",
      depositDate: "Aug 1, 2024",
      daysActive: 153,
      principalAmount: "$85,000",
      currentValue: "$87,474",
      yieldEarned: "$2,474",
      projectedAnnualYield: "$6,333",
      poolUtilization: "52%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$528"
    }
  }];
  const borrowPositions = [{
    property: "Juniper Logistics",
    type: "Borrow",
    amount: "$100,000",
    apr: "7.8%",
    duration: "2 years",
    startDate: "Aug 1, 2024",
    status: "Active",
    network: "Solana",
    details: {
      loanId: "JL-2024-08-001",
      securityType: "Business Assets + Corporate Guarantee",
      businessAddress: "4567 Juniper Street, Vancouver, BC",
      corporateGuarantor: "Juniper Logistics Holdings Limited",
      principalRemaining: "$89,250",
      interestPaid: "$6,850",
      nextPaymentDate: "Jan 1, 2025",
      nextPaymentAmount: "$3,250",
      totalRepayments: "$13,150",
      maturityDate: "Aug 1, 2026",
      loanToValue: "45%",
      businessValue: "$2,250,000"
    }
  }];
  const markets = [{
    location: "Vancouver",
    country: "Canada",
    totalValue: "$1,892,456,789",
    properties: 234,
    avgReturn: "8.5%",
    occupancyRate: "94%",
    marketCap: "$2.1B",
    growth: "+12.3%"
  }, {
    location: "Paris",
    country: "France",
    totalValue: "$1,456,789,234",
    properties: 189,
    avgReturn: "7.8%",
    occupancyRate: "92%",
    marketCap: "$1.8B",
    growth: "+9.7%"
  }, {
    location: "Hong Kong",
    country: "China",
    totalValue: "$1,234,567,890",
    properties: 156,
    avgReturn: "9.2%",
    occupancyRate: "96%",
    marketCap: "$1.5B",
    growth: "+15.8%"
  }, {
    location: "New York",
    country: "USA",
    totalValue: "$1,123,456,789",
    properties: 298,
    avgReturn: "8.1%",
    occupancyRate: "91%",
    marketCap: "$1.4B",
    growth: "+10.5%"
  }, {
    location: "London",
    country: "UK",
    totalValue: "$987,654,321",
    properties: 167,
    avgReturn: "7.5%",
    occupancyRate: "89%",
    marketCap: "$1.2B",
    growth: "+8.2%"
  }, {
    location: "Tokyo",
    country: "Japan",
    totalValue: "$876,543,210",
    properties: 145,
    avgReturn: "7.2%",
    occupancyRate: "93%",
    marketCap: "$1.0B",
    growth: "+7.9%"
  }];
  const individualBusinesses = [{
    name: "Century Construction Co.",
    investmentType: "Business Equity",
    location: "Los Angeles, CA",
    businessType: "Commercial Construction",
    tags: ["B2B", "CONSTRUCTION", "INFRASTRUCTURE"],
    investmentAmount: "$2,500,000",
    raised: "$1,850,000",
    raisedPercent: 74,
    investors: 247,
    daysLeft: 42,
    ebitda: "$2.0M",
    apy: "12.5%",
    term: "Monthly distributions",
    businessValue: "$8,000,000",
    status: "Funding",
    revenue: "$8.2M annually",
    image: constructionBusinessImg,
    description: "Established commercial construction company specializing in government and corporate infrastructure projects across Southern California",
    minInvestment: "$5,000",
    maxInvestment: "$250,000",
    deadline: "January 15, 2026",
    securityType: "Convertible Equity Token",
    valuationCap: "$8M",
    highlights: ["Established relationships with 50+ government agencies and Fortune 500 companies", "89% project success rate with on-time, on-budget delivery over 15 years", "Secured $12M in new contracts for 2026, 45% increase from previous year", "Licensed in 5 states with bonding capacity of $100M for large-scale projects", "Led by CEO with 25+ years in commercial construction and infrastructure development"],
    problem: {
      title: "Infrastructure spending is accelerating but contractors lack capital",
      stats: [{
        label: "$1.2T Infrastructure Bill",
        description: "creating unprecedented demand for qualified contractors"
      }, {
        label: "$850M Project Backlog",
        description: "waiting for working capital to execute contracts"
      }, {
        label: "#1 Growth Constraint",
        description: "access to capital cited by 78% of construction firms"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "Metro Restaurant Group",
    investmentType: "Business Equity",
    location: "Seattle, WA",
    businessType: "Restaurant Chain",
    tags: ["B2C", "FOOD & BEVERAGE", "MULTI-LOCATION"],
    investmentAmount: "$1,750,000",
    raised: "$1,225,000",
    raisedPercent: 70,
    investors: 318,
    daysLeft: 28,
    ebitda: "$2.1M",
    apy: "11.8%",
    term: "Monthly distributions",
    businessValue: "$6,300,000",
    status: "Funding",
    revenue: "$6.5M annually",
    image: restaurantBusinessImg,
    description: "Fast-casual restaurant chain with 8 locations serving farm-to-table cuisine with proven unit economics and expansion plans",
    minInvestment: "$2,500",
    maxInvestment: "$150,000",
    deadline: "February 1, 2026",
    securityType: "Tokenized Preferred Equity",
    valuationCap: "$6.3M",
    highlights: ["8 profitable locations across Seattle metro area with average unit revenue of $812K", "Proprietary supply chain relationships with 30+ local farms for fresh ingredients", "Strong brand loyalty with 45,000+ members in rewards program and 4.7-star rating", "Proven expansion model ready to scale to 15 locations by 2027", "Industry-leading margins at 22% EBITDA driven by efficient operations"],
    problem: {
      title: "Fast-casual dining market is booming but expansion needs capital",
      stats: [{
        label: "68% of Consumers",
        description: "prefer fast-casual over traditional dining post-pandemic"
      }, {
        label: "$125B Market Size",
        description: "growing at 11% annually with strong tailwinds"
      }, {
        label: "Prime Locations",
        description: "identified for next 7 locations but require upfront capital"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "Coastal Property Management",
    investmentType: "Business Equity",
    location: "Miami, FL",
    businessType: "Property Management",
    tags: ["B2B", "REAL ESTATE", "RECURRING REVENUE"],
    investmentAmount: "$3,000,000",
    raised: "$2,550,000",
    raisedPercent: 85,
    investors: 412,
    daysLeft: 15,
    ebitda: "$2.5M",
    apy: "13.2%",
    term: "Monthly distributions",
    businessValue: "$10,000,000",
    status: "Funding",
    revenue: "$12.8M annually",
    image: propertyManagementBusinessImg,
    description: "Full-service property management company managing 2,000+ residential and commercial units with technology-driven operations",
    minInvestment: "$10,000",
    maxInvestment: "$500,000",
    deadline: "December 30, 2025",
    securityType: "Tokenized Preferred Equity",
    valuationCap: "$10M",
    highlights: ["Managing 2,000+ units across Miami-Dade and Broward counties with 98% retention rate", "Technology platform automates 70% of operations reducing costs by $2M annually", "Contracted to onboard 500 new units in Q1 2026, 25% growth in portfolio", "Diversified revenue streams: management fees, leasing commissions, maintenance markups", "Founded by team with 40+ combined years in South Florida real estate"],
    problem: {
      title: "Property management market is consolidating and tech is key",
      stats: [{
        label: "42% of Property Owners",
        description: "dissatisfied with current management seeking better service"
      }, {
        label: "$88B Industry",
        description: "transitioning to technology-driven operators with scale"
      }, {
        label: "Growth Capital Needed",
        description: "to acquire competitors and invest in technology platform"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "SpinCycle Laundromats",
    investmentType: "Business Equity",
    location: "Austin, TX",
    businessType: "Laundromat Chain",
    tags: ["B2C", "CONSUMER SERVICES", "SUBSCRIPTION MODEL"],
    investmentAmount: "$2,200,000",
    raised: "$1,760,000",
    raisedPercent: 80,
    investors: 289,
    daysLeft: 35,
    ebitda: "$1.8M",
    apy: "14.5%",
    term: "Monthly distributions",
    businessValue: "$7,200,000",
    status: "Funding",
    revenue: "$9.2M annually",
    image: laundromatBusinessImg,
    description: "Modern laundromat chain with app-based reservation system and subscription model serving urban markets in Texas",
    minInvestment: "$1,000",
    maxInvestment: "$100,000",
    deadline: "February 20, 2026",
    securityType: "Convertible Equity Token",
    valuationCap: "$7.2M",
    highlights: ["15 locations across Austin, Dallas, and Houston with modern equipment and amenities", "Subscription model with 8,000+ monthly members generating predictable recurring revenue", "Mobile app with 25,000+ downloads enabling reservations and cashless payments", "Industry-leading unit economics with 55% gross margins and $612K average revenue per location", "Expansion pipeline of 10 locations identified in high-density urban areas"],
    problem: {
      title: "Traditional laundromats are outdated, modern consumers want convenience",
      stats: [{
        label: "85% of Urban Dwellers",
        description: "don't have in-unit laundry, creating massive addressable market"
      }, {
        label: "$5B Laundromat Market",
        description: "dominated by aging operators not meeting modern expectations"
      }, {
        label: "3x Higher Retention",
        description: "subscription model vs. traditional pay-per-use laundromats"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "Precision Mechanical Services",
    investmentType: "Business Equity",
    location: "Boston, MA",
    businessType: "Mechanical Contractor",
    tags: ["B2B", "HVAC", "MAINTENANCE CONTRACTS"],
    investmentAmount: "$1,900,000",
    raised: "$1,330,000",
    raisedPercent: 70,
    investors: 195,
    daysLeft: 51,
    ebitda: "$1.5M",
    apy: "12.8%",
    term: "Monthly distributions",
    businessValue: "$6,000,000",
    status: "Funding",
    revenue: "$7.4M annually",
    image: mechanicalBusinessImg,
    description: "Commercial HVAC and mechanical contractor serving industrial facilities with long-term maintenance contracts and predictable revenue",
    minInvestment: "$5,000",
    maxInvestment: "$200,000",
    deadline: "March 15, 2026",
    securityType: "Tokenized Preferred Equity",
    valuationCap: "$6M",
    highlights: ["Long-term contracts with 150+ commercial and industrial clients averaging 7-year relationships", "Recurring maintenance revenue represents 65% of total revenue, providing stability", "Licensed and certified for all major HVAC systems with 35 skilled technicians", "Strong safety record with zero lost-time accidents in past 3 years", "Led by master technician with 30 years experience and relationships with major clients"],
    problem: {
      title: "HVAC maintenance is critical but contractors lack working capital",
      stats: [{
        label: "92% of Commercial Buildings",
        description: "require ongoing HVAC maintenance creating consistent demand"
      }, {
        label: "$29B Services Market",
        description: "growing as aging infrastructure requires more frequent repairs"
      }, {
        label: "Equipment Investment",
        description: "needed to handle larger commercial projects and expand service area"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "PowerLine Electrical",
    investmentType: "Business Equity",
    location: "Denver, CO",
    businessType: "Electrical Contractor",
    tags: ["B2B", "ELECTRICAL", "COMMERCIAL PROJECTS"],
    investmentAmount: "$1,500,000",
    raised: "$1,050,000",
    raisedPercent: 70,
    investors: 167,
    daysLeft: 38,
    ebitda: "$2.2M",
    apy: "11.5%",
    term: "Monthly distributions",
    businessValue: "$6,600,000",
    status: "Funding",
    revenue: "$5.8M annually",
    image: electricalBusinessImg,
    description: "Licensed electrical contractor specializing in commercial and residential projects with strong reputation across Colorado markets",
    minInvestment: "$2,500",
    maxInvestment: "$150,000",
    deadline: "February 28, 2026",
    securityType: "Convertible Equity Token",
    valuationCap: "$6.6M",
    highlights: ["Master electrician license with 45 certified electricians on staff", "Established relationships with 25+ general contractors providing steady project pipeline", "Specialization in solar panel installation, fastest growing segment of business", "Commercial insurance and bonding supporting projects up to $5M", "Family-owned business with 20-year track record and strong community reputation"],
    problem: {
      title: "Electrical services demand is surging but contractors need capital",
      stats: [{
        label: "Solar Installation Boom",
        description: "Colorado leading US in commercial solar adoption, 45% YoY growth"
      }, {
        label: "$78B Electrical Services",
        description: "market expanding with construction and renewable energy growth"
      }, {
        label: "Equipment & Inventory",
        description: "upfront capital needed to take on larger commercial projects"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "CleanPro Commercial Services",
    investmentType: "Business Equity",
    location: "Atlanta, GA",
    businessType: "Commercial Cleaning",
    tags: ["B2B", "FACILITIES", "RECURRING CONTRACTS"],
    investmentAmount: "$1,800,000",
    raised: "$1,260,000",
    raisedPercent: 70,
    investors: 203,
    daysLeft: 45,
    ebitda: "$1.8M",
    apy: "13.5%",
    term: "Monthly distributions",
    businessValue: "$5,400,000",
    status: "Funding",
    revenue: "$7.1M annually",
    image: cleaningBusinessImg,
    description: "Premier commercial cleaning company serving corporate offices, medical facilities, and educational institutions with eco-friendly practices and certified staff",
    minInvestment: "$2,500",
    maxInvestment: "$175,000",
    deadline: "March 1, 2026",
    securityType: "Tokenized Preferred Equity",
    valuationCap: "$5.4M",
    highlights: ["300+ commercial clients including 15 Fortune 500 companies with average contract length of 5 years", "Green-certified cleaning processes with proprietary eco-friendly product line reducing costs 18%", "24/7 operations with 180 trained staff and 98% client satisfaction rating over past 3 years", "Recurring revenue model with 92% contract renewal rate providing stable cash flow", "Technology platform for scheduling, quality control, and client communication reducing overhead"],
    problem: {
      title: "Commercial facilities need reliable cleaning but industry lacks professionalism",
      stats: [{
        label: "$74B Cleaning Industry",
        description: "growing as businesses return to offices and prioritize cleanliness post-pandemic"
      }, {
        label: "65% Client Turnover",
        description: "in industry due to inconsistent service quality and lack of technology"
      }, {
        label: "Green Premium",
        description: "businesses willing to pay 20% more for certified eco-friendly cleaning services"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "SecureSpace Storage",
    investmentType: "Business Equity",
    location: "Phoenix, AZ",
    businessType: "Self-Storage Facility",
    tags: ["B2C", "REAL ESTATE", "PASSIVE INCOME"],
    investmentAmount: "$2,800,000",
    raised: "$2,240,000",
    raisedPercent: 80,
    investors: 356,
    daysLeft: 22,
    ebitda: "$2.3M",
    apy: "15.2%",
    term: "Monthly distributions",
    businessValue: "$9,200,000",
    status: "Funding",
    revenue: "$5.8M annually",
    image: storageBusinessImg,
    description: "Climate-controlled self-storage facilities with 850+ units across Phoenix metro area featuring 24/7 security and automated management systems",
    minInvestment: "$5,000",
    maxInvestment: "$250,000",
    deadline: "January 20, 2026",
    securityType: "Tokenized Preferred Equity",
    valuationCap: "$9.2M",
    highlights: ["3 facilities totaling 850 units with 94% occupancy rate sustained over past 2 years", "Climate-controlled premium units command 35% higher rates than standard storage", "Automated gate access and payment system reducing staffing costs by $180K annually", "Located in high-growth Phoenix suburbs with low competition and strong demographics", "Expansion plan approved for 2 additional facilities in adjacent markets with pre-approved financing"],
    problem: {
      title: "Storage demand is surging but supply can't keep pace with growth",
      stats: [{
        label: "$48B Storage Industry",
        description: "growing at 7% annually as urbanization increases storage needs"
      }, {
        label: "92% National Occupancy",
        description: "indicating severe undersupply in key markets like Phoenix"
      }, {
        label: "Land Scarcity",
        description: "limited availability of zoned land for new facilities driving premium valuations"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }, {
    name: "Sparkle Express Car Wash",
    investmentType: "Business Equity",
    location: "Dallas, TX",
    businessType: "Automated Car Wash",
    tags: ["B2C", "AUTOMOTIVE", "SUBSCRIPTION MODEL"],
    investmentAmount: "$2,100,000",
    raised: "$1,470,000",
    raisedPercent: 70,
    investors: 267,
    daysLeft: 47,
    ebitda: "$1.6M",
    apy: "14.8%",
    term: "Monthly distributions",
    businessValue: "$6,400,000",
    status: "Funding",
    revenue: "$4.9M annually",
    image: carwashBusinessImg,
    description: "Express tunnel car wash chain with 4 locations offering unlimited monthly memberships and eco-friendly washing technology",
    minInvestment: "$2,500",
    maxInvestment: "$175,000",
    deadline: "March 10, 2026",
    securityType: "Convertible Equity Token",
    valuationCap: "$6.4M",
    highlights: ["4 high-traffic locations processing 180,000+ washes annually with 3-minute tunnel time", "Unlimited membership model with 6,500+ subscribers providing 78% recurring revenue", "Water reclamation system reducing water costs 65% while meeting environmental standards", "Strategic locations near major highways with average 45,000 daily vehicle traffic count", "Mobile app with 12,000+ users enabling subscription management and contactless payment"],
    problem: {
      title: "Car wash industry consolidating around subscription model leaders",
      stats: [{
        label: "$15B Car Wash Market",
        description: "growing as consumers prefer subscription convenience over traditional pay-per-wash"
      }, {
        label: "3.2x Higher LTV",
        description: "subscription members generate compared to pay-per-wash customers"
      }, {
        label: "Prime Locations",
        description: "identified for 3 additional sites with combined traffic of 120K vehicles daily"
      }]
    },
    documents: [{
      name: "Private Placement Memorandum",
      type: "PDF"
    }, {
      name: "Subscription Agreement",
      type: "PDF"
    }, {
      name: "Audited Financial Statements",
      type: "PDF"
    }, {
      name: "Risk Disclosures",
      type: "PDF"
    }]
  }];
  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`;
    }
    return `$${(value / 1000000).toFixed(2)}M`;
  };
  return <>
    <div className="space-y-6">
      {/* Header and Description */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Business Investment DeFi</h1>
        <p className="text-muted-foreground">Invest in tokenized boring cashflowing businesses. Choose to fund and earn from specific pools based on industry sector or individual business. All businesses have been curated and completed due dilligence by BORE.FI.</p>
        <div className="mt-4 space-y-3 text-muted-foreground">
          
          
        </div>
      </div>


      <Tabs defaultValue="earn" className="w-full">
        

        <TabsContent value="earn" className="mt-6 space-y-6">

      {/* Metrics Overview Section */}
      <div className="p-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg rounded-lg">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Total Deposits</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold mb-1">$5.25B</p>
            <p className="text-sm">5.25B USDC</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Active Investments</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold mb-1">$3.19B</p>
            <p className="text-sm">3.19B USDC</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Estimated Yield</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold">12.0%</p>
            <p className="text-sm">Annual APY</p>
          </div>
        </div>
      </div>

      {/* Available Businesses for Investment */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualBusinesses.map((business, index) => <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={business.image} alt={business.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-3 right-3">
                        <Badge variant={business.status === "Funding" ? "default" : "outline"} className={business.status === "Funding" ? "bg-primary/90 text-white" : "bg-muted/90 text-muted-foreground"}>
                          {business.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{business.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{business.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{business.location}</span>
                          <span>•</span>
                          <span>{business.businessType}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        {business.tags.slice(0, 2).map((tag, i) => <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>)}
                      </div>

                      <Separator />

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Raised</p>
                          <p className="font-semibold text-sm">{business.raised}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">APY</p>
                          <p className="font-semibold text-sm text-success">{business.apy}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Investors</p>
                          <p className="font-semibold text-sm">{business.investors}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Days Left</p>
                          <p className="font-semibold text-sm">{business.daysLeft}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{business.name}</DialogTitle>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <p className="text-muted-foreground">{business.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {business.tags.map((tag, i) => <Badge key={i} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>)}
                        </div>
                      </div>

                      {/* Featured Image */}
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <img src={business.image} alt={business.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Tabs for different sections */}
                      <Tabs defaultValue="pitch" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="pitch">Details</TabsTrigger>
                          <TabsTrigger value="highlights">Highlights</TabsTrigger>
                          <TabsTrigger value="problem">Problem</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="pitch" className="space-y-4 mt-4">
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="font-semibold">{business.location}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Business Type</p>
                                <p className="font-semibold">{business.businessType}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Annual Revenue</p>
                                <p className="font-semibold">{business.revenue}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">EBITDA</p>
                                <p className="font-semibold">{business.ebitda}</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="highlights" className="space-y-4 mt-4">
                          <h3 className="font-semibold text-lg">Highlights</h3>
                          <ul className="space-y-3">
                            {business.highlights.map((highlight, i) => <li key={i} className="flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                              </li>)}
                          </ul>
                        </TabsContent>
                        
                        <TabsContent value="problem" className="space-y-4 mt-4">
                          <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Problem</h3>
                            <h4 className="text-xl font-bold">{business.problem.title}</h4>
                            <div className="space-y-4">
                              {business.problem.stats.map((stat, i) => <div key={i} className="bg-muted/30 rounded-lg p-4">
                                  <div className="flex gap-3">
                                    <div className="text-primary">
                                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <p className="font-semibold text-lg">{stat.label}</p>
                                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                                    </div>
                                  </div>
                                </div>)}
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    {/* Right Column - Metrics & Actions */}
                    <div className="space-y-6">
                      {/* Funding Progress */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-3xl font-bold">{business.raised}</p>
                          <p className="text-sm text-muted-foreground">{business.raisedPercent}% raised of {business.investmentAmount} max</p>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-success h-2 rounded-full transition-all" style={{
                              width: `${business.raisedPercent}%`
                            }} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-2xl font-bold">{business.investors}</p>
                            <p className="text-sm text-muted-foreground">Investors</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{business.daysLeft} days</p>
                            <p className="text-sm text-muted-foreground">Left to invest</p>
                          </div>
                        </div>
                      </div>

                      {/* Investment Amount Input */}
                      <div className="space-y-2">
                        <label htmlFor="investment-amount" className="text-sm font-medium">
                          Investment Amount
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <input
                            id="investment-amount"
                            type="number"
                            placeholder="10,000"
                            className="w-full pl-7 pr-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            min="0"
                            step="1000"
                          />
                        </div>
                      </div>

                      {/* Investment Button */}
                      <Button className="w-full bg-gradient-to-r from-[hsl(16,100%,58%)] to-[hsl(8,85%,55%)] text-white hover:opacity-90" onClick={() => navigate(`/invest/${business.name.toLowerCase().replace(/\s+/g, '-')}`, {
                          state: {
                            business
                          }
                        })}>
                        Invest in {business.name.split(' ')[0]}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">{business.minInvestment} minimum investment</p>

                      <Separator />

                      {/* Deal Terms */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Deal terms</h3>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="gap-2 h-8">
                                <Info className="w-4 h-4" />
                                Fees
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80 bg-popover">
                              <DropdownMenuLabel>BORE.FI Fee Structure</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="flex-col items-start py-3">
                                <div className="flex justify-between w-full">
                                  <span className="text-muted-foreground">Tokenization + Origination Fee</span>
                                  <span className="font-semibold">2.5%</span>
                                </div>
                                <span className="text-xs text-muted-foreground mt-1">One-time of total raise</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex-col items-start py-3">
                                <div className="flex justify-between w-full">
                                  <span className="text-muted-foreground">Platform Management Fee</span>
                                  <span className="font-semibold">1%</span>
                                </div>
                                <span className="text-xs text-muted-foreground mt-1">Annual AUM</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex-col items-start py-3">
                                <div className="flex justify-between w-full">
                                  <span className="text-muted-foreground">Carry/Performance Fee</span>
                                  <span className="font-semibold">12.5%</span>
                                </div>
                                <span className="text-xs text-muted-foreground mt-1">Share of profits to investors</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex-col items-start py-3">
                                <div className="flex justify-between w-full">
                                  <span className="text-muted-foreground">Secondary Trade Fee</span>
                                  <span className="font-semibold">0.25%</span>
                                </div>
                                <span className="text-xs text-muted-foreground mt-1">Per trade</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Net Expected Yield (APY)</span>
                            <span className="font-semibold text-success">{business.apy}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Security type</span>
                            <span className="font-semibold">{business.securityType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Valuation cap</span>
                            <span className="font-semibold">{business.valuationCap}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Minimum investment</span>
                            <span className="font-semibold">{business.minInvestment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Maximum investment</span>
                            <span className="font-semibold">{business.maxInvestment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Deadline</span>
                            <span className="font-semibold">{business.deadline}</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Documents */}
                      <div className="space-y-3">
                        <h3 className="font-semibold">Documents</h3>
                        <div className="space-y-2">
                          {business.documents.map((doc, i) => <div key={i} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-muted/50 cursor-pointer">
                              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="flex-1">{doc.name}</span>
                              <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>)}
          </div>
        </CardContent>
      </Card>

      {/* Active Positions Section */}
      <Card>
        <CardHeader>
          <CardTitle>My Active Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pool</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">APY</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Network</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {earnPositions.map((position, index) => <Dialog key={index}>
                  <DialogTrigger asChild>
                    <TableRow className="hover:bg-muted/50 cursor-pointer">
                      <TableCell className="font-medium">{position.pool}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[10px] whitespace-nowrap">
                          {position.productType}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {position.amount}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm text-success">
                        {position.apy}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {position.duration}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {position.startDate}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {position.network}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-success/20 text-success">
                          {position.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Position Details</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Position Header */}
                      <div className="bg-primary-gradient text-primary-foreground p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">{position.pool}</h3>
                        <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                          {position.productType}
                        </Badge>
                        <p className="text-sm mt-2 opacity-90">Position ID: {position.details.positionId}</p>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Principal Amount</p>
                          <p className="text-lg font-semibold">{position.details.principalAmount}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Yield Earned</p>
                          <p className="text-lg font-semibold text-success">{position.details.yieldEarned}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Current Value</p>
                          <p className="text-lg font-semibold">{position.details.currentValue}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">APY</p>
                          <p className="text-lg font-semibold text-success">{position.apy}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Days Active</p>
                          <p className="text-lg font-semibold">{position.details.daysActive} days</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Status</p>
                          <Badge variant="default" className="bg-success/20 text-success">
                            {position.status}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Network</p>
                          <p className="text-lg font-semibold">{position.network}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Pool Utilization</p>
                          <p className="text-lg font-semibold">{position.details.poolUtilization}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Deposit Date</p>
                          <p className="text-lg font-semibold">{position.details.depositDate}</p>
                        </div>
                      </div>

                      <Separator />

                      {/* Performance Chart */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Position Performance</h4>
                        <ResponsiveContainer width="100%" height={200}>
                          <AreaChart data={[{
                              month: 'Jul',
                              value: position.amountNumeric * 0.92,
                              yield: 0
                            }, {
                              month: 'Aug',
                              value: position.amountNumeric * 0.94,
                              yield: position.amountNumeric * 0.02
                            }, {
                              month: 'Sep',
                              value: position.amountNumeric * 0.96,
                              yield: position.amountNumeric * 0.04
                            }, {
                              month: 'Oct',
                              value: position.amountNumeric * 0.98,
                              yield: position.amountNumeric * 0.06
                            }, {
                              month: 'Nov',
                              value: position.amountNumeric,
                              yield: position.amountNumeric * 0.08
                            }, {
                              month: 'Dec',
                              value: parseFloat(position.details.currentValue.replace(/[$,]/g, '')),
                              yield: parseFloat(position.details.yieldEarned.replace(/[$,]/g, ''))
                            }]}>
                            <defs>
                              <linearGradient id={`valueGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id={`yieldGradientPos${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => `$${(value / 1000).toFixed(0)}k`} />
                            <Tooltip formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'value' ? 'Position Value' : 'Yield Earned']} contentStyle={{
                                backgroundColor: 'hsl(var(--card))',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: '8px'
                              }} />
                            <Area type="monotone" dataKey="value" stroke="hsl(180, 65%, 45%)" strokeWidth={2} fill={`url(#valueGradient${index})`} />
                            <Area type="monotone" dataKey="yield" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill={`url(#yieldGradientPos${index})`} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>

                      <Separator />

                      {/* Distribution Timeline */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Distribution Timeline</h4>
                        <div className="bg-muted/30 rounded-lg p-4 mb-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Next Distribution</p>
                              <p className="font-semibold">{position.details.nextDistribution}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Distribution Amount</p>
                              <p className="font-semibold text-success">{position.details.distributionAmount}</p>
                            </div>
                          </div>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                          <AreaChart data={[{
                              month: 'Jan',
                              distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 0.95,
                              cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 0.95
                            }, {
                              month: 'Feb',
                              distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.02,
                              cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.97
                            }, {
                              month: 'Mar',
                              distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 0.98,
                              cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 2.95
                            }, {
                              month: 'Apr',
                              distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.05,
                              cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 4.0
                            }, {
                              month: 'May',
                              distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.01,
                              cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 5.01
                            }, {
                              month: 'Jun',
                              distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')),
                              cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 6.01
                            }]}>
                            <defs>
                              <linearGradient id={`distGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.05} />
                              </linearGradient>
                              <linearGradient id={`cumGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => `$${value.toLocaleString()}`} />
                            <Tooltip formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'distribution' ? 'Monthly' : 'Cumulative']} contentStyle={{
                                backgroundColor: 'hsl(var(--card))',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: '8px'
                              }} />
                            <Legend verticalAlign="top" height={36} formatter={value => value === 'distribution' ? 'Monthly Distribution' : 'Cumulative Total'} />
                            <Area type="monotone" dataKey="distribution" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill={`url(#distGradient${index})`} />
                            <Area type="monotone" dataKey="cumulative" stroke="hsl(270, 70%, 60%)" strokeWidth={2} fill={`url(#cumGradient${index})`} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>

                      <Separator />

                      {/* Yield Information */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Yield & Distribution</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Projected Annual Yield</p>
                            <p className="text-lg font-semibold text-success">{position.details.projectedAnnualYield}</p>
                            <p className="text-xs text-muted-foreground">Based on current APY of {position.apy}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Next Distribution</p>
                            <p className="text-lg font-semibold">{position.details.nextDistribution}</p>
                            <p className="text-xs text-muted-foreground">Amount: {position.details.distributionAmount}</p>
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          Position Information
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          This {position.productType.toLowerCase()} position in {position.pool} has been active for {position.details.daysActive} days, earning a total of {position.details.yieldEarned} in yield. The current value of your position is {position.details.currentValue}, representing a return on your principal investment of {position.details.principalAmount}.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-[hsl(16,100%,58%)] to-[hsl(8,85%,55%)] text-white hover:opacity-90">
                          Add Funds
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Withdraw
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>)}
              <TableRow className="border-t-2 font-bold bg-muted/50">
                <TableCell className="text-lg">TOTAL</TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right text-lg">${earnPositions.reduce((sum, pos) => sum + pos.amountNumeric, 0).toLocaleString()}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Top Section with Chart */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Deposits
            </CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-4xl font-bold mt-2">$5.25B</div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex gap-4 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(16,100%,58%)]" />
              <span className="text-muted-foreground">Deposits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(8,85%,55%)]" />
              <span className="text-muted-foreground">Active Loans</span>
            </div>
          </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="depositsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(16, 100%, 58%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(16, 100%, 58%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="loansGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(8, 85%, 55%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(8, 85%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => value.split(' ')[0]} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={formatCurrency} />
                <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} />
                <Area type="monotone" dataKey="deposits" stroke="hsl(16, 100%, 58%)" strokeWidth={2} fill="url(#depositsGradient)" />
                <Area type="monotone" dataKey="loans" stroke="hsl(8, 85%, 55%)" strokeWidth={2} fill="url(#loansGradient)" />
              </AreaChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Curated Industry Pools */}
      <Card>
        <CardHeader>
          <CardTitle>Pools</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Invest in diversified pools across various business sectors curated by BORE.FI</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Industry</TableHead>
                <TableHead className="text-right">Total Value</TableHead>
                <TableHead className="text-right">Businesses</TableHead>
                <TableHead className="text-right">APY</TableHead>
                <TableHead className="text-right">Utilization</TableHead>
                <TableHead className="text-right">Type</TableHead>
                <TableHead className="text-right">Network</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investmentPools.map((pool, index) => <TableRow key={index} className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                    ...pool,
                    type: 'pool'
                  })}>
                  <TableCell className="font-medium">{pool.name}</TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {pool.deposits}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {[234, 189, 156, 142, 128, 98, 87, 76][index] || 50}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">
                    {pool.supplyAPY}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all"
                          style={{ width: pool.utilization }}
                        />
                      </div>
                      <span className="font-mono text-sm min-w-[3rem]">{pool.utilization}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary" className="text-[10px] whitespace-nowrap">
                      Preferred Equity
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {pool.network}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-gradient-to-r from-[hsl(16,100%,58%)] to-[hsl(8,85%,55%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => {
                        e.stopPropagation();
                      }}>
                      Fund Pool
                    </Button>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="borrow" className="mt-6 space-y-6">
          {/* Metrics Overview Section - Borrow */}
          <div className="p-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg rounded-lg">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm">Total Available</p>
                  <Info className="h-4 w-4" />
                </div>
                <p className="text-4xl font-bold mb-1">$2.06B</p>
                <p className="text-sm">2.06B USDC Available</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm">Total Borrowed</p>
                  <Info className="h-4 w-4" />
                </div>
                <p className="text-4xl font-bold mb-1">$3.19B</p>
                <p className="text-sm">3.19B USDC</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm">Avg Borrow Rate</p>
                  <Info className="h-4 w-4" />
                </div>
                <p className="text-4xl font-bold">7.5%</p>
                <p className="text-sm">Annual APR</p>
              </div>
            </div>
          </div>

          {/* Active Borrow Positions Section */}
          <Card>
            <CardHeader>
              <CardTitle>My Active Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Network</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {borrowPositions.map((position, index) => <Dialog key={index}>
                      <DialogTrigger asChild>
                        <TableRow className="hover:bg-muted/50 cursor-pointer">
                          <TableCell className="font-medium">{position.property}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-[hsl(180,65%,45%)]/20 text-[hsl(180,65%,45%)]">
                              {position.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono text-sm">
                            {position.amount}
                          </TableCell>
                          <TableCell className="text-right font-mono text-sm">
                            {position.apr}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {position.duration}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {position.startDate}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {position.network}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="default" className="bg-success/20 text-success">
                              {position.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{position.property} Loan</DialogTitle>
                          <p className="text-muted-foreground">Loan ID: {position.details.loanId}</p>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-6">
                          {/* Key Metrics Cards */}
                          <div className="grid grid-cols-3 gap-4">
                            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                              <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground mb-1">Original Amount</p>
                                <p className="text-3xl font-bold">{position.amount}</p>
                              </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-[hsl(16,100%,58%)]/10 to-[hsl(16,100%,58%)]/5 border-[hsl(16,100%,58%)]/20">
                              <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground mb-1">Principal Remaining</p>
                                <p className="text-3xl font-bold">{position.details.principalRemaining}</p>
                              </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                              <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground mb-1">Interest Rate</p>
                                <p className="text-3xl font-bold text-[hsl(180,65%,45%)]">{position.apr}</p>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Loan Information */}
                          <Card>
                            <CardHeader className="bg-muted/30">
                              <CardTitle className="text-lg">Loan Information</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Duration</span>
                                    <span className="font-semibold">{position.duration}</span>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Start Date</span>
                                    <span className="font-mono text-sm">{position.startDate}</span>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Maturity Date</span>
                                    <span className="font-mono text-sm">{position.details.maturityDate}</span>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Status</span>
                                    <Badge variant="default" className="bg-success/20 text-success">
                                      {position.status}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Network</span>
                                    <Badge variant="outline">{position.network}</Badge>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Loan-to-Value</span>
                                    <span className="font-semibold text-success">{position.details.loanToValue}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Security Information */}
                          <Card>
                            <CardHeader className="bg-muted/30">
                              <CardTitle className="text-lg">Security & Guarantees</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <div className="space-y-4">
                                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                  <p className="text-sm text-muted-foreground mb-2">Security Type</p>
                                  <p className="font-semibold text-lg">{position.details.securityType}</p>
                                  <p className="text-sm text-muted-foreground mt-3">
                                    This loan is secured by a registered position on the property title and backed by a corporate guarantee, providing dual-layer security for lenders.
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-2">
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Business Address</p>
                                    <p className="text-sm font-medium">{position.details.businessAddress}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Business Value</p>
                                    <p className="text-lg font-bold">{position.details.businessValue}</p>
                                  </div>
                                  <div className="col-span-2">
                                    <p className="text-sm text-muted-foreground mb-1">Corporate Guarantor</p>
                                    <p className="text-sm font-medium">{position.details.corporateGuarantor}</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Payment Schedule */}
                          <Card>
                            <CardHeader className="bg-muted/30">
                              <CardTitle className="text-lg">Payment Information</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 border rounded-lg">
                                  <p className="text-sm text-muted-foreground mb-1">Next Payment Date</p>
                                  <p className="text-xl font-bold mb-3">{position.details.nextPaymentDate}</p>
                                  <p className="text-sm text-muted-foreground mb-1">Amount Due</p>
                                  <p className="text-2xl font-bold text-[hsl(180,65%,45%)]">{position.details.nextPaymentAmount}</p>
                                </div>
                                <div className="space-y-4">
                                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                                    <span className="text-sm text-muted-foreground">Interest Paid to Date</span>
                                    <span className="text-lg font-semibold">{position.details.interestPaid}</span>
                                  </div>
                                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                                    <span className="text-sm text-muted-foreground">Total Repayments</span>
                                    <span className="text-lg font-semibold">{position.details.totalRepayments}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>)}
                  <TableRow className="border-t-2 font-bold bg-muted/50">
                    <TableCell className="text-lg">TOTAL</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right text-lg">$100,000</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Section with Chart - Borrow */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Borrowed
                </CardTitle>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-4xl font-bold mt-2">$3.19B</div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-4 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(158,64%,52%)]" />
                  <span className="text-muted-foreground">Deposits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(180,65%,45%)]" />
                  <span className="text-muted-foreground">Active Loans</span>
                </div>
              </div>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="depositsGradientBorrow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="loansGradientBorrow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => value.split(' ')[0]} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={formatCurrency} />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} />
                    <Area type="monotone" dataKey="deposits" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill="url(#depositsGradientBorrow)" />
                    <Area type="monotone" dataKey="loans" stroke="hsl(180, 65%, 45%)" strokeWidth={2} fill="url(#loansGradientBorrow)" />
                  </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Tabs and Table Section - Borrow */}
          <Card>
            <CardHeader>
              <CardTitle>Pools</CardTitle>
            </CardHeader>
            <CardContent>
            <Tabs defaultValue="markets" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger value="markets" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                  Markets
                </TabsTrigger>
                <TabsTrigger value="category" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                  Category
                </TabsTrigger>
                <TabsTrigger value="more" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                  Buildings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="markets" className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Location</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead className="text-right">Total Value</TableHead>
                      <TableHead className="text-right">Properties</TableHead>
                      <TableHead className="text-right">Avg Borrow Rate</TableHead>
                      <TableHead className="text-right">Available</TableHead>
                      <TableHead className="text-right">Market Cap</TableHead>
                      <TableHead className="text-right">Growth</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {markets.filter(market => userLocations.includes(market.location)).map((market, index) => <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{market.location}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {market.country}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.totalValue}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.properties}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.avgReturn}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-success">
                          {market.occupancyRate}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.marketCap}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-success">
                          {market.growth}
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="category" className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vault</TableHead>
                      <TableHead className="text-right">Available</TableHead>
                      <TableHead>Curator</TableHead>
                      <TableHead>Collateral</TableHead>
                      <TableHead className="text-right">Borrow APY</TableHead>
                      <TableHead>Network</TableHead>
                      <TableHead className="text-right">Utilization</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investmentPools.filter(pool => userSectors.includes(pool.name)).map((pool, index) => <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{pool.name}</TableCell>
                        <TableCell className="text-right font-mono text-sm text-success">
                          {pool.deposits}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {pool.curator}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {pool.collateral.map((token, i) => <Badge key={i} variant="outline" className="text-xs">
                                {token}
                              </Badge>)}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {pool.supplyAPY}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs">
                            {pool.network}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {pool.utilization}
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="more" className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property</TableHead>
                      <TableHead>Loan Type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Property Type</TableHead>
                      <TableHead className="text-right">Loan Amount</TableHead>
                      <TableHead className="text-right">EBITDA</TableHead>
                      <TableHead className="text-right">Borrow Rate</TableHead>
                      <TableHead className="text-right">Term</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {individualBusinesses.filter(business => userLocations.includes(business.location.split(',')[0])).map((business, index) => <TableRow key={index} className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                        ...business,
                        type: 'individual-business'
                      })}>
                        <TableCell className="font-medium">{business.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs">
                            {business.investmentType}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{business.location}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{business.businessType}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{business.investmentAmount}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{business.ebitda}</TableCell>
                        <TableCell className="text-right font-mono text-sm text-success">{business.apy}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{business.term}</TableCell>
                        <TableCell>
                          <Badge variant={business.status === "Active" ? "default" : "outline"} className={business.status === "Active" ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"}>
                            {business.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" className="bg-gradient-to-r from-[hsl(16,100%,58%)] to-[hsl(8,85%,55%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => e.stopPropagation()}>
                            Borrow
                          </Button>
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>

    {/* Pool Facts Dialog */}
    <Dialog open={!!selectedPool} onOpenChange={() => setSelectedPool(null)}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Pool Facts</DialogTitle>
        </DialogHeader>
        
        {selectedPool && <div className="space-y-6">
            {/* Pool Header */}
            <div className="bg-primary-gradient text-primary-foreground p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">
                {selectedPool.name || selectedPool.location}
              </h3>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                {selectedPool.type === 'market' ? 'Market Pool' : selectedPool.type === 'building' ? 'Building Pool' : 'Category Pool'}
              </Badge>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedPool.type === 'market' && <>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-semibold">{selectedPool.location}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Country</p>
                    <p className="text-lg font-semibold">{selectedPool.country}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="text-lg font-semibold">{selectedPool.totalValue}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Properties</p>
                    <p className="text-lg font-semibold">{selectedPool.properties}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Avg Return</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.avgReturn}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                    <p className="text-lg font-semibold">{selectedPool.occupancyRate}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="text-lg font-semibold">{selectedPool.marketCap}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.growth}</p>
                  </div>
                </>}

              {selectedPool.type === 'pool' && <>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Deposits</p>
                    <p className="text-lg font-semibold">{selectedPool.deposits}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Supply APY</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.supplyAPY}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Utilization</p>
                    <p className="text-lg font-semibold">{selectedPool.utilization}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Network</p>
                    <p className="text-lg font-semibold">{selectedPool.network}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Curator</p>
                    <p className="text-lg font-semibold">{selectedPool.curator}</p>
                  </div>
                </>}

              {selectedPool.type === 'building' && <>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="text-lg font-semibold">{selectedPool.totalValue}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Units</p>
                    <p className="text-lg font-semibold">{selectedPool.units}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Avg Return</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.avgReturn}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Occupancy</p>
                    <p className="text-lg font-semibold">{selectedPool.occupancy}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="text-lg font-semibold">{selectedPool.marketCap}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.growth}</p>
                  </div>
                </>}
            </div>

            <Separator />

            {/* Performance Chart */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Historical Performance</h4>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={[{
                month: 'Jul',
                apy: selectedPool.type === 'market' ? 7.2 : selectedPool.type === 'pool' ? 6.8 : 9.1,
                tvl: selectedPool.type === 'market' ? 1.6 : selectedPool.type === 'pool' ? 280 : 2.8
              }, {
                month: 'Aug',
                apy: selectedPool.type === 'market' ? 7.5 : selectedPool.type === 'pool' ? 7.1 : 9.5,
                tvl: selectedPool.type === 'market' ? 1.7 : selectedPool.type === 'pool' ? 295 : 2.9
              }, {
                month: 'Sep',
                apy: selectedPool.type === 'market' ? 7.8 : selectedPool.type === 'pool' ? 7.3 : 9.8,
                tvl: selectedPool.type === 'market' ? 1.75 : selectedPool.type === 'pool' ? 310 : 3.0
              }, {
                month: 'Oct',
                apy: selectedPool.type === 'market' ? 8.0 : selectedPool.type === 'pool' ? 7.5 : 10.2,
                tvl: selectedPool.type === 'market' ? 1.8 : selectedPool.type === 'pool' ? 330 : 3.1
              }, {
                month: 'Nov',
                apy: selectedPool.type === 'market' ? 8.3 : selectedPool.type === 'pool' ? 7.7 : 10.5,
                tvl: selectedPool.type === 'market' ? 1.85 : selectedPool.type === 'pool' ? 350 : 3.15
              }, {
                month: 'Dec',
                apy: selectedPool.type === 'market' ? parseFloat(selectedPool.avgReturn) : parseFloat(selectedPool.supplyAPY || selectedPool.avgReturn),
                tvl: selectedPool.type === 'market' ? 1.89 : selectedPool.type === 'pool' ? 367 : 3.2
              }]}>
                  <defs>
                    <linearGradient id="apyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => `${value}%`} />
                  <Tooltip formatter={(value: number, name: string) => [name === 'apy' ? `${value}%` : `$${value}B`, name === 'apy' ? 'APY' : 'TVL']} contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} />
                  <Area type="monotone" dataKey="apy" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill="url(#apyGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <Separator />

            {/* Utilization Chart (for pool types) */}
            {(selectedPool.type === 'pool' || selectedPool.type === 'building') && <div>
                <h4 className="text-lg font-semibold mb-3">Utilization Trends</h4>
                <ResponsiveContainer width="100%" height={180}>
                  <AreaChart data={[{
                month: 'Jul',
                utilization: selectedPool.type === 'pool' ? 45 : 88
              }, {
                month: 'Aug',
                utilization: selectedPool.type === 'pool' ? 48 : 90
              }, {
                month: 'Sep',
                utilization: selectedPool.type === 'pool' ? 51 : 92
              }, {
                month: 'Oct',
                utilization: selectedPool.type === 'pool' ? 55 : 94
              }, {
                month: 'Nov',
                utilization: selectedPool.type === 'pool' ? 58 : 95
              }, {
                month: 'Dec',
                utilization: selectedPool.type === 'pool' ? parseInt(selectedPool.utilization) : parseInt(selectedPool.occupancy || '90')
              }]}>
                    <defs>
                      <linearGradient id="utilizationGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => `${value}%`} domain={[0, 100]} />
                    <Tooltip formatter={(value: number) => [`${value}%`, selectedPool.type === 'pool' ? 'Utilization' : 'Occupancy']} contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} />
                    <Area type="monotone" dataKey="utilization" stroke="hsl(180, 65%, 45%)" strokeWidth={2} fill="url(#utilizationGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>}

            <Separator />

            {/* Distribution Timeline */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Projected Distribution Timeline</h4>
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Distribution Frequency</p>
                    <p className="font-semibold">Monthly</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Next Distribution</p>
                    <p className="font-semibold">Jan 15, 2025</p>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={[{
                month: 'Jan 2025',
                distribution: 850,
                cumulative: 850
              }, {
                month: 'Feb 2025',
                distribution: 920,
                cumulative: 1770
              }, {
                month: 'Mar 2025',
                distribution: 885,
                cumulative: 2655
              }, {
                month: 'Apr 2025',
                distribution: 950,
                cumulative: 3605
              }, {
                month: 'May 2025',
                distribution: 910,
                cumulative: 4515
              }, {
                month: 'Jun 2025',
                distribution: 975,
                cumulative: 5490
              }, {
                month: 'Jul 2025',
                distribution: 1020,
                cumulative: 6510
              }, {
                month: 'Aug 2025',
                distribution: 1050,
                cumulative: 7560
              }]}>
                  <defs>
                    <linearGradient id="distributionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="cumulativeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={10} angle={-45} textAnchor="end" height={60} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => `$${(value / 1000).toFixed(1)}k`} />
                  <Tooltip formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'distribution' ? 'Monthly Distribution' : 'Cumulative Total']} contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} />
                  <Legend verticalAlign="top" height={36} formatter={value => value === 'distribution' ? 'Monthly Distribution' : 'Cumulative Total'} />
                  <Area type="monotone" dataKey="distribution" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill="url(#distributionGradient)" />
                  <Area type="monotone" dataKey="cumulative" stroke="hsl(270, 70%, 60%)" strokeWidth={2} fill="url(#cumulativeGradient)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-3 text-xs text-muted-foreground">
                <Info className="h-3 w-3 inline mr-1" />
                Projections based on current APY of {selectedPool.type === 'market' ? selectedPool.avgReturn : selectedPool.supplyAPY || selectedPool.avgReturn} and typical distribution patterns
              </div>
            </div>

            <Separator />

            {/* Collateral Information (for pool type) */}
            {selectedPool.type === 'pool' && selectedPool.collateral && <div>
                <h4 className="text-lg font-semibold mb-3">Accepted Collateral</h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedPool.collateral.map((token: string, idx: number) => <Badge key={idx} variant="secondary">{token}</Badge>)}
                </div>
              </div>}

            {/* Additional Info */}
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" />
                Pool Information
              </h4>
              <p className="text-sm text-muted-foreground">
                {selectedPool.type === 'market' ? `This market-based pool aggregates real estate financing opportunities across ${selectedPool.location}, ${selectedPool.country}. Loans could be for land acquisition, construction development, mezzanine financing, bridge loans, or other real estate purposes.` : selectedPool.type === 'building' ? `This building-specific pool provides financing for ${selectedPool.name} with ${selectedPool.units} units. Loans may include construction development, bridge financing, mezzanine loans, or land acquisition for this property.` : `This loan pool specializes in ${selectedPool.name} financing. Funds are deployed for land loans, construction development, mezzanine financing, bridge loans, and other real estate lending opportunities matching this category.`}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-[hsl(16,100%,58%)] to-[hsl(8,85%,55%)] text-white hover:opacity-90">
                Fund Pool
              </Button>
              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </div>
          </div>}
      </DialogContent>
    </Dialog>
  </>;
};
export default DeFi;