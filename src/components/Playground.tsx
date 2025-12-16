"use client";

import { useState } from "react";
import Image from "next/image";

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-4");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const models = ["GPT-4", "GPT-3.5", "Claude", "Gemini", "DALL-E 3", "Stable Diffusion"];

  return (
    <section id="playground" className="bg-[var(--bg-color)] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm text-green-600 dark:bg-green-900/30 dark:text-green-400">
            Playground
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Try it yourself
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Experience the power of AI with our interactive playground
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center justify-between">
            <div className="dropdown relative">
              <button
                className="dropdown-toggle flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedModel}</span>
                <i className="bi bi-chevron-down"></i>
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu !block mt-2">
                  {models.map((model) => (
                    <li
                      key={model}
                      onClick={() => {
                        setSelectedModel(model);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {model}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <i className="bi bi-gear text-xl"></i>
              </button>
              <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <i className="bi bi-arrow-clockwise text-xl"></i>
              </button>
            </div>
          </div>

          <div className="mb-4 min-h-[200px] rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                <i className="bi bi-robot"></i>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-400">
                  Hello! I&apos;m your AI assistant. How can I help you today? Try asking me to generate an image, write code, or answer questions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className="input flex-1"
              placeholder="Type your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className="btn !bg-purple-600">
              <i className="bi bi-send"></i>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-full border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
              Generate an image of a sunset
            </button>
            <button className="rounded-full border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
              Write a poem about nature
            </button>
            <button className="rounded-full border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
              Explain quantum computing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
