import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
export const Route = createFileRoute("/events/sports-day")({ head: () => ({ meta: [{ title: "Sports Day | PS Matric" }, { name: "description", content: "Sports Day at PS Matriculation Higher Secondary School." }] }), component: () => <EventPage title="Sports Day" /> });