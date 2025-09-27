// src/data/jobsData.js
const jobsData = {
  buttons: [
    { label: "RBI Officer Apply Online", className: "btn-success", link: "/jobs/#" },
    { label: "Bihar Bed Apply Online", className: "btn-primary", link: "/jobs/#" },
    { label: "Bihar STET Apply Online", className: "btn-warning", link: "/jobs/#" },
    { label: "DSSSB Apply Online", className: "btn-danger", link: "/jobs/#" },
    { label: "SSC CGL Admit Card", className: "btn-info", link: "/jobs/#" },
    { label: "HTET Result", className: "btn-dark", link: "/jobs/#" },
    { label: "MPESB Apply Online", className: "btn-secondary", link: "/jobs/#" },
    { label: "CISF Admit Card", className: "btn-primary", link: "/jobs/#" },
  ],

  sections: [
    {
      category: "Latest Jobs",
      posts: [
        {
          id: 4,
          title: "IBPS RRB 14th Recruitment 2025 Date Extend",
          date: "27 Sep 2025",
          desc: "Extended application date for IBPS RRB recruitment.",
          requestLink: "#",
          applyLink: "https://ibps.in/apply",
          admitCardLink: "https://ibps.in/admit-card",
          syllabusLink: "https://ibps.in/syllabus",
          importantDates: [
            { event: "Notification Released", date: "25 Sep 2025" },
            { event: "Last Date to Apply", date: "10 Oct 2025" },
            { event: "Exam Date", date: "25 Nov 2025" },
          ],
        },
        {
          id: 3,
          title: "IBPS RRB 14th Recruitment 2025 Date Extend",
          date: "27 Sep 2025",
          desc: "Extended application date for IBPS RRB recruitment.",
          requestLink: "#",
          applyLink: "https://ibps.in/apply",
          admitCardLink: "https://ibps.in/admit-card",
          syllabusLink: "https://ibps.in/syllabus",
          importantDates: [
            { event: "Notification Released", date: "25 Sep 2025" },
            { event: "Last Date to Apply", date: "10 Oct 2025" },
            { event: "Exam Date", date: "25 Nov 2025" },
          ],
        },
        {
          id: 2,
          title: "Railway RRC ECR Patna Apprentice Form 2025",
          date: "25 Sep 2025",
          desc: "Railway RRC East Central Railway Patna has released the notification for the recruitment of Apprentice positions. Interested candidates can apply online through the official website. The application process, eligibility criteria, and important dates are provided in the notification.",
          requestLink: "#",
          applyLink: "https://rrc.ecr.in/apply",
          admitCardLink: "https://rrc.ecr.in/admit-card",
          syllabusLink: "https://rrc.ecr.in/syllabus",
          importantDates: [
            { event: "Notification Released", date: "20 Sep 2025" },
            { event: "Last Date to Apply", date: "05 Oct 2025" },
            { event: "Exam Date", date: "20 Nov 2025" },
          ],
        },
        {
          id: 1,
          title: "SSC Delhi Police Driver Online Form",
          date: "20 Sep 2025",
          desc: "SSC Delhi Police Driver recruitment application.",
          requestLink: "#",
          applyLink: "https://ssc.nic.in/apply",
          admitCardLink: "https://ssc.nic.in/admit-card",
          syllabusLink: "https://ssc.nic.in/syllabus",
          importantDates: [
            { event: "Notification Released", date: "15 Sep 2025" },
            { event: "Last Date to Apply", date: "30 Sep 2025" },
            { event: "Exam Date", date: "20 Oct 2025" },
          ],
        },
      ],
    },

    // Admit Card Section
    {
      category: "Admit Card",
      posts: [
        {
          id: 4,
          title: "IB Security Assistant Admit Card 2025",
          date: "15 Sep 2025",
          desc: "Download IB Security Assistant admit card.",
          requestLink: "#",
          admitCardLink: "https://ib.in/admit-card",
        },
        {
          id: 5,
          title: "LIC AAO / AE Admit Card 2025",
          date: "10 Sep 2025",
          desc: "LIC AAO/AE examination admit card available.",
          admitCardLink: "https://lic.in/admit-card",
        },
      ],
    },

    // Result Section
    {
      category: "Result",
      posts: [
        {
          id: 6,
          title: "BPSSC Bihar Police Enforcement SI Pre Result 2025",
          date: "01 Sep 2025",
          desc: "Bihar Police SI Pre exam result declared.",
          resultLink: "https://bpssc.bihar.gov.in/result",
        },
      ],
    },
  ],
};

export default jobsData;
