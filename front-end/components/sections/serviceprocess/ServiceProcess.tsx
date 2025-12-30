import React, { useState } from "react";

type Step = {
  id: number;
  title: string;
  description: string[];
  alert: string;
};

export const mockServiceSteps: Step[] = [
  {
    id: 1,
    title: "Судалгаа & Дизайн баталгаажуулалт",
    description: [
        "Байгууллагын зорилго, асуудал",
        "Хэрэглэгчийг тодорхойлох",
        "Website / Mobile app-ийн scope гаргах",
        "UI/UX design (Figma гэх мэт) хийх",
        "Design-ийг албан ёсоор батлуулах",
        "Баталгаажсан дизайн гэрээний нэг хэсэг"
        ],
    alert: "Design батлагдаагүй байхад код бичиж эхэлбэл — чи үнэгүй ажилчин болно.",
  },
  {
    id: 2,
    title: "Development",
    description: [
        "Frontend (Website / Mobile App)",
        "Backend (API, DB, Auth, Admin гэх мэт)",
        "Баталгаажсан design-оос 1 пиксел ч хазайхгүй",
        "Feature бүрийг жижиг хэсгээр хийж явна",
        ],
    alert: "Арай өөр болгочих” гэдэг үг энэ шатанд бол нэмэлт ажил.",
  },
  {
    id: 3,
    title: "Testing & QA",
    description: [
        "Bug засах",
        "Performance, security шалгах",
        "Mobile дээр test хийх (Android / iOS)",
        "Байгууллагаар шат дараалсан шалгалт хийлгэх",
        ],
    alert: "Арай өөр болгочих” гэдэг үг энэ шатанд бол нэмэлт ажил.",
  },
  {
    id: 4,
    title: "Launch & Support",
    description: [
        "Server дээр байрлуулах (deploy)",
        "Domain, SSL, Store upload (Play Store / App Store)",
        "Admin заавар, хэрэглээний тайлбар өгөх",
        "Warranty / Support хугацаа (жишээ нь 1–3 сар)",
        "Design-ийг албан ёсоор батлуулах",
        "Баталгаажсан дизайн гэрээний нэг хэсэг"
        ],
    alert: "Design батлагдаагүй байхад код бичиж эхэлбэл — чи үнэгүй ажилчин болно.",
  },
];

export default function ServiceProcess({ data = mockServiceSteps }: { data?: Step[] }) {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-20 bg-[#030510] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-4xl font-bold">Үйлчилгээний үе шат</h2>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <div className="md:space-y-15 pt-10">
              {data.map((step) => (
                <div key={step.id} className="border-b border-slate-800 pb-6">
                  <button
                    onClick={() => setOpenId(openId === step.id ? null : step.id)}
                    className="flex w-full items-center justify-between text-left text-xl font-semibold leading-snug"
                    aria-expanded={openId === step.id}
                  >
                    <span>{String(step.id).padStart(2, "0")}. {step.title}</span>
                    <span className="ml-4 text-2xl">{openId === step.id ? "−" : "+"}</span>
                  </button>

                  {openId === step.id && (
                    <div className="mt-4 space-y-4 rounded-md border border-slate-800 bg-[#07101a] p-6 text-slate-200">
                        {/* Description */}
                        {step.description.map((line, i) => (
                        <p key={i}>{line}</p>
                        ))}

                        {/* Alert */}
                        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        ⚠ {step.alert}
                        </div>
                    </div>
                    )}

                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-start justify-center">
            <div className="w-full max-w-md">
              <svg viewBox="0 0 360 420" className="w-full h-auto">
                <defs>
                  <linearGradient id="strokeA" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="strokeB" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5a8" />
                    <stop offset="100%" stopColor="#2dd4bf" />
                  </linearGradient>
                  <radialGradient id="fillActive" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                </radialGradient>

                </defs>

                {data.map((step, i) => {
                  const cy = 70 + i * 90; // vertical position
                  const active = openId === step.id;
                  const strokeId = i === 0 ? "strokeA" : "strokeB";

                  return (
                    <g
                      key={step.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setOpenId(openId === step.id ? null : step.id)}
                      onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenId(openId === step.id ? null : step.id);
                        }
                      }}
                      aria-pressed={active}
                      aria-label={`${step.title} ${active ? "(open)" : "(collapsed)"}`}
                      className="cursor-pointer focus:outline-none"
                    >
                      <ellipse
                        cx={180}
                        cy={cy}
                        rx={150}
                        ry={42}
                        fill={active ? "rgba(6,182,212,0.35)" : "none"}
                        stroke={`url(#${strokeId})`}
                        strokeWidth={active ? 4 : 2}
                        className={`transition-all duration-300
                            ${active ? "scale-110" : "scale-100"}
                        `}
                        style={{
                            transformOrigin: "center",
                            transformBox: "fill-box",
                        }}
                        />


                      {/* Text */}
                      <text
                        x={180}
                        y={cy + 6}
                        textAnchor="middle"
                        className={`text-sm font-medium ${active ? "fill-white" : "fill-slate-200/80"}`}
                        style={{ 
                            fontSize: 14,
                            fontWeight:'bold'
                         }}
                      >
                        {step.title}
                      </text>
                    </g>
                  );
                })}

                {/* subtle connectors */}
                <g className="opacity-40">
                  <path d="M180 110 C 120 140, 120 170, 180 200" stroke="#0ea5a8" strokeWidth="1" fill="none" strokeOpacity="0.12" />
                  <path d="M180 200 C 120 230, 120 260, 180 290" stroke="#0ea5a8" strokeWidth="1" fill="none" strokeOpacity="0.12" />
                  <path d="M180 290 C 120 320, 120 350, 180 380" stroke="#0ea5a8" strokeWidth="1" fill="none" strokeOpacity="0.12" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
