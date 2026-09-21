import { academicDocuments, type AcademicSection } from "@/lib/academic-documents";

export function AcademicPdfList({
  sections,
}: {
  sections: AcademicSection[];
}) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h2
            className="font-display text-2xl font-bold uppercase"
            style={{ color: "var(--navy-deep)" }}
          >
            {section.title}
          </h2>

          <div className="space-y-2">
            {section.items.map((item) => (
              <div key={item.label}>
                <a
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-blue-600 underline-offset-4 hover:text-blue-800 hover:underline"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
