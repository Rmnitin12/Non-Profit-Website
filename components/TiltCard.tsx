"use client";
import { type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  return (
    <div className={`transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
}
