import { ModeToggle } from "../ui/mode-toggle";

export const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-secondary">
    <div className="text-xl font-bold">Form with Tabs</div>
    <ModeToggle />
  </nav>
);
