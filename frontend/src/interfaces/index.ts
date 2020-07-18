export interface IEmployee {
  _id: number;
  image: string;
  name: string;
  secondName: string;
  role: IRole;
  birth: string;
  salary: boolean;
}

export interface IEditEmployee {
  name: string;
  image: string;
  secondName: string;
  role: string;
  birth: string;
  salary: boolean;
}

export interface IRole {
  _id: number;
  description: string;
}

export interface IEditRole {
  description: string;
}

export interface IRootState {
  employee: IEmployeesObg;
  role: IRoleObg;
}

export interface IEmployeesObg {
  employees: IEmployee[];
  loading: boolean;
}

export interface IRoleObg {
  roles: IRole[];
  loading: boolean;
}
