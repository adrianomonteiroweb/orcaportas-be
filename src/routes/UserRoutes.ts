import { Router } from "express";

class UserRoutes {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  private setupRoutes(): void {
    // create a new user
    this.router.post("/user");
    // get all users
    this.router.get("/admins");
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default UserRoutes;