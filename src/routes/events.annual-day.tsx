import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
export const Route = createFileRoute("/events/annual-day")({ head: () => ({ meta: [{ title: "Annual Day | PS Matric" }, { name: "description", content: "Annual Day at PS Matriculation Higher Secondary School." }] }), component: () => <EventPage title="Annual Day" /> });