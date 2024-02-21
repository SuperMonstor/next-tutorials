"use client"

import { navLinks } from "@/constants"
import { SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

function Sidebar() {
	const pathName = usePathname()
	return (
		<aside className="hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex">
			<div className="flex size-full flex-col gap-4">
				<Link href="/" className="sidebar-logo">
					<Image
						src="/assets/images/logo-text.svg"
						alt="logo"
						width={180}
						height={28}
					/>
				</Link>

				<nav className="h-full flex-col jusify-between md:flex md:gap-4">
					<SignedIn>
						<ul className="hidden w-full flex-col items-start gap-2 md:flex">
							{navLinks.map((link) => {
								const isActive = link.route === pathName
								return (
									<li
										key={link.route}
										className={`sidebar-nav_element group ${
											isActive
												? "bg-purple-gradient text-white"
												: "text-gray-700"
										}`}
									>
										{link.label}
									</li>
								)
							})}
						</ul>
					</SignedIn>
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar
