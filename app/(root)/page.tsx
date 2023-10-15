import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <p className="p-4">
      <UserButton afterSignOutUrl="/"/>
    </p>
  );
}
