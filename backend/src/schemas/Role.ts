import { Document, Schema, Model, model } from "mongoose";
import { IRole } from "../interfaces";

export interface RoleModel extends IRole, Document {}

const RoleSchema = new Schema(
  {
    description: String,
  },
  {
    timestamps: true,
  }
);

export const Role: Model<RoleModel> = model<RoleModel>("Role", RoleSchema);
