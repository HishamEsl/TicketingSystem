export interface IEmployee {
  id: string;
  name: string;
  departmentName:string;
  status:string;
  inProgress:number;
  solved:number;
  email:string;
  joiningDate?:string;
}