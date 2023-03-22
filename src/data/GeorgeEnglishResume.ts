import { Resume } from "../components/resume/resume.model";

export const GeorgeEnglishResume: Resume = {
  contact: {
    firstName: "George",
    lastName: "English",
    email: "gaenglish@gmail.com",
    personalUrl: "georgeenglish.dev",
    profileImage: "GeorgeEnglish.jpg",
    links: [
      {
        type: "LinkedIn",
        url: "https://www.linkedin.com/in/GeorgeEnglish",
      },
      {
        type: "GitHub",
        url: "https://github.com/gaenglish",
      },
    ],
  },
  summary: "",
  experience: [
    {
      companyName: "TeleVet",
      jobTitle: "Senior Mobile/Frontend Developer",
      startDate: "04/22",
      endDate: "02/23",
      responsibilities: [
        {
          tags: ["React", "GraphQL"],
          description:
            "Primarily used React(tsx) and Graph QL to create new features for pet owners to interact with their veterinarians.",
        },
        {
          tags: ["ReactNative"],
          description:
            "Developed React-Native app to load in the responsive Pet Owner Website to mimic a native app, thus greatly reducing the cost and time to rollout a native app.",
        },
        {
          tags: ["React", "Storybook"],
          description:
            "Created reusable React Components as part of a design system library used to drive a consistent user experience across all systems.",
        },
        {
          description:
            "Developed in-app prescription refill interface and workflow for pet-owners to request refills based on past history.  This interface supported a dynamic form system used by clinics to capture additional information from their clients.",
        },
        {
          description:
            "Developed Automated Icon Library for use in React Components (svg -> react component).  Automation leverages node.js and GitHub actions to publish packages on code merge.",
        },
        {
          description:
            "Integrated Unlayer email template editor for white-label use in an automated email system.",
        },
        {
          description:
            "Provided database schema and guidance to back-end developers to support version control for clinic’s custom email templates based on previous experience in developing Content Management Systems (CMS).",
        },
        {
          description:
            "Wrote several GraphQL queries to support various front-end features such as the prescription refill system and email template editor. ",
        },
        {
          description:
            "Provided daily code reviews and added guidance on how to implement the component library / design system.",
        },
        {
          description:
            "Gave demos and presentations at an organization level to show off new app features.",
        },
      ],
    },
    {
      companyName: "Boehringer Ingelheim (Pawru / acquired by TeleVet)",
      jobTitle: "Senior Mobile Developer",
      startDate: "01/21",
      endDate: "04/22",
      responsibilities: [
        {
          tags: ["Angular", "Ionic"],
          description:
            "Optimized and maintained PetProConnect pet owner (Ionic/Angular) App.",
        },
        {
          tags: ["Angular"],
          description:
            "Optimized and maintained PetProConnect clinic portal (Angular).",
        },
        {
          tags: ["ReactNative"],
          description: "Built prototype React-Native App for Pawru Rebranding.",
        },
        {
          tags: ["React"],
          description:
            "Helped develop Pawru Branded React Clinic Portal to replace Angular Portal.",
        },
      ],
    },
    {
      companyName: "NC Mutual Drug",
      jobTitle: "Lead Fullstack Developer",
      startDate: "10/19",
      endDate: "8/20",
      responsibilities: [
        { description: "Operated as a full-stack developer and designer. " },
        {
          description:
            "Designed a membership based shopping portal for overnight delivery of pharmaceutical goods.",
        },
        {
          tags: ["Angular"],
          description:
            "Developed shopping site using Angular 9, Redux and Material.",
        },
        {
          description:
            "Designed and developed API using classic ASP.NET MVC methodologies as requested by MD.",
        },
        {
          description:
            "Designed and developed SQL Server database. Wrote SQL Stored procedures to support API. ",
        },
        {
          tags: ["SQL", "Encryption"],
          description:
            "Designed and developed SQL Auth methods utilizing SHA256 Salt hashing.",
        },
      ],
    },
    {
      companyName: "BLDG-25",
      jobTitle: "Senior Frontend Developer",
      startDate: "03/18",
      endDate: "10/19",
      responsibilities: [
        {
          tags: ["Angular"],
          description:
            "Using the latest version of Angular, I provided expertise on multiple projects.",
        },
        {
          tags: ["Redux"],
          description:
            "Big focus on building stateful systems through the use of Redux stores.",
        },
        {
          tags: ["Ionic", "Node"],
          description:
            "Developed mobile app for ECGC using Ionic and an API built in Node.js.",
        },
        {
          description:
            "Created custom dynamic SVG graphs and gauges for dashboard applications.",
        },
        {
          description:
            "Tasteful use of animations for enhancing user experience.",
        },
        {
          description:
            "Built a design system in Adobe Xd for communicating design changes through rapid prototyping.",
        },
        { description: "Mentor to junior developers." },
      ],
    },
    {
      companyName: "Cisco",
      jobTitle: "Front-End Software Engineer (contract)",
      startDate: "09/17",
      endDate: "03/18",
      responsibilities: [
        {
          tags: ["Angular"],
          description: "Developed applications in both Angular 1 and 4.\n",
        },
        {
          tags: ["Bootstrap"],
          description: "Maintained UI kit built with SASS and SVG.",
        },
        { description: "Collaborated with team members to implement CORS." },
        { description: "Applied Google Analytics to utilization metrics" },
        {
          description:
            "Streamlined development process by implementing localized development (Angular CLI)",
        },
        {
          description:
            "Developed custom Gulp build with Node.js for compiling Angular.js apps.",
        },
      ],
    },
    {
      companyName: "GSK",
      jobTitle: "Lead Front-End Software Engineer (contract)",
      startDate: "05/17",
      endDate: "09/17",
      responsibilities: [
        { description: "Lead developer for FindMySite.com" },
        {
          description:
            "Used design documents (PDFs and PSDs) to create a site from spec.",
        },
        {
          tags: ["Bootstrap", "jQuery"],
          description:
            "Leveraged Bootstrap and jQuery to build a responsive, mobile ready platform.",
        },
        {
          description:
            "Used previous design experience to produce assets (svg graphics) from provided documentation .",
        },
        {
          description:
            "Collaborated with back-end Java developers to produce services to support the front-end.",
        },
      ],
    },
    {
      companyName: "Sysomos",
      jobTitle: "Fullstack Software Engineer (contract)",
      startDate: "02/17",
      endDate: "05/17",
      responsibilities: [
        {
          description:
            "Developed RESTful services in C# .NET using a combination of Lync, DTOs and Entity Framework.\n",
        },
        {
          description:
            "Built front-end components using Angular.js, Typescript, CSS and HTML.",
        },
        {
          description:
            "Wrote CSS to unify the look and feel across multiple client facing systems.",
        },
        {
          description:
            "Collaborated with the Design team to work on rebranding efforts.",
        },
        { description: "Used both GIT and TFS for source control." },
      ],
    },
    {
      companyName: "Cisco",
      jobTitle: "Front-End Software Engineer (contract)",
      startDate: "10/16",
      endDate: "01/17",
      responsibilities: [
        {
          description:
            "Developed a system for automating the creation of bill of materials for supporting Cisco’s IoT initiatives.",
        },
        {
          description:
            "Designed a responsive UI based on corporate approved style guide and toolkit.",
        },
        {
          description:
            "Developed a RESTful API for Angular services and factories.",
        },
        {
          description:
            "Created build process for optimizing JavaScript and CSS with Gulp, SASS, and a variety of Node Modules.",
        },
        {
          description:
            "Worked directly with the IoT team to tailor a solution that fit their needs.",
        },
        {
          description:
            "Used GIT source control to track bugs and issues and tie code commits to fixes.",
        },
      ],
    },
    {
      companyName: "Blue Cross Blue Shield of North Carolina",
      jobTitle: "Senior Web Developer",
      startDate: "04/12",
      endDate: "05/16",
      responsibilities: [
        {
          description:
            "Architected, developed and implemented a JavaScript MVC platform using OOP practices to support the Members Portal and other ancillary products.",
        },
        {
          description:
            "Subject matter expert and mentor to team members who worked on the Member Portal.",
        },
        {
          description:
            "Practiced Agile methodologies while working on all major corporate projects.",
        },
        { description: "Responsible for documentation of new development." },
        {
          description:
            "Experienced in modern open-source build processes using NPM, Gulp, and GIT.",
        },
        {
          description:
            "Responsible for developing and maintaining Enterprise Management System written in Node.js.",
        },
      ],
    },
    {
      companyName: "PHE",
      jobTitle: "Senior Fullstack Developer",
      startDate: "02/08",
      endDate: "04/12",
      responsibilities: [
        {
          description:
            "Responsible for reducing page load times by over 3 seconds with a combination of implementing server side caching and front-end optimization.",
        },
        {
          description:
            "Developed on the ASP.Net platform using the MVC Framework as well as Web Forms.",
        },
        {
          description: "Developed a video player using Flash and ActionScript.",
        },
        {
          description:
            "Played an Architectural role in the development of a home grown Content Management System.",
        },
        {
          description:
            "Educated newer developers with system structure/ patterns/ code reviews and participated in/ lead ",
        },
        {
          description:
            "Key-resource for writing and structuring CSS, JavaScript and HTML.",
        },
        {
          description:
            "Daily use of VB.Net, MVC, Web Forms, JavaScript, JQuery, CSS, SQL (SQL Server), Visual Studio, Team Foundation Server (for source control), and PhotoShop (for sprite images and imaging optimization)",
        },
      ],
    },
    {
      companyName: "Womble, Carlyle, Sandridge and Rice PLLC",
      jobTitle: "Lead Programmer – Knowledge Management",
      startDate: "07/06",
      endDate: "02/08",
      responsibilities: [
        {
          description:
            "Developing and maintaining the firms Intranet and Extranet portal systems.  ",
        },
        {
          description:
            "Led consolidation and maintenance of many older subsystems developed by previous programmers.  ",
        },
        {
          description:
            "Utilized skills in C#, ASP.Net 2, SQL Server, JavaScript and classic ASP to further develop and maintain a host of custom applications and develop new applications within SharePoint.",
        },
        {
          description:
            "Developed architecture for new Intranet/Extranet using SharePoint in 5 server farm",
        },
        {
          description:
            "Migrated previous intranet system to MS SharePoint Portal Server 2003.",
        },
        {
          description:
            "Created custom case management systems using SharePoint, C# and ASP.Net.",
        },
        {
          description:
            "Upgraded the SharePoint 2003 portal to MS Office SharePoint Server 2007.",
        },
        {
          description:
            "Deployed an extranet using MS Office SharePoint Server 2007.",
        },
        {
          description:
            "Customized extranet sites using ASP.NET 2 master pages.",
        },
        {
          description:
            "Deployed MS Media Server for streaming video in SharePoint Portal.",
        },
        {
          description:
            "Developed custom firm personnel search for intranet using custom web-parts, ASP.NET and C#, that tied into data provided from CRM.",
        },
        {
          description:
            "Developed and integrated real-time reports, graphs and dashboards into portal using SQL Reporting Services.",
        },
      ],
    },
    {
      companyName: "Volunteers of America, Inc.",
      jobTitle: "Web Systems Manager",
      startDate: "12/04",
      endDate: "07/06",
      responsibilities: [
        {
          description:
            "Sole web developer and technical resource for Volunteers of America's online presence.  ",
        },
        {
          description:
            "Responsible for presentation of content and graphics and on-call website support to 39 affiliate offices.  ",
        },
        {
          description:
            "Supported applications included websites, online donation forms, car donation forms, Intranet, content management system, and email marketing system.",
        },
        {
          description:
            "Developed and launched national office public website with new marketing brand using MS Content Management Server (MCMS) along with C# and ASP.NET 2.",
        },
        {
          description:
            "Developed web form for processing online donations using ASP.NET, C#, and Bank of America API.",
        },
        {
          description:
            "Developed architecture to support MCMS and online donations using Windows Server and SQL Server.",
        },
        {
          description:
            "Branded and deployed extranet portal system using DotNetNuke.",
        },
        {
          description:
            "Effectively managed $60,000 annual web communications budget.",
        },
        {
          description:
            "Accommodated and provided statistical analysis of email marketing campaigns.",
        },
        {
          description:
            "Created online reporting system in ColdFusion to meet need for affiliates to retrieve program statistics and outcome data.",
        },
      ],
    },
    {
      companyName: "Communication Technologies, Inc",
      jobTitle: "Administrator/Systems Engineer",
      startDate: "08/02",
      endDate: "12/04",
      responsibilities: [
        {
          description:
            "Part of the government contracted technical support team. ",
        },
        {
          description:
            "Responsibilities included development of technical support extranet site and providing onsite support for customer's IT resources including creation and posting of documents and procedures to online support website.   Onsite visits to many government establishments and documented and shared lessons learned to nationwide support teams.",
        },
        {
          description:
            "Utilized skills in HTML, JavaScript, PHP, ColdFusion, Illustrator and Technical writing.",
        },
        {
          description:
            "Developed and branded companies online technical support extranet.",
        },
        {
          description:
            "Developed many contract specific online document resource websites.",
        },
        {
          description:
            "Illustrated and documented magnitude of repair procedures that identified fixes to recurrent problems found in the field. ",
        },
        {
          description:
            "Developed workflow for streamlining IT help desk system.",
        },
      ],
    },
  ],
  education: [],
};
