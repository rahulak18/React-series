import React from "react";

const UserContext = React.createContext('default Value when the provider value is not specified');

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;