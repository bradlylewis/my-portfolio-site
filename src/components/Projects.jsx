import gameStoreTile from '../assets/images/game_store_tile.png';
import groceryListTile from '../assets/images/grocery_list_tile.png';
import saasAdminDashboardTile from '../assets/images/saas_admin_dashboard_tile.png';
import tripPlannerTile from '../assets/images/trip_planner_tile.png';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-[5rem] flex flex-col">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 mb-8">A few highlights that show how I approach design, code, and real-world problems.</p>
        </div>
        <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="max-w-[400px] mx-auto">
            <h4 className="font-bold">E-commerce Game Store</h4>
            <div className="aspect-[16/9] bg-neutral-50 border rounded w-full mb-2">
              <img src={gameStoreTile} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae consequatur ipsum perspiciatis vitae temporibus, magnam fugit repellat voluptas error possimus ratione amet in omnis optio! Facere, necessitatibus! Iure, qui?</p>
          </div>
          <div className="max-w-[400px] mx-auto">
            <h4 className="font-bold">Grocery List Planner</h4>
            <div className="aspect-[16/9] bg-neutral-50 border rounded w-full mb-2">
              <img src={groceryListTile} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae consequatur ipsum perspiciatis vitae temporibus, magnam fugit repellat voluptas error possimus ratione amet in omnis optio! Facere, necessitatibus! Iure, qui?</p>
          </div>
          <div className="max-w-[400px] mx-auto">
            <h4 className="font-bold">SaaS Admin Dashboard</h4>
            <div className="aspect-[16/9] bg-neutral-50 border rounded w-full mb-2">
              <img src={saasAdminDashboardTile} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae consequatur ipsum perspiciatis vitae temporibus, magnam fugit repellat voluptas error possimus ratione amet in omnis optio! Facere, necessitatibus! Iure, qui?</p>
          </div>
          <div className="max-w-[400px] mx-auto">
            <h4 className="font-bold">Project 4</h4>
            <div className="aspect-[16/9] bg-neutral-50 border rounded w-full mb-2">
              <img src={tripPlannerTile} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae consequatur ipsum perspiciatis vitae temporibus, magnam fugit repellat voluptas error possimus ratione amet in omnis optio! Facere, necessitatibus! Iure, qui?</p>
          </div>
        </div>
        <div>You can find a full list of the projects I've worked on here: <a href="#">Github</a></div>
      </div>
    </section>
  );
}
