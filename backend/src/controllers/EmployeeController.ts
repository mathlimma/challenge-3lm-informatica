import { Request, Response } from "express";
import { Employee } from "../schemas/Employee";

class EmployeeController {
  public async index(req: Request, res: Response): Promise<Response> {
    const employees = await Employee.find().populate({
      path: "role",
      model: "Role",
      select: "_id description",
    });

    return res.json(employees);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const employee = await Employee.findById(req.params.id).populate({
      path: "role",
      model: "Role",
      select: "_id description",
    });

    return res.json(employee);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const employee = await Employee.create(req.body);

    return res.json(employee);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    return res.json(employee);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    await Employee.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  }
}

export default new EmployeeController();
