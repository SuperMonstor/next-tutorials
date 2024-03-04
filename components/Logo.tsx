import LogoImage from "@logos/Last.svg"
import Link from "next/link"
import React from "react"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"

const Logo = () => {
	return (
		// prefetch the page before it is clicked
		<Link href="/" prefetch={false} className="overflow-hidden">
			<div className="flex items-center w-20 p-4">
				<AspectRatio ratio={1 / 1} className="flex items-center justify-center">
					<Image
						priority
						src={LogoImage}
						alt="logo"
						className="dark:filter dark:invert"
					/>
				</AspectRatio>
			</div>
		</Link>
	)
}

export default Logo
