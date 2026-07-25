const API_URL = "http://localhost:4001/api/auth";

function getToken() {
  return localStorage.getItem("accessToken");
}

/* ==========================================
   GET PROFILE
========================================== */

export async function getProfile() {
  try {
    const res = await fetch(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!res.ok) {
      return {
        success: false,
        message: await res.text(),
      };
    }

    return await res.json();
  } catch {
    return {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
}

/* ==========================================
   UPDATE PROFILE
========================================== */

export async function updateProfile(data: {
  name: string;
  email: string;
}) {
  try {
    const res = await fetch(`${API_URL}/profile`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        success: false,
        message: await res.text(),
      };
    }

    return await res.json();
  } catch {
    return {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
}

