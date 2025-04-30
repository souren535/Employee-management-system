const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Prepare sales report",
        description: "Compile and analyze Q1 sales data.",
        date: "2025-04-28",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        title: "Client onboarding",
        description: "Complete onboarding process for client X.",
        date: "2025-04-10",
        category: "Client",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Team meeting",
        description: "Join weekly sync with product team.",
        date: "2025-04-30",
        category: "Meetings",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Update website banner",
        description: "Change homepage banner to new summer theme.",
        date: "2025-04-29",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        title: "Fix footer bug",
        description: "Footer misalignment in mobile view.",
        date: "2025-04-15",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Write blog post",
        description: "Post about April product updates.",
        date: "2025-04-30",
        category: "Marketing",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Inventory check",
        description: "Audit all warehouse stocks.",
        date: "2025-04-25",
        category: "Logistics",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        title: "Shipment delay issue",
        description: "Resolve customer complaint about delivery delay.",
        date: "2025-04-12",
        category: "Support",
      },
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Restock popular items",
        description: "Order top-selling items from supplier.",
        date: "2025-04-30",
        category: "Procurement",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Monthly performance review",
        description: "Evaluate KPIs for March.",
        date: "2025-04-26",
        category: "HR",
      },
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Plan training session",
        description: "Organize upskilling workshop for interns.",
        date: "2025-04-30",
        category: "Training",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Customer feedback analysis",
        description: "Review feedback from the last quarter.",
        date: "2025-04-27",
        category: "Customer Success",
      },
      {
        active: false,
        newTask: true,
        failed: false,
        title: "Test new feature",
        description: "QA testing for version 2.3.1.",
        date: "2025-04-30",
        category: "QA",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        title: "Weekly deployment",
        description: "Missed deployment deadline due to merge conflicts.",
        date: "2025-04-20",
        category: "DevOps",
      },
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Create video demo",
        description: "Record a short demo for the landing page update.",
        date: "2025-04-30",
        category: "Content",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    
     const employees = JSON.parse(localStorage.getItem("employees"));
      const admin = JSON.parse(localStorage.getItem("admin"));

      console.log(employees, admin);

};
