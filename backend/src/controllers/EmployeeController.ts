import { Request, Response } from "express";
import { Employee } from "../schemas/Employee";

class EmployeeController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const employees = await Employee.find().populate({
        path: "role",
        model: "Role",
        select: "_id description",
      });

      return res.json(employees);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const employee = await Employee.findById(req.params.id).populate({
        path: "role",
        model: "Role",
        select: "_id description",
      });

      return res.json(employee);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      let employee = await Employee.create(req.body);

      employee = await Employee.findById(employee._id).populate({
        path: "role",
        model: "Role",
        select: "_id description",
      });

      return res.json(employee);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      let employee = await Employee.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      employee = await Employee.findById(employee._id).populate({
        path: "role",
        model: "Role",
        select: "_id description",
      });

      return res.json(employee);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      await Employee.findByIdAndDelete(req.params.id);
      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default new EmployeeController();
