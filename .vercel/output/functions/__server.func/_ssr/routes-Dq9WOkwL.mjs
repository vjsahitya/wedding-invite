import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dq9WOkwL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var couple = {
	one: "Tina",
	two: "Sahitya",
	kicker: "We're getting married",
	dateLine: "26 — 27 January 2027",
	place: "Mandu",
	venue: "JMD Resort, Mandu",
	mapsUrl: "https://maps.app.goo.gl/cfcyjEuMEsYsoM736",
	plannerUrl: "Planner Sahitya.pdf"
};
var ganeshCandidates = [
	"Ganesh%20Logo.png",
	"Ganesh Logo.png",
	"GaneshLogo.png",
	"ganesh-logo.png"
];
var galleryFiles = [
	"Photo0.jpg",
	"Photo1.HEIC",
	"Photo2.HEIC",
	"Photo3.JPG",
	"Photo4.jpg"
];
var story = [
	{
		year: "Hyderabad",
		title: "How We Met",
		body: "We met during our first job in Hyderabad. What started as two people working in the same city slowly became a six-year story."
	},
	{
		year: "2020",
		title: "Across Distance",
		body: "Then COVID happened. For two years, we learnt how to love across distance, through screens, calls, waiting and countless little moments."
	},
	{
		year: "The Hills",
		title: "The Proposal",
		body: "Sahitya proposed while we were trekking to Tungnath, surrounded by the hills, with our closest people secretly involved in the surprise. The proposal happened close to Shiva — a moment that felt incredibly meant to be."
	},
	{
		year: "2027",
		title: "Our Forever",
		body: "Now, after six years together, we're beginning our next chapter. Join us as we celebrate love, family and the beginning of our forever in Mandu."
	}
];
var program = [{
	label: "Day One",
	date: "26 January 2027",
	items: [
		{
			when: "Afternoon",
			title: "Welcome Lunch",
			detail: "Tina's Oli · Sahitya's Tilak",
			attire: "Indian Casual",
			icon: "welcome"
		},
		{
			when: "Sundown",
			title: "Van Cleef's Fairytale",
			detail: "Sundowner Engagement",
			attire: "Western Pastels",
			icon: "sparkle"
		},
		{
			when: "Night",
			title: "Cartier's Love Affair",
			detail: "Sangeet · Crazy After-Party",
			attire: "Anything Bling",
			icon: "music"
		}
	]
}, {
	label: "Day Two",
	date: "27 January 2027",
	items: [{
		when: "Morning",
		title: "Hermès: Sunny Citrus",
		detail: "Haldi Celebration",
		attire: "Anything Purple",
		icon: "citrus"
	}, {
		when: "Midnight",
		title: "The Sabyasachi Varmala",
		detail: "Varmala · Midnight Pheras",
		attire: "Royal Indian Wear",
		icon: "ceremony"
	}]
}];
function Envelope({ open, fading, onOpen }) {
	const cls = [
		"envelope-intro",
		open ? "is-open" : "",
		fading ? "is-gone" : ""
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cls,
		role: "dialog",
		"aria-label": "Wedding invitation envelope",
		"aria-hidden": open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "envelope-sheet",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "envelope-flap",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "envelope-seal",
					onClick: onOpen,
					"aria-label": "Open the invitation",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/wax-seal.jpg",
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "monogram",
						children: [
							couple.one[0],
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontSize: "0.72em",
									padding: "0 0.04em"
								},
								children: "&"
							}),
							couple.two[0]
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "envelope-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "envelope-invite",
						children: "You are invited"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "envelope-hint",
						onClick: onOpen,
						children: "Tap the seal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "envelope-skip",
					onClick: onOpen,
					children: "Open invitation"
				})
			]
		})
	});
}
function Svg({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "16",
		height: "16",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children
	});
}
function ProgramGlyph({ name }) {
	switch (name) {
		case "welcome": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "9",
				cy: "8",
				r: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "8",
				r: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 18c.4-3 2.2-4.6 4.5-4.6S14.1 15 14.5 18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 13.6c.7-.4 1.6-.6 2.5-.6 2.3 0 4.1 1.6 4.5 4.6" })
		] });
		case "sparkle": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3.5l1.1 4.2L17 8.8l-3.9 1.2L12 14l-1.1-4L7 8.8l3.9-1.1z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.5 13.5l.5 1.8 1.8.5-1.8.5-.5 1.8-.5-1.8-1.8-.5 1.8-.5z" })] });
		case "music": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM20 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18V7l11-2v11" })] });
		case "citrus": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M6.2 8.5l11.6 7M6.2 15.5l11.6-7" })] });
		case "ceremony": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 20s-6-3.8-6-8.2A3.8 3.8 0 0 1 12 9a3.8 3.8 0 0 1 6 2.8C18 16.2 12 20 12 20z" }) });
	}
}
function Reveal({ children, className = "", delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("is-in");
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					window.setTimeout(() => el.classList.add("is-in"), delay);
					io.unobserve(el);
				}
			});
		}, { threshold: .16 });
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${className}`.trim(),
		children
	});
}
function GaneshMark() {
	const [src, setSrc] = (0, import_react.useState)(null);
	const [failed, setFailed] = (0, import_react.useState)(false);
	const idx = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		setSrc("/" + ganeshCandidates[0]);
	}, []);
	function onError() {
		idx.current += 1;
		if (idx.current >= ganeshCandidates.length) {
			setFailed(true);
			return;
		}
		setSrc("/" + ganeshCandidates[idx.current]);
	}
	if (failed || !src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ganesh-mark",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 64 64",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "32",
					r: "22"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 14c6 4 9 10 8 18-4 2-8 2-12 0 0-8 2-14 4-18z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 34c-2 6 0 12 4 16" })
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ganesh-mark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "Shree Ganesh",
			onError
		})
	});
}
function PhotoGallery() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [broken, setBroken] = (0, import_react.useState)({});
	const timer = (0, import_react.useRef)(null);
	function show(i) {
		setIndex((i + galleryFiles.length) % galleryFiles.length);
	}
	function restart() {
		if (timer.current) window.clearInterval(timer.current);
		timer.current = window.setInterval(() => show(index + 1), 3800);
	}
	(0, import_react.useEffect)(() => {
		restart();
		return () => {
			if (timer.current) window.clearInterval(timer.current);
		};
	}, [index]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gallery",
		"aria-label": "A few photos from our journey",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gallery-frame",
			onClick: () => show(index + 1),
			role: "button",
			tabIndex: 0,
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					show(index + 1);
				}
			},
			children: [galleryFiles.map((file, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: `gallery-photo${i === index && !broken[i] ? " is-on" : ""}`,
				src: "/" + encodeURIComponent(file).replace(/%2F/g, "/"),
				alt: `Tina and Sahitya, photo ${i + 1}`,
				onError: () => setBroken((prev) => ({
					...prev,
					[i]: true
				}))
			}, file)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `gallery-fallback${broken[index] || !galleryFiles[index] ? " is-on" : ""}`,
				children: "Tina & Sahitya"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gallery-dots",
			children: galleryFiles.map((file, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: i === index ? "is-on" : "",
				"aria-label": `Show photo ${i + 1}`,
				onClick: (e) => {
					e.stopPropagation();
					show(i);
				}
			}, file))
		})]
	});
}
function Invitation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "invite-scroll",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "hero-art",
						src: "/images/garden-hero.jpg",
						alt: "Painted garden of palms, flowers and terracotta urns"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-veil" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GaneshMark, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-kicker",
								children: couple.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-names",
								children: [
									couple.one,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hero-amp",
										children: "&"
									}),
									" ",
									couple.two
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-date",
								children: couple.dateLine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-place",
								children: couple.venue
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "chapter",
				id: "story",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: "Our Journey"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "script-title",
							children: "Our Love Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "heart-mark",
							"aria-hidden": "true"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "timeline",
						children: story.map((beat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "beat",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "beat-year",
										children: beat.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "beat-title",
										children: beat.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "beat-body",
										children: beat.body
									})
								]
							})
						}, beat.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGallery, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "chapter chapter-tight",
				id: "program",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "doves",
						src: "/images/doves.jpg",
						alt: "Two doves on a flowering branch"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "script-title",
							children: "Day Program"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							style: { marginTop: 8 },
							children: "What we have prepared for you"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "program-list",
						children: program.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "day-label",
							children: [
								day.label,
								" · ",
								day.date
							]
						}), day.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "program-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "program-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramGlyph, { name: item.icon })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "program-when",
									children: item.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "program-title",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "program-detail",
									children: item.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "program-attire",
									children: ["Attire · ", item.attire]
								})
							] })]
						}) }, item.title))] }, day.date))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "chapter",
				id: "gifts",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "script-title",
						children: "Gifts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gifts-copy",
						children: "Your presence is what matters most to us. If you wish to give us a gift, you can do so in the way that suits you best — and peek at what we will be wearing, chapter by chapter."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "rose-btn",
						href: couple.plannerUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Wardrobe planner"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "chapter chapter-tight",
				id: "details",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker",
						children: "Join us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "script-title",
						children: "Event Details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gifts-copy",
						children: "We cannot wait to celebrate this special day with you. Here is everything you need to know."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "meta-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta-kicker",
								children: "The venue"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta-title",
								children: couple.venue
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta-line",
								children: couple.dateLine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "map-link",
								href: couple.mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "View venue on Google Maps"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "closing-names",
						children: [
							couple.one,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-amp",
								children: "&"
							}),
							" ",
							couple.two
						]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "site-foot",
				children: [
					couple.one,
					" & ",
					couple.two,
					" · ",
					couple.dateLine,
					" · ",
					couple.place
				]
			})
		]
	});
}
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [fading, setFading] = (0, import_react.useState)(false);
	const [gone, setGone] = (0, import_react.useState)(false);
	const openInvite = (0, import_react.useCallback)(() => {
		setOpen(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOpen(true);
			setFading(true);
			setGone(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const fadeAt = reduce ? 20 : 950;
		const goneAt = reduce ? 40 : 1700;
		const a = window.setTimeout(() => setFading(true), fadeAt);
		const b = window.setTimeout(() => setGone(true), goneAt);
		return () => {
			window.clearTimeout(a);
			window.clearTimeout(b);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "invite-stage",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `invite-phone${gone ? "" : " envelope-lock"}`,
			children: [!gone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Envelope, {
				open,
				fading,
				onOpen: openInvite
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Invitation, {})]
		})
	});
}
//#endregion
export { Home as component };
