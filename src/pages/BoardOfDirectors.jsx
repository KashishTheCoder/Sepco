import React from "react";
import "../styles/BoardOfDirectors.css"; // We will create this CSS file
import "../styles/About.css";

const directors = [
    { title: "Chairman", name: "Agha Lal Bux Khan", role: "Independent Director" },
    { title: "Director", name: "Mr. Aijaz Ahmed Channa", role: "Executive Director" },
    { title: "Director", name: "Mr. Ahsan Ahmed Soomro", role: "Independent Director" },
    { title: "Director", name: "Mr. Muhammad Khursheed Mirani", role: "Independent Director" },
    { title: "Director", name: "Mr. Imtiaz Ahmed Memon", role: "Independent Director" },
    { title: "Director", name: "Mr. Deewan Chand Chawla", role: "Independent Director" },
    { title: "Director", name: "Mr. Ghulam Mustafa Leghari", role: "Independent Director" },
    { title: "Director", name: "Mr. Suhbat Ali Talpur", role: "EX-Officio Director" },
    { title: "Director", name: "Mr. Nadeem Sabir Virk", role: "EX-Officio Director" },
    { title: "Director", name: "Mr. Muhammad Saleem Shaikh", role: "EX-Officio Director" },
    { title: "Director", name: "Mr. Zafar Ali Shaikh", role: "Independent Director" },
    { title: "Director", name: "Mr. Aijaz Ali Baloch", role: "Independent Director" },
    { title: "Director", name: "Mr. Naeem Akhtar Odho", role: "Independent Director" },
];

export default function BoardOfDirectors() {
    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e6f0ff 0%, #f8fafc 100%)' }}>
            <section className="board-section">
                <div className="container">
                    <h2 className="board-heading">Board of Directors</h2>
                    <div className="cards-wrapper">
                        {directors.map((member, index) => (
                            <div className="board-card" key={index}>
                                <h3>{member.title}</h3>
                                <p>{member.name}</p>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
