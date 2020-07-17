import { Document, Schema, Model, model } from "mongoose";
import { IEmployee } from "../interfaces";

export interface EmployeeModel extends IEmployee, Document {}

const EmployeeSchema = new Schema(
  {
    image: String,
    name: String,
    secondName: String,
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
    birth: String,
    salary: String,
  },
  {
    timestamps: true,
  }
);

export const Employee: Model<EmployeeModel> = model<EmployeeModel>(
  "Employee",
  EmployeeSchema
);
