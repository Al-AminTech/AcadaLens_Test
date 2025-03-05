import { Card, CardContent } from "@/components/ui/card";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className=" bg-[#F2FDFF] bg-[#] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 pt-28">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold">Sanni Ahmed Agboola</h1>
                <p className="text-[#004859] font-[400]">
                  Lead Product (UI/UX) Designer
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Social media</span>
                </div>
                <div className="grid gap-2">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="h-4 w-4" />
                    twitter.com/sanniahmed
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                    linkedin.com/sanni-ahmed-agboola
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                    instagram.com/sanniahmedagboola
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Facebook className="h-4 w-4" />
                    facebook.com/ahmed.sanni01
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Email address</span>
                </div>
                <Link
                  href="mailto:sanniahmedagboola@acadalens.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  sanniahmedagboola@acadalens.com
                </Link>
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed w-full lg:w-[40rem]">
              <p className="text-gray-700 text-justify">
                But the innovative team is not stopping at exam preparation.
                They had another bold aspiration: to address Africa's linguistic
                diversity through developing an African Indigenous Language
                Learning Model. In a continent with thousands of languages,
                Acada Lens aspired to preserve and celebrate cultural heritage
                by integrating native languages into academic learning. With
                this, they hoped to not only support multilingual students but
                also to create a model that allowed other Edtech platforms to
                incorporate these indigenous languages. This endeavor wasn't
                just about education; it was about identity, empowerment, and
                inclusivity.
              </p>
              <p className="text-gray-700 text-justify">
                To make Acada Lens accessible to every student, they structured
                their offerings with affordability in mind. A range of
                pocket-friendly subscription options, along with a flexible API
                and SDK licensing for other education businesses, aimed to bring
                this resource to classrooms and homes across Africa.
              </p>
              <p className="text-gray-700 text-justify">
                Marketing strategies were crafted with equal thoughtfulness—free
                trial periods, referral programs, and school visits aimed to
                reach every student, especially those most underserved. This
                wasn't just a business model; it was a social movement, fueled
                by partnerships with local schools, organizations, and
                influencers who saw the potential to transform the way Africa
                learned.
              </p>
              <p className="text-gray-700 text-justify">
                Today, Acada Lens is more than a company; it's a bridge to a
                brighter future. It stands as a testament to what can happen
                when technology, empathy, and ambition converge. For team, every
                new user, every corrected exam, and every success story from a
                student represents a step toward the dream that began around a
                simple conversation in Ilorin, Kwara State, Nigeria—a dream
                that, one day, all students across Africa will have the tools
                they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
