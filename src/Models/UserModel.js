const User = {

    getUser(){
        let user = {};

        try {
           user =  JSON.parse(localStorage.getItem('user'));
        } catch (e) {

        }
        return user;
    },

    updateUser(user){
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch (e) {

        }
    },

    deleteUser(){
        try {
            localStorage.removeItem('user');

        } catch (e) {

        }
    }
};

export default User;