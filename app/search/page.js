'use client';

import { useRouter } from 'next/navigation';

export default function Login() {

    const router = useRouter();

    function handleClick() {
        router.push('/dashboard');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold">Member Directory</h1>
                            <p class="py-3">Enter a name or phone number to look up a member.</p>
                            <input type="text" placeholder="### - ### - ####" class="input input-bordered input-primary w-full max-w-xs" />
                            <div class="py-3">
                                <button 
                                class="btn btn-primary"
                                onClick={() => handleClick()}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}
