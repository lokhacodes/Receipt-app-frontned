const API_URL = "http://localhost:4001/api/reports";

function getToken() {
  return localStorage.getItem("accessToken");
}

/* ==========================================
   GET REPORTS
========================================== */

export async function getReports() {
  try {
    const res = await fetch(API_URL, {
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
   GET SINGLE REPORT
========================================== */

export async function getReport(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
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
   CREATE REPORT
========================================== */

export async function createReport(data: any) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
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

/* ==========================================
   UPDATE REPORT
========================================== */

export async function updateReport(
  id: string,
  data: any
) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
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

/* ==========================================
   DELETE REPORT
========================================== */

export async function deleteReport(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
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