export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  const admin = JSON.parse(localStorage.getItem("admin"));
  if (user && user.accessToken) {
       return { Authorization: "Bearer " + user.accessToken };

    
  } else {
    return {Authorization: "Bearer " + admin.accessToken};
  }
}
