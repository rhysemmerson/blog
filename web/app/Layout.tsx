import { PropsWithChildren, ReactNode } from "react";

export default function ({ children }: PropsWithChildren<ReactNode>) {
    return <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Rhys Emmerson</h1>
        {children}
    </div>
};