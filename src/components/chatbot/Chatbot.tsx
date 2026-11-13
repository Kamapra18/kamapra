"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FormEvent, Suspense, useEffect, useState } from "react";
import { LuBot, LuX, LuArrowUp } from "react-icons/lu";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

function getPageContext(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return { type: "home", slug: "" };
  }

  const firstSegment = segments[0];

  if (firstSegment === "about") {
    return { type: "profile", slug: "" };
  }

  if (firstSegment === "projects" && segments[1]) {
    return { type: "project", slug: segments[1] };
  }

  if (firstSegment === "blog" && segments[1]) {
    return { type: "post", slug: segments[1] };
  }

  return { type: "home", slug: "" };
}

export function Chatbot() {
  return (
    <Suspense fallback={null}>
      <ChatbotContent />
    </Suspense>
  );
}

function ChatbotContent() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Halo! Ada yang ingin kamu ketahui tentang Mario, pengalaman, atau proyek-proyeknya? Saya di sini bisa 3 bahasa: Indonesia, Inggris, dan Bahasa Bali. Bisa disesuaikan dengan bahasa pengunjung 😊",
    },
  ]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timeout = window.setTimeout(() => {
        setIsMounted(false);
      }, 250);

      return () => window.clearTimeout(timeout);
    }
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = input.trim();

    if (!message || isLoading) return;

    setMessages((previous) => [
      ...previous,
      { id: Date.now(), role: "user", content: message },
    ]);

    setInput("");
    setIsLoading(true);

    try {
      const context = getPageContext(pathname);

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          language: pathname.split("/")[1] === "en" ? "en" : "id",
          context,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal mengirim pesan.");
      }

      setMessages((previous) => [
        ...previous,
        { id: Date.now() + 1, role: "assistant", content: data.answer },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Maaf, terjadi kesalahan. Silakan coba lagi.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isMounted && (
        <section
          aria-hidden={!isOpen}
          className={`flex h-[min(600px,75dvh)] w-[calc(100vw-2.5rem)] max-w-[390px] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-(--border) bg-background shadow-xl transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }`}>
          <div className="flex items-center justify-between border-b border-(--border) px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-(--surface)">
                <Image
                  src="/Kamapra.png"
                  alt="Kamapra"
                  fill
                  sizes="40px"
                  className="object-contain p-1.5"
                />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  Kamapra Assistant
                </h2>
                <p className="flex items-center gap-1.5 text-xs text-(--text-muted)">
                  <span className="size-1.5 rounded-full bg-green-500" />
                  Online
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="flex size-9 items-center justify-center rounded-full text-(--text-muted) transition duration-200 hover:rotate-90 hover:bg-(--surface) hover:text-foreground">
              <LuX size={20} />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-sm bg-(--accent) text-white"
                      : "rounded-bl-sm bg-(--surface) text-foreground"
                  }`}>
                  {message.role === "assistant" ? (
                    <div className="chatbot-markdown">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-(--surface) px-4 py-3 text-sm text-(--text-muted)">
                  Sedang mengetik...
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-(--border) p-3">
            <div className="flex items-end gap-2 rounded-xl border border-(--border) bg-background p-2 transition-colors focus-within:border-(--accent)">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                placeholder="Tulis pesan..."
                rows={1}
                maxLength={2000}
                disabled={isLoading}
                className="max-h-24 min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-foreground outline-none placeholder:text-(--text-muted) disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent) text-white transition duration-200 hover:scale-105 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40">
                <LuArrowUp size={19} />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-(--text-muted)">
              Powered by Gemini
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isOpen}
        className="group flex size-14 items-center justify-center rounded-full bg-(--accent) text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95">
        {isOpen ? (
          <LuX
            size={25}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
        ) : (
          <LuBot
            size={25}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </button>
    </div>
  );
}
