import { Request, Response } from "express";
import { Role } from "../schemas/Role";

class RoleController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const roles = await Role.find();

      return res.json(roles);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const role = await Role.findById(req.params.id);

      return res.json(role);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const role = await Role.create(req.body);

      return res.json(role);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const role = await Role.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      return res.json(role);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      await Role.findByIdAndDelete(req.params.id);

      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default new RoleController();
