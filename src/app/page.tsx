import React from 'react';

type Application = { id: number, title: string, status: string };

const fakeApplications: Application[] = [
    {id:1, title: "Заявка №1", status: 'новая'},
    {id:2, title: "Заявка №2", status: 'в работе'},
    {id:3, title: "Заявка №3", status: 'завершена'},
];

function HomePage() {
    return (
        <ul className="m-15 border border-b p-15 bg-orange-50">
            {fakeApplications.map((app) => (
                <li key={app.id}>
                    <strong>{app.title}</strong> — {app.status}
                </li>
            ))}
        </ul>
    );
}

export default HomePage

