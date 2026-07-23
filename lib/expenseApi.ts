const API_URL = "http://localhost:4001/api/expenses";

function getToken() {
  return localStorage.getItem("accessToken");
}

/* ==========================================
   CREATE EXPENSE
========================================== */

export async function createExpense(data: any) {
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
   GET ALL EXPENSES
========================================== */

export async function getExpenses() {
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
   GET SINGLE EXPENSE
========================================== */

export async function getExpense(id: string) {
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
   UPDATE EXPENSE
========================================== */

export async function updateExpense(
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
   DELETE EXPENSE
========================================== */

export async function deleteExpense(id: string) {
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