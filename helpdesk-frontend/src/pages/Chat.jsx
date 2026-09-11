import { Button } from "@base-ui/react";
import { Separator, } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoreVertical, Plus, Search } from "lucide-react";
import React from 'react'
import MessageBubble from "../components/ui/MessageBubble";


 const CHATS = [
        {
            id:1,
            name:"spring boot...",
            lastMessage:"How to create rest api in spring boot",
            unread:2,
            initials:"SB",
        },
        {
            id:2,
            name:"java...",
            lastMessage:"How to create object in java",
            unread:4,
            initials:"AB",
        },
        {
            id:3,
            name:"c...",
            lastMessage:"How to create object in c",
            unread:1,
            initials:"AB",
        },
        {
            id:4,
            name:"javaScript...",
            lastMessage:"How to create object in javascript",
            unread:3,
            initials:"AB",
        }
    ]

    const CONVERSATION = [
        {
            id:1,
            author:"boot",
            text:"Hello How can I assist you with Spring Boot today?",
            at:"10:00 AM ",
        },
        {
            id:2,
            author:"user",
            text:"can you help me with the database migration?",
            at:"10:01 AM ",
        },
        {
            id:1,
            author:"boot",
            text:"ok can you provide me the details of your current database setup?",
            at:"10:03 AM ",
        },
    ]

function Chat() {

  return (
    <div className='mx-auto min-h-screen max-w-7xl grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] border-x'>
        <div>
            {/* sidebar */}
            <aside className='hidden md:flex md:flex-col border-r'>
                <div className='p-3 flex items-center gap-3'>
                    <Button size={'icon'} variant={'outline'} className={'h-8 w-8'}>
                        <Plus className='h-4 w-4'/>
                    </Button>
                    <div className='relative w-full'>
                        <input placeholder='Search Chats...' type='text' className='h-9 pl-9 border rounded-xl'/>
                        <Search className="h-4 w-4 pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"/>
                    </div>
                </div>
                <Separator/>
            </aside>
        </div>
        <div>
            {/* chat area */}
           <section className="h-full">
                {/* header */}
                <div className='flex items-center justify-between gap-3 px-4 py-3 border-b'>
                    <div className="flex  gap-3">
                         <div className="h-9 w-9 rounded-full bg-gray-200 text-black flex items-center justify-center text-sm font-medium">
                            LS
                        </div>
                        <div className='leading-tight'>
                            <div className='text-sm font-medium'>
                                Liza Support
                            </div>
                            <div className='text-xs text-muted-foreground'>
                                Online Typing...
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button variant="ghost" size="icon" className={'h-8 w-8'}>
                            <Search className="h-4 w-4"/>
                        </Button>
                        <Button variant="ghost" size="icon" className={'h-8 w-8'}>
                            <MoreVertical className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>

                {/* Chat Area */}
                <ScrollArea className="flex-1">

                    <div className="mx-auto max-w-3xl px-6 py-6 space-y-6 ">

                        {
                            CONVERSATION.map((Chat, index)=>(
                                <MessageBubble key={Chat.id} author={Chat.author} at={Chat.at}>
                                    {Chat.text}
                                </MessageBubble>
                            ))
                        }

                    </div>

                </ScrollArea>
           </section>
        </div>
    </div>
  )
}

export default Chat