import { Button } from "@/components/ui/button";
import { PricingTable } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-200 text-stone-500">
      <section className="pt-32 pb-20 px-4">
        <Button variant="primary" size="xl">
          WhatUpWEirdo
        </Button>
      </section>

      <PricingTable
        checkoutProps={{
          appearance: {
            elements: {
              drawerRoot: {
                zIndex: 2000,
              },
            },
          },
        }}
      />
    </div>
  );
}
