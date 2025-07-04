import React from "react";
import "../styles/Organogram.css";

const data = {
    title: "Organogram",
    levels: [
        ["BOD SEPCO"],
        ["CEO"],
        ["M (IA)", "Co. Sec"],
        ["CE (PMU)", "CE/OD", "CE/TD", "CS-D", "FD", "HRAD", "M(MIS)"],
        [
            ["M(PS&C)", "M(Proc)", "M(PF)", "PD GSC", "DM(E&S)"],
            ["M(CM&O)", "SE Op Circle Suk", "SE Op Circle Lrk", "SE Op Circle Dadu", "RM(M&T)"],
            ["M(P&D)", "M(MM)", "SE (GSO)", "PD (Const)"],
            ["M(Com)", "M(TM&CM)", "IM(S&I)"],
            ["M(CPC)", "M(CA)"],
            ["M(HR)", "M(Admn)", "M(L&L)", "DM(PR)"],
            []
        ]
    ]
};

const Organogram = () => {
    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e6f0ff 0%, #f8fafc 100%)' }}>
            <section className="page-section">
                <div className="organogram-container">
                    <h1>{data.title}</h1>
                    <div className="organogram-chart">
                        {data.levels.map((level, i) => (
                            <div className="organogram-row" key={i}>
                                {Array.isArray(level[0])
                                    ? level.map((group, j) => (
                                        <div className="organogram-column" key={j}>
                                            {group.map((item, k) => (
                                                <div className="organogram-box" key={k}>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                    : level.map((item, j) => (
                                        <div className="organogram-box" key={j}>
                                            {item}
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Organogram;
