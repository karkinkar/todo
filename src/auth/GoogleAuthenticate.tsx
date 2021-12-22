import { useEffect } from "react";
import { createAuthenticationUrl } from "../apiClient/Auth";

export function GoogleAuthenticate() {

    const googleLoginLink = createAuthenticationUrl();

    useEffect(() => window.location.assign(googleLoginLink));

    return <div />
};
