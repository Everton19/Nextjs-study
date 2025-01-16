import { ReactNode } from "react";

export default function AdminLayout(
    {children}: {children: ReactNode},
) {
    return (
        <div>
            <h1>{children}</h1>
            

            <div>
                <p>Admin Footer</p>
            </div>
        </div>
    );
}