import { Request, Response } from "express";
import { Role } from "../schemas/Role";

class RoleController {
  public async index(req: Request, res: Response): Promise<Response> {
    const roles = await Role.find();

    return res.json(roles);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const role = await Role.findById(req.params.id);

    return res.json(role);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const role = await Role.create(req.body);

    return res.json(role);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const role = await Role.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });

    return res.json(role);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    await Role.findByIdAndDelete(req.params.id);

    return res.json({ success: true });
  }
}

export default new RoleController();
