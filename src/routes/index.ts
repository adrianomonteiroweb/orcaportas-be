import UserRoutes from "./UserRoutes";

const isUserRoutes: any = new UserRoutes();

const routes: Array<any> = [
    isUserRoutes.getRouter(),
];

export default routes;