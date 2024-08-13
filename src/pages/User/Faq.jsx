import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import GradualSpacing from "@/components/magicui/gradual-spacing";
const Faq = () => {
  return (
    <>
    <GradualSpacing
      className="font-display text-center text-[2.5rem] font-bold tracking-[-0.1em]  text-customGreen md:leading-[5rem]"
      // className="font-display text-center text-[2.5rem] font-bold tracking-[-0.1em]  text-customGreen dark:text-white md:text-7xl md:leading-[5rem]"
      text="Frequently Asked Question"
    />
    
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold">What is the VitalSecure Life Plan?</AccordionTrigger>
        <AccordionContent className="mt-2 text-[1.2rem] text-customGreen font-sans">
          The VitalSecure Life Plan is a comprehensive life insurance policy that provides extensive protection for your family. It includes death benefit, critical illness cover, accidental death protection, premium waiver, and flexible term options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold">What does the EchoGuard Family Coverage offer?</AccordionTrigger>
        <AccordionContent className="mt-2  text-[1.2rem]  text-customGreen font-sans">
          The EchoGuard Family Coverage offers holistic protection for your entire family under one plan. It includes family protection, health benefits, child education support, income replacement, and rider options for enhanced coverage.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold">What are the features of the Lifeline Assurance Policy?</AccordionTrigger>
        <AccordionContent className="mt-2 text-[1.2rem]  text-customGreen font-sans">
          The Lifeline Assurance Policy is a flexible life insurance plan that allows customizable coverage, partial withdrawals, loan facility, maturity benefit, and policy conversion options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold">What is EchoFlex Term Insurance?</AccordionTrigger>
        <AccordionContent className="mt-2  text-[1.2rem]  text-customGreen font-sans">
          EchoFlex Term Insurance offers affordable and straightforward life coverage for a specified period. It includes high coverage with low premiums, fixed term options, renewable and convertible options, death benefit, and simplified issue process.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-semibold">What does the VitalFuture Protection Plan include?</AccordionTrigger>
        <AccordionContent className="mt-2 text-[1.2rem]  text-customGreen font-sans">
          The VitalFuture Protection Plan combines life insurance with investment opportunities. It includes life coverage with investment, maturity benefit, bonuses and additions, partial withdrawals and loans, and tax benefits.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-semibold"> How much life insurance coverage do I need?</AccordionTrigger>
        <AccordionContent className="mt-2  text-[1.2rem]  text-customGreen font-sans">
        The amount of life insurance coverage you need depends on several factors, including your income, debts, lifestyle, and future financial goals. A common rule of thumb is to have coverage that is 10-12 times your annual income. However, it’s best to consult with a financial advisor to determine the appropriate coverage for your specific situation.
        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
        <AccordionTrigger className="text-lg font-semibold">What happens if I miss a premium payment?</AccordionTrigger>
        <AccordionContent className="mt-2  text-[1.2rem]  text-customGreen font-sans">
        If you miss a premium payment, we offer a grace period, typically 30 days, during which you can make the payment without losing coverage. If you fail to pay within the grace period, the policy may lapse, meaning you lose your coverage. However, some policies may allow reinstatement within a certain timeframe, often requiring payment of past due premiums and proof of insurability.
        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
        <AccordionTrigger className="text-lg font-semibold"> What is the difference between term life and whole life insurance?</AccordionTrigger>
        <AccordionContent className="mt-2  text-[1.2rem]  text-customGreen font-sans">
        Term life insurance provides coverage for a specific period, such as 10, 20, or 30 years, and pays a death benefit if the insured person dies within that term. It has no cash value and is generally more affordable. Whole life insurance, on the other hand, offers lifelong coverage and includes a savings component that accumulates cash value over time. It is more expensive due to the cash value feature and permanent coverage.
        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
        <AccordionTrigger className="text-lg font-semibold">How do I choose a nominee for my life insurance policy?</AccordionTrigger>
        <AccordionContent className="mt-2  text-[1.2rem]  text-customGreen font-sans">
        A nominee is the person or entity you designate to receive the death benefit from your life insurance policy. You can choose one or multiple nominees and allocate specific percentages of the benefit to each. Common beneficiaries include spouses, children, other family members, or charitable organizations. It’s important to review and update your beneficiary designations regularly to ensure they reflect your current wishes.
        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
        <AccordionTrigger className="text-lg font-semibold">Can I have multiple life insurance policies?</AccordionTrigger>
        <AccordionContent className="mt-2  text-[1rem]  text-customGreen font-sans">
        Yes, you can have multiple life insurance policies. Many people opt for this to cover different financial needs, such as a term policy to cover a mortgage and a whole life policy for lifelong protection and cash value accumulation. When applying for additional policies, insurers will consider your existing coverage and overall financial situation to determine eligibility and premiums.
        </AccordionContent>
        </AccordionItem>
    </Accordion>
    </>
  )
}

export default Faq;
