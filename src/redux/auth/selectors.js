// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsLoggedIn = (state) => !!state.auth.token;
export const selectUser = (state) => state.auth.user;
