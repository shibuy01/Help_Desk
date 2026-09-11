
import { Button, Input } from "@base-ui/react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoreVertical, Plus, Search, Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "../components/ui/MessageBubble";
import { sendMessagesToServer } from "../services/chat.service";
import { v4 as v444 } from "uuid";

const CHATS = [
    {
        id: 1,
        name: "spring boot...",
        lastMessage: "How to create rest api in spring boot",
        unread: 2,
        initials: "SB",
    },
    {
        id: 2,
        name: "java...",
        lastMessage: "How to create object in java",
        unread: 4,
        initials: "AB",
    },
    {
        id: 3,
        name: "c...",
        lastMessage: "How to create object in c",
        unread: 1,
        initials: "AB",
    },
    {
        id: 4,
        name: "javaScript...",
        lastMessage: "How to create object in javascript",
        unread: 3,
        initials: "AB",
    },
];

const CONVERSATION = [
    {
        id: 1,
        author: "Liza",
        text: "Hello How can I assist you with Spring Boot today?",
        at: new Date().toLocaleTimeString(),
    },
];

function Chat() {
    const [message, setMessage] = useState(CONVERSATION);
    const [draft, setDraft] = useState("");
    const endRef = useRef(null);
    const [sending, setSending] = useState(false);
    const [conversationId, setConversationId] = useState("");
    const inputRef = useRef(null);

    // Create conversation ID only once
    useEffect(() => {
        const id = v444();
        setConversationId(id);
    }, []);

    // Auto scroll when new message comes
    useEffect(() => {
        endRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [message]);

    async function sendMessage() {
        const textMessage = draft.trim();

        if (textMessage.length === 0 || sending) {
            return;
        }

        // Add user's message to chat
        setMessage((pre) => [
            ...pre,
            {
                id: v444(),
                author: "user",
                text: textMessage,
                at: new Date().toLocaleTimeString(),
            },
        ]);

        // Clear input
        setDraft("");
        inputRef.current.focus();

        // Start loading
        setSending(true);

        try {
            // Call backend API
            const responseFromAI = await sendMessagesToServer(
                textMessage,
                conversationId
            );

            console.log("AI Response:", responseFromAI);

            // Add AI response to chat
            setMessage((pre) => [
                ...pre,
                {
                    id: v444(),
                    author: "boot",
                    text: responseFromAI.data,
                    at: new Date().toLocaleTimeString(),
                },
            ]);
        } catch (error) {
            console.error("Error sending message:", error);

            // Optional error message
            setMessage((pre) => [
                ...pre,
                {
                    id: v444(),
                    author: "boot",
                    text: "Sorry, something went wrong. Please try again.",
                    at: new Date().toLocaleTimeString(),
                },
            ]);
        } finally {
            setSending(false);
        }
    }

    return (
        <div className="fixed top-0 right-0 left-0 mx-auto min-h-screen max-w-7xl grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] border-x">

            {/* SIDEBAR */}
            <div>
                <aside className="hidden md:flex md:flex-col border-r">
                    <div className="p-3 flex items-center gap-3">

                        <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>

                        <div className="relative w-full">
                            <input
                                ref={inputRef}
                                placeholder="Search Chats..."
                                type="text"
                                className="h-9 pl-7 border rounded-xl w-full"
                            />

                            <Search
                                className="h-4 w-4 pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                            />
                        </div>
                    </div>

                    <Separator />
                </aside>
            </div>

            {/* CHAT AREA */}
            <div>
                <section className="h-full border-l">

                    {/* HEADER */}
                    <div className="flex items-center justify-between gap-3 px-4 py-3 border-b">

                        <div className="flex gap-3">

                            <div className="h-9 w-9 rounded-full bg-gray-200 text-black flex items-center justify-center text-sm font-medium">
                                LS
                            </div>

                            <div className="leading-tight">
                                <div className="text-sm font-medium">
                                    Liza Support
                                </div>

                                <div className="text-xs text-muted-foreground">
                                    Online Typing...
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                            >
                                <Search className="h-4 w-4" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                            >
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* MESSAGES */}
                    <ScrollArea className="flex-1 h-[calc(100vh-120px)]">

                        <div className="mx-auto max-w-3xl px-6 py-6 space-y-6">

                            {message.map((chat) => (
                                <MessageBubble
                                    key={chat.id}
                                    author={chat.author}
                                    at={chat.at}
                                >
                                    {chat.text}
                                </MessageBubble>
                            ))}

                            <div ref={endRef}></div>

                        </div>

                    </ScrollArea>

                    {/* COMPOSER */}
                    <div className="border-t p-3">

                        <div className="mx-auto flex max-w-3xl gap-3">

                            <Input
                                value={draft}
                                onChange={(e) => setDraft(e.target.value)}
                                placeholder="Ask anything..."
                                className="flex-1 rounded-full h-9 pl-7 border"
                                disabled={sending}
                            />

                            <Button
                                disabled={sending}
                                onClick={sendMessage}
                                className="rounded-full px-5 flex gap-2 items-center"
                            >
                                <Send className="h-4 w-4" />

                                <span>
                                    {sending ? "Sending..." : "Send"}
                                </span>
                            </Button>

                        </div>

                    </div>

                </section>
            </div>

        </div>
    );
}

export default Chat;
