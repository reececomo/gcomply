import { g } from "../inflect";

describe( "g", () =>
{
    test( "multi-argument cases", () =>
    {
        let postCount = 1;
        let postType = "message";
        let friendRequestCount = 3;

        expect(g`${postCount} new ${postType}, ${friendRequestCount} new friend requests`)
            .toBe("1 new message, 3 new friend requests");

        postCount = 1;
        postType = "posts";
        friendRequestCount = 1;
        expect(g`${postCount} new ${postType}, ${friendRequestCount} new friend requests`)
            .toBe("1 new post, 1 new friend request");

        postCount = 4;
        postType = "email";
        friendRequestCount = 5;
        expect(g`${postCount} new ${postType}, ${friendRequestCount} new friend requests`)
            .toBe("4 new emails, 5 new friend requests");

        postCount = 2;
        postType = "private message";
        friendRequestCount = 1;
        expect(g`${postCount} new ${postType}, ${friendRequestCount} new friend requests`)
            .toBe("2 new private messages, 1 new friend request");
    });

    test( "example cases", () =>
    {
        expect(g`You have ${5} new message.`).toBe("You have 5 new messages.");
        expect(g`You have ${1} new messages.`).toBe("You have 1 new message.");

        expect(g`${3} file uploaded successfully.`).toBe("3 files uploaded successfully.");
        expect(g`${1} files uploaded successfully.`).toBe("1 file uploaded successfully.");

        expect(g`Showing ${20} result.`).toBe("Showing 20 results.");
        expect(g`Showing ${1} results.`).toBe("Showing 1 result.");

        expect(g`${2} item in your cart`).toBe("2 items in your cart");
        expect(g`${1} items in your cart`).toBe("1 item in your cart");

        expect(g`${4} friend request pending`).toBe("4 friend requests pending");
        expect(g`${1} friend requests pending`).toBe("1 friend request pending");

        expect(g`${8} notification`).toBe("8 notifications");
        expect(g`${1} notifications`).toBe("1 notification");

        expect(g`${6} task completed`).toBe("6 tasks completed");
        expect(g`${1} tasks completed`).toBe("1 task completed");

        expect(g`${12} comment added`).toBe("12 comments added");
        expect(g`${1} comments added`).toBe("1 comment added");

        expect(g`${3} hour ago`).toBe("3 hours ago");
        expect(g`${1} hours ago`).toBe("1 hour ago");

        expect(g`Your balance is ${25} dollar.`).toBe("Your balance is 25 dollars.");
        expect(g`Your balance is ${1} dollars.`).toBe("Your balance is 1 dollar.");

        expect(g`${9} user online`).toBe("9 users online");
        expect(g`${1} users online`).toBe("1 user online");

        expect(g`${7} document available`).toBe("7 documents available");
        expect(g`${1} documents available`).toBe("1 document available");

        expect(g`${4} error found`).toBe("4 errors found");
        expect(g`${1} errors found`).toBe("1 error found");

        expect(g`${10} unread email`).toBe("10 unread emails");
        expect(g`${1} unread emails`).toBe("1 unread email");

        expect(g`${5} upcoming event`).toBe("5 upcoming events");
        expect(g`${1} upcoming events`).toBe("1 upcoming event");

        expect(g`${2} attachment included`).toBe("2 attachments included");
        expect(g`${1} attachments included`).toBe("1 attachment included");

        expect(g`${14} item saved`).toBe("14 items saved");
        expect(g`${1} items saved`).toBe("1 item saved");

        expect(g`${6} bookmark added`).toBe("6 bookmarks added");
        expect(g`${1} bookmarks added`).toBe("1 bookmark added");

        expect(g`${3} attempt remaining`).toBe("3 attempts remaining");
        expect(g`${1} attempts remaining`).toBe("1 attempt remaining");

        expect(g`${15} minute left`).toBe("15 minutes left");
        expect(g`${1} minutes left`).toBe("1 minute left");

        expect(g`There are ${1} people in queue`).toBe("There is 1 person in queue");
        expect(g`There is ${4} person in queue`).toBe("There are 4 people in queue");
    });
});
