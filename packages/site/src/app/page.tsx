"use client";

import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { ConnectButton } from "@consensys/connect-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReadContract, useWriteContract } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contractAddress, contractAbi } from "../../constants";
import { Vote, Clock, User, CheckCircle2 } from "lucide-react";

// Define the structure of a Candidate


export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Voting interface card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <Vote className="mr-2 h-6 w-6" />
            LineaVote
          </CardTitle>
        </CardHeader>
      </Card>
    </main>
  );
}
