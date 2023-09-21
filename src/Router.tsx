import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Appointment } from "./pages/Appointment";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Route>
    </Routes>
  );
}
