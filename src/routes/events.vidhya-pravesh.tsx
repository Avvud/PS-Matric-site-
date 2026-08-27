import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
export const Route = createFileRoute("/events/vidhya-pravesh")({ head: () => ({ meta: [{ title: "Vidhya Pravesh | PS Matric" }, { name: "description", content: "Vidhya Pravesh at PS Matriculation Higher Secondary School." }] }), component: () => <EventPage title="Vidhya Pravesh" /> });