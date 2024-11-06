import { RowDataPacket } from "mysql2";
import { Role } from "@/models/Users";

export interface UserData extends RowDataPacket {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  role: Role;
  profile_path: string;
  created_at: Date;
  updated_at: Date;
  is_deleted: boolean;
}
