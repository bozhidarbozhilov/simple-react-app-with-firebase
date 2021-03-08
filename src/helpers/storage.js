const storage = {
    getData: (key) => localStorage.getItem(key),
    saveUser: (userData) => {
        localStorage.setItem('userInfo', JSON.stringify(userData.user));
        localStorage.setItem('authToken', JSON.stringify(userData.user.b.b.h));
    },
    deleteUser: () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
    },
    saveData: (key, value) => localStorage.setItem(key, value),
}

export default storage;