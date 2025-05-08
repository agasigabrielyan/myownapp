import React from 'react';
import Link from "next/link";

type Application = { id: number, title: string, status: string };

const fakeApplications: Application[] = [
    {id:1, title: "Заявка №1", status: 'новая'},
    {id:2, title: "Заявка №2", status: 'в работе'},
    {id:3, title: "Заявка №3", status: 'завершена'},
];

function HomePage() {
    return (
        <div className="m-15 border border-b p-15 bg-orange-50">
            <h1>This is myown project</h1>
            <p>
                <Link className="text-blue-600 underline block mb-5" href="/about">
                    Страница о нас
                </Link>
            </p>
            <ul>
                {fakeApplications.map((app) => (
                    <li key={app.id}>
                        <strong>{app.title}</strong> — {app.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage

