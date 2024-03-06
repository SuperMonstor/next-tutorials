"use client"

import React from "react"
import { Button } from "./ui/button"
import { MessageSquarePlusIcon } from "lucide-react"
import { useRouter } from "next/router"

const CreateChatButton = () => {
	const router = useRouter()

	const createNewChat = async () => {
		router.push("/chat/abc")
	}
	return (
		<Button variant={"ghost"}>
			<MessageSquarePlusIcon />
		</Button>
	)
}

export default CreateChatButton
