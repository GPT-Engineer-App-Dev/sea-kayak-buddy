import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <header className="w-full py-6 bg-opacity-75 bg-black text-center">
        <h1 className="text-4xl font-bold">Sea Kayak Adventures</h1>
        <p className="text-lg mt-2">Explore the beauty of the sea with us</p>
      </header>

      <main className="flex flex-col items-center mt-10 space-y-8">
        <div className="w-full flex justify-center mt-10">
          <img
            src="/images/kayak-on-ocean.jpg"
            alt="Kayak on the ocean"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <Card className="w-11/12 md:w-2/3 lg:w-1/2 bg-opacity-75 bg-black">
          <CardHeader>
            <CardTitle className="text-2xl">About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We offer the best sea kayak adventures, providing you with an
              unforgettable experience exploring the ocean's beauty. Join us for
              a journey of a lifetime.
            </p>
          </CardContent>
        </Card>

        <Separator className="w-11/12 md:w-2/3 lg:w-1/2" />

        <Card className="w-11/12 md:w-2/3 lg:w-1/2 bg-opacity-75 bg-black">
          <CardHeader>
            <CardTitle className="text-2xl">Our Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Sunset Kayak Tour</li>
              <li>Full-Day Kayak Adventure</li>
              <li>Night Kayak Experience</li>
            </ul>
          </CardContent>
        </Card>

        <Separator className="w-11/12 md:w-2/3 lg:w-1/2" />

        <Card className="w-11/12 md:w-2/3 lg:w-1/2 bg-opacity-75 bg-black">
          <CardHeader>
            <CardTitle className="text-2xl">Meet Our Team</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-4">
            <div className="flex flex-col items-center">
              <Avatar>
                <AvatarImage src="/images/guide1.jpg" alt="Guide 1" />
                <AvatarFallback>G1</AvatarFallback>
              </Avatar>
              <p className="mt-2">John Doe</p>
            </div>
            <div className="flex flex-col items-center">
              <Avatar>
                <AvatarImage src="/images/guide2.jpg" alt="Guide 2" />
                <AvatarFallback>G2</AvatarFallback>
              </Avatar>
              <p className="mt-2">Jane Smith</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="w-full py-6 bg-opacity-75 bg-black text-center mt-10">
        <p>© 2023 Sea Kayak Adventures. All rights reserved.</p>
        <Button variant="outline" className="mt-4">
          Contact Us
        </Button>
      </footer>
    </div>
  );
};

export default Index;