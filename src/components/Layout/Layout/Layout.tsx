import { Outlet } from '@tanstack/react-location';

export function Layout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}