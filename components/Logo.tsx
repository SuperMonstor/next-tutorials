import LogoImage from "@logos/Last.svg"
import Link from "next/link"
import React from "react"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"

const Logo = () => {
	return (
		<Link href="/">
			<div>
				<AspectRatio
					ratio={16 / 9}
					className="flex items-center justify-center"
				>
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
