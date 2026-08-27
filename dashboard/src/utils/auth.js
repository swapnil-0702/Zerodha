const API_BASE_URL = "https://zerodha-backend-4s7s.onrender.com";

export const getStoredUser = () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.log("Invalid user data in localStorage");
    localStorage.removeItem("user");
    return null;
  }
};

export const getDisplayName = (user) =>
  user?.firstName?.trim() || user?.username?.trim() || "User";

export const getUsername = (user) => user?.username?.trim() || getDisplayName(user);

export const getAvatarLetter = (user) =>
  getDisplayName(user).trim().charAt(0).toUpperCase() || "U";

export const saveTokenFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (!token) {
    return localStorage.getItem("token");
  }

  localStorage.setItem("token", token);
  params.delete("token");

  const nextSearch = params.toString();
  const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);

  return token;
};

export const fetchLoggedInUser = async () => {
  const token = saveTokenFromUrl();

  const response = await fetch(`${API_BASE_URL}/me`, {
    credentials: "include",
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });

  if (!response.ok) {
    throw new Error("Unable to fetch logged-in user");
  }

  const user = await response.json();
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};
