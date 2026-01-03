"use client";

import Link from "next/link";

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" className={className}>
			<rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
			<path d="M4.5 7.5 12 12.5l7.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
		</svg>
	);
}

function PinIcon({ className = "w-4 h-4" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" className={className}>
			<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.4" />
			<circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
		</svg>
	);
}

function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" className={className}>
			<path d="M6 4.5c1.2-1.2 3.3-.9 4.1.6l.7 1.3c.5 1 .2 2.3-.7 3l-.9.8c1.4 2.5 3.6 4.6 6.1 6l.8-.9c.7-.9 2-1.2 3-.7l1.3.7c1.5.8 1.8 2.9.6 4.1-.9 1-2.2 1.5-3.5 1.1-6.8-2.1-12-7.3-14.1-14.1-.4-1.3.1-2.6 1.1-3.5Z" stroke="currentColor" strokeWidth="1.4" />
		</svg>
	);
}

function Social({ label, icon }: { label: string; icon: React.ReactNode }) {
	return (
		<a href="#" className="flex items-center gap-3 px-4 py-3 text-xs text-white/80 hover:bg-white/5">
			<span className="text-white/70">{icon}</span>
			<span className="tracking-wide">{label}</span>
		</a>
	);
}

export default function Footer() {
	return (
		<footer className="relative border-t border-white/5 bg-[#070b16]">
			<div className="relative mx-auto max-w-7xl px-6">
				<div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center opacity-10">
					<span className="select-none text-[16vw] font-black tracking-[0.25em] text-white">AIVORA</span>
				</div>

				<div className="relative pt-20">
					<div className="flex justify-center">
						<a
							href="mailto:aivora@domain.com"
							className="inline-flex items-center gap-3 rounded-full bg-liner-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/40"
						>
							<MailIcon className="w-5 h-5" />z
							aivora@domain.com
						</a>
					</div>

					<div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
						<div>
							<div className="text-[10px] uppercase tracking-[0.2em] text-white/50">What we do?</div>
							<div className="mt-2 text-3xl text-white">Services</div>
						</div>
						<div>
							<div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Who we are?</div>
							<div className="mt-2 text-3xl text-white">About Us</div>
						</div>
						<div>
							<div className="text-[10px] uppercase tracking-[0.2em] text-white/50">How we deliver</div>
							<div className="mt-2 text-3xl text-white">Contact Us</div>
						</div>
						<div>
							<div className="text-[10px] uppercase tracking-[0.2em] text-white/50">What we're good at?</div>
							<div className="mt-2 text-3xl text-white">Our Project</div>
						</div>
						<div>
							<div className="text-[10px] uppercase tracking-[0.2em] text-white/50">News?</div>
							<div className="mt-2 text-3xl text-white">News</div>
						</div>
					</div>

					<div className="mt-12 overflow-hidden rounded-md border border-white/10">
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 divide-x divide-white/10">
							<Social label="Facebook" icon={<span>◯</span>} />
							<Social label="Twitter" icon={<span>✕</span>} />
							<Social label="LinkedIn" icon={<span>▣</span>} />
							<Social label="YouTube" icon={<span>▦</span>} />
							<a href="#" className="flex items-center justify-center px-4 py-3 text-xs text-white/70 hover:bg-white/5">⟶</a>
						</div>
					</div>

					<div className="mt-6 grid items-center gap-4 border-t border-white/10 py-6 md:grid-cols-3">
						<div className="flex items-center gap-2 text-white/80">
							<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400"></span>
							<span>ULAANBATAR, MNG</span>
						</div>
						<div className="text-center text-sm text-white/60">
							Copyright © 2025 <span className="text-white">Aivora</span>, All rights reserved.
						</div>
						<div className="flex items-center justify-end gap-3">
							<span className="text-white/80 inline-flex items-center gap-2">
								<PhoneIcon />
								+(976)9999 9999
							</span>
							
						</div>
						
					</div>
				</div>
				
			</div>
			{/* <div className="">
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					aria-label="Back to top"
					className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-400 text-black shadow-lg hover:bg-emerald-300"
				>
					↑
				</button>
			</div> */}
		</footer>
	);
}

