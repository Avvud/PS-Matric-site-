import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
export const Route = createFileRoute("/events/project-day")({ head: () => ({ meta: [{ title: "Project Day | PS Matric" }, { name: "description", content: "Project Day at PS Matriculation Higher Secondary School." }] }), component: () => <EventPage title="Project Day" /> });