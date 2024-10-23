import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="flex flex-col bg-[#f0f8f9] justify-start md:justify-center pb-5 pt-7 items-center">
      <Accordion type="single" collapsible className="w-full md:w-[65rem]">
        <AccordionItem value="item-1" className=" shadow-md">
          <AccordionTrigger className="bg-[#CCF5FF] decoration-none">
            Question
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full mt-4 md:w-[65rem]">
        <AccordionItem value="item-1" className=" shadow-md">
          <AccordionTrigger className="bg-[#CCF5FF] decoration-none">
            Question
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full mt-4 md:w-[65rem]">
        <AccordionItem value="item-1" className=" shadow-md">
          <AccordionTrigger className="bg-[#CCF5FF] decoration-none">
            Question
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
