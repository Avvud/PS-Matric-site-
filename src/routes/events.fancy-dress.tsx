import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
export const Route = createFileRoute("/events/fancy-dress")({ head: () => ({ meta: [{ title: "Fancy Dress | PS Matric" }, { name: "description", content: "Fancy Dress at PS Matriculation Higher Secondary School." }] }), component: () => <EventPage title="Fancy Dress" /> });