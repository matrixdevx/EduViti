"use client";
import React from "react";
import { biology } from "@/data/classes/12";
import ChapterCard from "@/app/components/chapters";
import BackButton from "@/app/components/backbtn";
export default function Grade12BiologyPYQP() {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Grade 12 <span className="text-primary">Biology</span> Boards
        PYQP&apos;s
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
        {biology.pyqp.map((chapter) => (
          <div key={chapter.name}>
            <ChapterCard title={chapter.name} fileId={chapter.path} />
          </div>
        ))}
      </div>
    </main>
  );
}
