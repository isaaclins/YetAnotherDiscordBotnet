 "use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const [showEULA, setShowEULA] = useState(false);

  /**
   * @issue SaveEULAToCookie 
   * @body Add a function to make it so when the user agrees to the EULA, it saves the agreement to a cookie.
   * 
   */
  const handleAgree = () => {
    // Save the agreement to the user's profile
    // For now, just redirect to the Builder UI

    router.push("/BuilderUI");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card>
        <CardHeader>
          <CardTitle>EULA Agreement</CardTitle>
          <p className="text-sm text-gray-500">
            Please read the following End User License Agreement before
            proceeding.
          </p>
        </CardHeader>
        <CardContent>
          {!showEULA ? (
            <Button variant="outline" onClick={() => setShowEULA(true)}>
              Read EULA
            </Button>
          ) : (
            <div className="space-y-4">
              <div>
                <p>
                  {/* EULA content goes here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
              <div className="flex gap-4 justify-end">
                <Button onClick={handleAgree}>
                  Yes, I've read the EULA and accept the terms.
                </Button>
                <Button variant="outline" onClick={() => setShowEULA(false)}>
                  No, I do not accept the terms.
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
