import React from "react"

const PricingCard = ({ redirect }: { redirect: boolean }) => {
	const tiers = [
		{
			name: "Starter",
			id: "starter_id",
			href: "#",
			priceMonthly: null,
			description: "Get chatting right away with anyone, anywhere.",
			features: [
				"20 Message Chat Limit in Chats",
				"2 Participant Limit in Chat",
				"3 Chat Rooms Limit",
				"Supports 2 Languages",
				"48-hour support response time",
			],
		},
		{
			name: "Pro",
			id: "smt_onLsNOYbMVZ",
			href: "#",
			priceMonthly: "£5.99",
			description: "Unlock the Full Potential with Pro!",
			features: [
				"Unlimited Messages in Chats",
				"Unlimited Participants in Chats",
				"Unlimited Chat Rooms",
				"Supports up to 10 languages",
				"Media support in chats (coming soon)",
				"1-hour, dedicated support response time",
				"Early access to New Features",
			],
		},
	]

	return <div>PricingCard</div>
}

export default PricingCard
