import type { PropsWithChildren, ReactNode } from "react";

export default function Layout ({ children }: PropsWithChildren<ReactNode>) {
    return <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Rhys Emmerson</h1>
        
        {children}

        <p >Github: <a target="_blank" href="https://github.com/rhysemmerson/blog" rel="noreferrer">@rhysemmerson</a></p>
    </div>
};