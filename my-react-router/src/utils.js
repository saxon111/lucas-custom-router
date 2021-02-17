export const userApi = {
  list() {
    const userString = localStorage.getItem("user");
    const users = userString ? JSON.parse(userString) : [];
    return users;
  },
  add(user) {
    let users = userApi.list();
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
  },
  find(id) {
    let users = userApi.list();
    return users.find((user) => user.id === id);
  },
};
