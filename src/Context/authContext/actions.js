const ROOT_URL = "http://localhost:8080";

export async function loginUser(dispatch, loginPayload) {
  console.log(loginPayload);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    //body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    console.log(
      `${ROOT_URL}/api/authenticate?password=${loginPayload.password}&userName=${loginPayload.username}`
    );
    let response = await fetch(
      `${ROOT_URL}/api/authenticate?password=${loginPayload.password}&userName=${loginPayload.username}`,
      requestOptions
    );
    let data = await response.json();

    if (data.authenticated) {
      dispatch({ type: "LOGIN_SUCCESS", payload: loginPayload });
      localStorage.setItem("currentUser", JSON.stringify(loginPayload));
      return data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.error });
    console.log(data.error);
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
    console.log(error);
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
