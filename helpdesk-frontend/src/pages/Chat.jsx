import { Button, Input } from "@base-ui/react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    LogOut,
    MoreVertical,
    Plus,
    Search,
    Send,
} from "lucide-react";

import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import MessageBubble from "../components/ui/MessageBubble";
import { sendMessagesToServer } from "../services/chat.service";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

const CONVERSATION = [
    {
        id: "welcome-message",
        author: "boot",
        text: "Hello! How can I assist you today?",
        at: new Date().toLocaleTimeString(),
    },
];

function Chat() {

    const [message, setMessage] =
        useState(CONVERSATION);

    const [draft, setDraft] =
        useState("");

    const [sending, setSending] =
        useState(false);

    const [conversationId, setConversationId] =
        useState("");

    const endRef = useRef(null);
    const inputRef = useRef(null);

    const navigate = useNavigate();

    // ==========================================
    // CREATE CONVERSATION ID
    // ==========================================

    useEffect(() => {

        const id = uuidv4();

        setConversationId(id);

        console.log(
            "Conversation ID:",
            id
        );

    }, []);


    // ==========================================
    // AUTO SCROLL
    // ==========================================

    useEffect(() => {

        endRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [message]);


    // ==========================================
    // FOCUS INPUT
    // ==========================================

    useEffect(() => {

        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);

    }, []);


    // ==========================================
    // SEND MESSAGE
    // ==========================================

    async function sendMessage() {

        const textMessage =
            draft.trim();

        if (
            !textMessage ||
            sending
        ) {
            return;
        }

        if (!conversationId) {

            console.error(
                "Conversation ID is not ready"
            );

            return;
        }


        // ======================================
        // ADD USER MESSAGE
        // ======================================

        setMessage((prev) => [
            ...prev,
            {
                id: uuidv4(),
                author: "user",
                text: textMessage,
                at: new Date().toLocaleTimeString(),
            },
        ]);


        // Clear input
        setDraft("");

        // Start loading
        setSending(true);


        try {

            console.log(
                "Sending message:",
                textMessage
            );

            console.log(
                "Conversation ID:",
                conversationId
            );


            // ==================================
            // CALL BACKEND
            // ==================================

            const responseFromAI =
                await sendMessagesToServer(
                    textMessage,
                    conversationId
                );


            console.log(
                "AI Response:",
                responseFromAI
            );


            // ==================================
            // GET RESPONSE
            // ==================================

            const aiData =
                responseFromAI?.data;


            let aiText = "";


            // Backend normally returns String
            if (
                typeof aiData ===
                "string"
            ) {

                aiText = aiData;

            }


            // Backend returns Object
            else if (
                aiData &&
                typeof aiData ===
                "object"
            ) {

                if (
                    typeof aiData.message ===
                    "string"
                ) {

                    aiText =
                        aiData.message;

                }

                else if (
                    typeof aiData.content ===
                    "string"
                ) {

                    aiText =
                        aiData.content;

                }

                else {

                    aiText =
                        JSON.stringify(
                            aiData,
                            null,
                            2
                        );
                }
            }


            // Empty response
            if (!aiText) {

                aiText =
                    "Sorry, I didn't receive a response from the AI.";

            }


            console.log(
                "AI Text:",
                aiText
            );


            // ==================================
            // ADD AI MESSAGE
            // ==================================

            setMessage((prev) => [
                ...prev,
                {
                    id: uuidv4(),
                    author: "boot",
                    text: aiText,
                    at: new Date().toLocaleTimeString(),
                },
            ]);

        }


        catch (error) {

            console.error(
                "Error sending message:",
                error
            );


            let errorMessage =
                "Sorry, something went wrong. Please try again.";


            if (error?.response) {

                console.error(
                    "Status:",
                    error.response.status
                );

                console.error(
                    "Backend error:",
                    error.response.data
                );


                if (
                    typeof error.response.data ===
                    "string"
                ) {

                    errorMessage =
                        error.response.data;

                }
            }


            // Add error message
            setMessage((prev) => [
                ...prev,
                {
                    id: uuidv4(),
                    author: "boot",
                    text: errorMessage,
                    at: new Date().toLocaleTimeString(),
                },
            ]);

        }


        finally {

            setSending(false);


            setTimeout(() => {

                inputRef.current?.focus();

            }, 100);

        }
    }


    // ==========================================
    // ENTER KEY
    // ==========================================

    function handleKeyDown(event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }
    }


    // ==========================================
    // LOGOUT
    // ==========================================

    function handleLogOut() {

        navigate("/");

    }


    return (

        <div
            className="
                fixed
                inset-0
                mx-auto
                max-w-7xl
                h-screen
                overflow-hidden
                grid
                grid-cols-1
                md:grid-cols-[300px_minmax(0,1fr)]
                border-x
                min-h-0
            "
        >

            {/* ================================= */}
            {/* SIDEBAR */}
            {/* ================================= */}

            <div className="min-h-0">

                <aside
                    className="
                        hidden
                        md:flex
                        md:flex-col
                        border-r
                        h-screen
                        min-h-0
                    "
                >

                    {/* SEARCH */}

                    <div
                        className="
                            p-3
                            flex
                            items-center
                            gap-3
                            shrink-0
                        "
                    >

                        <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                        >

                            <Plus
                                className="h-4 w-4"
                            />

                        </Button>


                        <div
                            className="
                                relative
                                w-full
                            "
                        >

                            <input
                                placeholder="Search Chats..."
                                type="text"
                                className="
                                    h-9
                                    pl-7
                                    border
                                    rounded-xl
                                    w-full
                                    outline-none
                                "
                            />


                            <Search
                                className="
                                    h-4
                                    w-4
                                    pointer-events-none
                                    absolute
                                    left-2
                                    top-1/2
                                    -translate-y-1/2
                                    text-muted-foreground
                                "
                            />

                        </div>

                    </div>


                    <Separator />

                </aside>

            </div>


            {/* ================================= */}
            {/* CHAT AREA */}
            {/* ================================= */}

            <div
                className="
                    min-h-0
                    min-w-0
                "
            >

                <section
                    className="
                        h-screen
                        min-h-0
                        flex
                        flex-col
                        border-l
                    "
                >

                    {/* ================================= */}
                    {/* HEADER */}
                    {/* ================================= */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            gap-3
                            px-4
                            py-3
                            border-b
                            shrink-0
                        "
                    >

                        <div
                            className="
                                flex
                                gap-3
                            "
                        >

                            <div
                                className="
                                    h-9
                                    w-9
                                    rounded-full
                                    bg-gray-200
                                    text-black
                                    flex
                                    items-center
                                    justify-center
                                    text-sm
                                    font-medium
                                    shrink-0
                                "
                            >
                                LS
                            </div>


                            <div
                                className="
                                    leading-tight
                                "
                            >

                                <div
                                    className="
                                        text-sm
                                        font-medium
                                    "
                                >
                                    Liza Support
                                </div>


                                <div
                                    className="
                                        text-xs
                                        text-muted-foreground
                                    "
                                >

                                    {sending
                                        ? "Typing..."
                                        : "Online"}

                                </div>

                            </div>

                        </div>


                        <div>

                            {/* LOGOUT */}

                            <Button
                                onClick={
                                    handleLogOut
                                }
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                            >

                                <LogOut
                                    className="h-4 w-4"
                                />

                            </Button>


                            {/* MORE */}

                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                            >

                                <MoreVertical
                                    className="h-4 w-4"
                                />

                            </Button>

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* MESSAGES */}
                    {/* ================================= */}

                    <ScrollArea
                        className="
                            flex-1
                            min-h-0
                            overflow-hidden
                        "
                    >

                        <div
                            className="
                                mx-auto
                                max-w-3xl
                                px-6
                                py-6
                                space-y-6
                            "
                        >

                            {message.map(
                                (chat) => (

                                    <MessageBubble
                                        key={
                                            chat.id
                                        }
                                        author={
                                            chat.author
                                        }
                                        at={
                                            chat.at
                                        }
                                    >

                                        {
                                            chat.text
                                        }

                                    </MessageBubble>

                                )
                            )}


                            {/* AUTO SCROLL */}

                            <div
                                ref={endRef}
                            />

                        </div>

                    </ScrollArea>


                    {/* ================================= */}
                    {/* COMPOSER */}
                    {/* ================================= */}

                    <div
                        className="
                            border-t
                            p-3
                            shrink-0
                            bg-background
                        "
                    >

                        <div
                            className="
                                mx-auto
                                flex
                                max-w-3xl
                                gap-3
                            "
                        >

                            {/* INPUT */}

                            <Input
                                ref={inputRef}
                                value={draft}
                                onChange={(e) =>
                                    setDraft(
                                        e.target
                                            .value
                                    )
                                }
                                onKeyDown={
                                    handleKeyDown
                                }
                                placeholder="Ask anything..."
                                className="
                                    flex-1
                                    rounded-full
                                    h-9
                                    pl-7
                                    border
                                "
                                disabled={
                                    sending
                                }
                            />


                            {/* SEND */}

                            <Button
                                disabled={
                                    sending ||
                                    !draft.trim()
                                }
                                onClick={
                                    sendMessage
                                }
                                className="
                                    rounded-full
                                    px-5
                                    flex
                                    gap-2
                                    items-center
                                "
                            >

                                <Send
                                    className="h-4 w-4"
                                />


                                <span>

                                    {sending
                                        ? "Sending..."
                                        : "Send"}

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