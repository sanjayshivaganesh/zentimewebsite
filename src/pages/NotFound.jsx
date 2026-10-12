import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <div data-testid="not-found-page" className="grain relative">
      <PageHeader
        eyebrow="404"
        title="This page does not exist."
        description="The address you opened is not a page on the ZenTime marketing site. Check the URL, or continue from one of the pages below."
      >
        <Link to="/" data-testid="not-found-home">
          <Button size="lg" className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
            Back to home
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link to="/features" data-testid="not-found-features">
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-full px-7 text-[15px] sm:w-auto"
          >
            View features
          </Button>
        </Link>
      </PageHeader>
    </div>
  );
}
