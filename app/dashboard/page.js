'use client';

import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

    function handleLogout() {
        router.push('/login');
    }

    function handleSearch() {
        router.push('/search');
    }

    function handleEvents() {
        router.push('/events');
    }

    function handleExport() {
        router.push('/export');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Dashboard</h1>
                        <p class="py-3">What would you like to do?</p>
                        <div class="flex flex-col space-y-3">
                            <button
                                class="btn btn-neutral"
                                onClick={() => handleSearch()}
                            >Search for a member</button>
                            <button
                                class="btn btn-neutral"
                                onClick={() => handleEvents()}
                            >View / edit events</button>
                            <button
                                class="btn btn-neutral"
                                onClick={() => handleExport()}
                            >Export data</button>
                            <button
                                class="btn btn-error"
                                onClick={() => handleLogout()}
                            >Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}