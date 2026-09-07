package com.helpDesk.tool;

import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Component;

@Component
public class EmailTool {

    @Tool(description = "This tool helps to send email to support team regarding new ticket.")
    public void sendEmailToSupportTeam(@ToolParam(description = "Email is associated with ticket for contact information") String email, @ToolParam(description = "short description of ticket summary.") String message)
    {
        System.out.println("going to send email to support team");
        System.out.println("email:"+email);
        System.out.println("message"+message);
    }
}
