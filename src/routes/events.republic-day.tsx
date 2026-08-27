import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
export const Route = createFileRoute("/events/republic-day")({ head: () => ({ meta: [{ title: "Republic Day | PS Matric" }, { name: "description", content: "Republic Day at PS Matriculation Higher Secondary School." }] }), component: () => <EventPage title="Republic Day" /> });