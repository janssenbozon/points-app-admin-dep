'use client';

import { useRouter } from 'next/navigation';

export default function Login() {

    const router = useRouter();

    function handleClick() {
        router.push('/dashboard');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
                        <h1 class="text-5xl font-bold">Create an event.</h1>
                        <p class="pt-2 pb-4">All fields are required.</p>
                        <div class="flex flex-col space-y-2 w-80">
                            <input type="text" placeholder="Name" class="input input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="Category" class="input input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="Points" class="input input-bordered input-primary w-full max-w-xs" />
                            <h1 class="text-xl font-medium">Start Date</h1>
                            <div class="flex flex-row space-x-2">
                                <input type="text" placeholder="MM" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <input type="text" placeholder="DD" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <input type="text" placeholder="YYYY" class="input input-bordered input-primary w-1/2 max-w-xs" />
                            </div>
                            <h1 class="text-xl font-medium">Start Time</h1>
                            <div class="flex flex-row space-x-2">
                                <input type="text" placeholder="HH" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <input type="text" placeholder="MM" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <select class="select select-bordered select-primary w-1/2 max-w-xs">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                            <h1 class="text-xl font-medium">End Date</h1>
                            <div class="flex flex-row space-x-2">
                                <input type="text" placeholder="MM" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <input type="text" placeholder="DD" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <input type="text" placeholder="YYYY" class="input input-bordered input-primary w-1/2 max-w-xs" />
                            </div>
                            <h1 class="text-xl font-medium">End Time</h1>
                            <div class="flex flex-row space-x-2">
                                <input type="text" placeholder="HH" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <input type="text" placeholder="MM" class="input input-bordered input-primary w-1/4 max-w-xs" />
                                <select class="select select-bordered select-primary w-1/2 max-w-xs">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                            <div class="flex justify-center py-3">
                                <button
                                class="btn btn-primary"
                                onClick={() => handleClick()}>Create</button>
                            </div>
                        </div>
        </main>
    )
}
