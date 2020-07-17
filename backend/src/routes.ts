import { Router } from "express";
import EmployeeController from "./controllers/EmployeeController";
import RoleController from "./controllers/RoleController";

const routes = Router();

// employee
routes.get("/employees", EmployeeController.index);
routes.get("/employees/:id", EmployeeController.show);
routes.post("/employees", EmployeeController.store);
routes.put("/employees/:id", EmployeeController.update);
routes.delete("/employees/:id", EmployeeController.delete);

//role

routes.get("/roles", RoleController.index);
routes.get("/roles/:id", RoleController.show);
routes.post("/roles", RoleController.store);
routes.put("/roles/:id", RoleController.update);
routes.delete("/roles/:id", RoleController.delete);

export default routes;
