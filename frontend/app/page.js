import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { PricingTable } from "@clerk/nextjs";
import { Badge, Flame } from "lucide-react";

export default async function Home() {
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" } ? "pro" : "free");
  return (
    <div className="min-h-screen bg-stone-200 text-stone-500">
      <section className="pt-32 pb-20 px-4">
        <div>
          <div>
            <div>
              <Badge
                variant="outline"
                className="border-2 border-orange-200 text-orange-700 bg-orange-50 text-sm font-bold mb-6 uppercase tracking-wide "
              >
                <Flame className="mr-1" /># 1 AI Cooking Assistant
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* <PricingTable
        checkoutProps={{
          appearance: {
            elements: {
              drawerRoot: {
                zIndex: 2000,
              },
            },
          },
        }}
      /> */}
    </div>
  );
}
