import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/admissions/uniform")({
  head: () => ({ meta: [{ title: "School Uniform Details | PS Matric" }, { name: "description", content: "School Uniform Details — PS Matriculation Higher Secondary School." }] }),
  component: Page,
});

function Page() {
  return (
    <ContentPage title="School Uniform Details" subtitle="Uniform guidelines">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SmartImage src={IMAGES.uniform.lkgUkg} alt="LKG and UKG uniform placeholder" className="aspect-[4/3]" />
        <SmartImage src={IMAGES.uniform.primary} alt="Standards I to VII uniform placeholder" className="aspect-[4/3]" />
        <SmartImage src={IMAGES.uniform.secondary} alt="Standards VIII to XII uniform placeholder" className="aspect-[4/3]" />
      </div>
      <h2>Contact</h2>
      <p>Parthy&apos;s Tex Tailors, No. 6, South Canal Road, Chennai - 600028.</p>
      <p>Phone: 98842 22681</p>
      <h2>L.K.G. and U.K.G. Boys</h2>
      <p>Navy blue shorts with light blue stripes, shirt with school epaulette, black shoes, black socks and school belt.</p>
      <h2>L.K.G. and U.K.G. Girls</h2>
      <p>Navy blue pinafore with light blue stripes and school epaulette, black shoes, black socks and school belt.</p>
      <p>The LKG and UKG uniform is available only at Parthy&apos;s Tex Tailors.</p>
      <h2>Standards I to VII</h2>
      <p><strong>Boys:</strong> Navy blue shorts, white shirt with open tennis collar and epaulette bearing school initials on the shirt pocket, black shoes, black socks and school belt.</p>
      <p><strong>Girls:</strong> Navy blue skirt, white shirt with epaulette bearing school initials on the left hand and open tennis collar, black ribbons, black belt, black shoes and black socks.</p>
      <p><strong>Note:</strong> Shirts should always be tucked inside the shorts.</p>
      <h2>Standards VIII to XII</h2>
      <p><strong>Boys:</strong> Navy blue full pants, white shirt with open tennis collar and epaulette bearing school initials on the shirt pocket, black belt, black shoes and black socks.</p>
      <p><strong>Girls:</strong> White kameez with epaulette bearing school initials on the left hand, navy blue salwar and navy blue coat, black ribbons, black slip-on shoes and black socks.</p>
      <p><strong>Note:</strong> Shirts should always be tucked inside the pants.</p>
      <h2>Monday Sports Uniform</h2>
      <p>The sports uniform for LKG to Standard VIII will be supplied by the school.</p>
      <p><strong>Standards VI and VII:</strong> Boys and girls wear a house-colour T-shirt. Boys wear white shorts; girls wear a white skirt. Both wear white canvas shoes and white socks.</p>
      <p><strong>Standard VIII:</strong> Boys wear a house-colour T-shirt with white full pants. Girls wear a white kameez, white salwar and house-colour coat. Both wear white canvas shoes and white socks.</p>
      <p><strong>Standards IX to XII:</strong> Boys wear white full pants, white shirt, white canvas shoes and white socks. Girls wear a white kameez, white salwar, house-colour coat, white canvas shoes, white socks and white ribbons.</p>
    </ContentPage>
  );
}