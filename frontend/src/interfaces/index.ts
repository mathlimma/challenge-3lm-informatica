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
  _id: string;
  description: string;
}

export interface IRootState {
  employee: IEmployeesObg;
}

export interface IEmployeesObg {
  employees: IEmployee[];
  loading: boolean;
}

export interface IRoleObg {
  roles: IRole[];
  loading: boolean;
}
