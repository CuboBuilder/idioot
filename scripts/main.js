if(typeof a==="undefined"){let b,c=!1;a=Events.on(ClientChatEvent,d=>{let e=d.message.toLowerCase();if(e==="$start spam"&&typeof b==="undefined")b=Timer.schedule(()=>{Call.sendChatMessage(c?"☺You are an idiot☻":"[#0]☻You are an idiot☺");c=!c},0,.5),Call.sendChatMessage("Made by amogus228. made for Spy/Sinner [#ff]ONLY"),print("started.");if(e==="$stop spam"&&typeof b!=="undefined")b.cancel(),delete b,print("⛔ Stopped.");});print("spamhandler active.");}else print("already active.");

// хай свали отсюда пж это код амогуса228
