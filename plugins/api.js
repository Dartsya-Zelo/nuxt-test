
import Users from "./api/users";

export default (context, inject) => {
    const factories = {
        users: Users(context.$axios),
    };
    inject("api", factories);
}


   