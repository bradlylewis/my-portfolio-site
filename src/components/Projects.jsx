import gameStoreTile from "../assets/images/game_store_tile.png";
import groceryListTile from "../assets/images/grocery_list_tile.png";
import saasAdminDashboardTile from "../assets/images/saas_admin_dashboard_tile.png";
import tripPlannerTile from "../assets/images/trip_planner_tile.png";

const projects = [
  {
    title: "E-commerce Game Store",
    image: gameStoreTile,
    description:
      "React + Firebase e-commerce app with dynamic cart logic, checkout flow using Stripe, and Firestore-backed product data—deployed via Firebase Hosting.",
    link: "https://github.com/bradlylewis/ecom-gamestore",
  },
  {
    title: "Grocery List Planner",
    image: groceryListTile,
    description:
      "Next.js + AWS full-stack app with recipe planning, user auth via Cognito, serverless API via Lambda, PostgreSQL via RDS, and image uploads to S3.",
    link: "https://github.com/bradlylewis/grocery-list-app",
  },
  {
    title: "SaaS Admin Dashboard",
    image: saasAdminDashboardTile,
    description:
      "Angular + Azure enterprise dashboard with role-based access, reactive forms, state management, and charting—deployed via Azure Static Web Apps + Functions.",
    link: "https://github.com/bradlylewis/saas-control-center",
  },
  {
    title: "Trip Planner",
    image: tripPlannerTile,
    description:
      "Vue  + Supabase group trip planner with realtime voting, drag-and-drop itineraries, Google Maps integration, and optional AI-powered trip suggestions—built for collaborative travel planning.",
    link: "https://github.com/bradlylewis/trip-planner"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-retro-offwhite pt-[5rem] md:pt-30 flex flex-col">
      <div className="container mx-auto flex-1 lg:max-w-6xl px-8 md:px-12 ">
        <div>
          <h2 className="text-2xl md:text-3xl font-semi-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 mb-8">A few highlights that show how I approach design, code, and real-world problems.</p>
        </div>
        <div className="grid gap-10 lg:gap-30 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index}>
              <h4 className="font-semibold text-brand-blue">
                <a className="hover:text-brand-blue-dark" href={project.link} target="_blank">
                  {project.title}
                </a>
              </h4>
              <div className="aspect-[16/9] bg-neutral-50 border rounded w-full mb-2">
                <img src={project.image} />
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto lg:max-w-6xl px-8 md:px-12 pt-10 pb-20">
        You can find a full list of the projects I've worked on here:{" "}
        <a href="https://www.github.com/bradlylewis" className="text-brand-blue underline">
          Github
        </a>
      </div>
    </section>
  );
}
