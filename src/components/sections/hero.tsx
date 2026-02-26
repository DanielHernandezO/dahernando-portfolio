"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const commands = [
  "go build -o payments ./cmd/server",
  "kubectl apply -f deployment.yaml",
  "docker compose up -d",
  "git push origin main",
  "make test-integration",
];

function useTypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const stateRef = useRef({ commandIndex: 0, charIndex: 0, phase: "typing" as "typing" | "pausing" | "clearing" });
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function step() {
      const { commandIndex, charIndex, phase } = stateRef.current;
      const command = commands[commandIndex];

      if (phase === "typing") {
        if (charIndex < command.length) {
          const nextChar = charIndex + 1;
          stateRef.current.charIndex = nextChar;
          setDisplayText(command.slice(0, nextChar));
          timerRef.current = setTimeout(step, 50);
        } else {
          stateRef.current.phase = "pausing";
          timerRef.current = setTimeout(step, 2000);
        }
      } else if (phase === "pausing") {
        stateRef.current = {
          commandIndex: (commandIndex + 1) % commands.length,
          charIndex: 0,
          phase: "typing",
        };
        setDisplayText("");
        timerRef.current = setTimeout(step, 100);
      }
    }

    step();
    return () => clearTimeout(timerRef.current);
  }, []);

  return displayText;
}

export function Hero() {
  const displayText = useTypingAnimation();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent-primary)_0%,_transparent_50%)] opacity-[0.07]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium tracking-wider text-accent-primary">
              SOFTWARE ENGINEER
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-accent-primary">Daniel</span>
              <span className="text-accent-secondary">.</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-text-secondary sm:text-xl">
              I build scalable systems that move money. Currently engineering
              payment infrastructure at{" "}
              <span className="font-semibold text-text-primary">YUNO</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/projects" variant="primary" size="lg">
                View Projects <ArrowRight size={18} />
              </Button>
              <Button href="/blog" variant="outline" size="lg">
                Read Blog <FileText size={18} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-accent-primary/30 sm:h-56 sm:w-56">
              <Image
                src="/images/profile.jpg"
                alt="Daniel Hernandez"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full max-w-md overflow-hidden rounded-xl border border-bg-tertiary bg-bg-secondary">
              <div className="flex items-center gap-2 border-b border-bg-tertiary px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-text-secondary">
                  terminal
                </span>
              </div>
              <div className="p-4 font-mono text-sm">
                <span className="text-accent-primary">$</span>{" "}
                <span className="text-text-primary">{displayText}</span>
                <span className="animate-pulse text-accent-primary">▌</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
