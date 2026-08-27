import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
export const Route = createFileRoute("/events/akshara-abhyas")({ head: () => ({ meta: [{ title: "Akshara Abhyas | PS Matric" }, { name: "description", content: "Akshara Abhyas at PS Matriculation Higher Secondary School." }] }), component: () => <EventPage title="Akshara Abhyas" /> });